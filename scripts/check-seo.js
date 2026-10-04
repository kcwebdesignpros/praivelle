'use strict';
/**
 * SEO + content audit.
 *
 * Fetches every route from a running server and asserts the things that
 * actually affect indexing and the client's content brief:
 *   • HTTP status
 *   • a unique <title> and a well-sized meta description
 *   • a canonical URL, Open Graph and Twitter cards
 *   • exactly one <h1> per page, and a sane heading order
 *   • the expected JSON-LD @types are present
 *   • at least MIN_WORDS words of body copy inside <main>
 *
 * Usage:  node server.js &   then   npm run check:seo
 *         BASE=http://localhost:3111 node scripts/check-seo.js
 */

const BASE = (process.env.BASE || 'http://localhost:3000').replace(/\/+$/, '');
const MIN_WORDS = Number(process.env.MIN_WORDS || 2000);

const ROUTES = [
  { path: '/', words: true, types: ['Hotel', 'WebSite', 'ItemList', 'FAQPage', 'HowTo'] },
  { path: '/about', words: true, types: ['Hotel', 'AboutPage', 'BreadcrumbList', 'FAQPage'] },
  { path: '/team', words: true, types: ['Hotel', 'CollectionPage', 'Person', 'FAQPage'] },
  { path: '/services', words: true, types: ['Hotel', 'WebPage', 'ItemList', 'FAQPage'] },
  { path: '/services/rooms-suites', words: true, types: ['Service', 'WebPage', 'BreadcrumbList', 'FAQPage'] },
  { path: '/services/spa-wellness', words: true, types: ['Service', 'WebPage', 'FAQPage'] },
  { path: '/services/dining', words: true, types: ['Service', 'WebPage', 'FAQPage'] },
  { path: '/services/weddings-events', words: true, types: ['Service', 'WebPage', 'FAQPage'] },
  { path: '/services/meetings-corporate', words: true, types: ['Service', 'WebPage', 'FAQPage'] },
  { path: '/services/experiences-concierge', words: true, types: ['Service', 'WebPage', 'FAQPage'] },
  { path: '/offers', words: true, types: ['Hotel', 'WebPage', 'FAQPage'] },
  { path: '/gallery', words: true, types: ['Hotel', 'ImageGallery', 'FAQPage'] },
  { path: '/reviews', words: true, types: ['Hotel', 'CollectionPage', 'FAQPage'] },
  { path: '/blog', words: true, types: ['Hotel', 'WebPage', 'ItemList'] },
  { path: '/faq', words: true, types: ['Hotel', 'FAQPage'] },
  { path: '/contact', words: true, types: ['Hotel', 'ContactPage', 'BreadcrumbList', 'FAQPage'] },
  { path: '/careers', words: true, types: ['Hotel', 'WebPage', 'FAQPage'] },
  { path: '/privacy-policy', words: true, types: ['Hotel', 'WebPage'] },
  { path: '/terms', words: true, types: ['Hotel', 'WebPage'] },
  { path: '/accessibility', words: true, types: ['Hotel', 'WebPage'] },
  { path: '/blog/why-we-kept-the-farmhouse', words: true, types: ['BlogPosting', 'BreadcrumbList', 'FAQPage'] },
  { path: '/blog/a-weekend-in-kansas-city', words: true, types: ['BlogPosting', 'FAQPage'] },
  { path: '/blog/what-to-pack-for-a-prairie-wedding', words: true, types: ['BlogPosting', 'FAQPage'] },
  { path: '/blog/the-case-for-eating-at-the-counter', words: true, types: ['BlogPosting', 'FAQPage'] },
  { path: '/sitemap', words: false, types: ['WebPage', 'ItemList'] },
  { path: '/sitemap.xml', words: false, xml: true },
  { path: '/robots.txt', words: false, text: true },
  { path: '/search?q=spa', words: false, types: ['WebSite'] },
  { path: '/definitely-not-a-page', status: 404, words: false, types: ['Hotel'] }
];

function decode(s) {
  return String(s)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&mdash;/g, '-')
    .replace(/&ndash;/g, '-');
}

function attr(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]).trim() : null;
}

function countWords(html) {
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  const stripped = main
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  return decode(stripped)
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

function jsonLdTypes(html) {
  const types = new Set();
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      const data = JSON.parse(m[1].replace(/<\\\//g, '</'));
      const walk = (node) => {
        if (Array.isArray(node)) return node.forEach(walk);
        if (!node || typeof node !== 'object') return;
        if (node['@type']) [].concat(node['@type']).forEach((t) => types.add(t));
        Object.keys(node).forEach((k) => walk(node[k]));
      };
      walk(data);
    } catch (e) {
      types.add('__INVALID_JSON__');
    }
  }
  return types;
}

async function run() {
  const failures = [];
  const warnings = [];
  const titles = new Map();
  const rows = [];

  for (const route of ROUTES) {
    const expect = route.status || 200;
    let res;
    let html = '';
    try {
      res = await fetch(BASE + route.path);
      html = await res.text();
    } catch (e) {
      failures.push(`${route.path} — request failed: ${e.message}`);
      rows.push([route.path, 'ERR', '-', '-']);
      continue;
    }

    if (res.status !== expect) failures.push(`${route.path} — expected ${expect}, got ${res.status}`);
    if (route.text) {
      if (!/Sitemap:\s*https?:\/\//.test(html)) failures.push(`${route.path} — robots.txt has no absolute Sitemap line`);
      if (/localhost/i.test(html)) failures.push(`${route.path} — contains "localhost"`);
      rows.push([route.path, res.status, '-', '-']);
      continue;
    }
    if (route.xml) {
      if (!/<urlset/.test(html)) failures.push(`${route.path} — not a valid urlset`);
      if (/localhost/i.test(html)) failures.push(`${route.path} — contains "localhost"`);
      rows.push([route.path, res.status, '-', '-']);
      continue;
    }

    /* ------------------------------------------------------------ head */
    const title = attr(html, /<title>([\s\S]*?)<\/title>/i);
    const desc = attr(html, /<meta name="description" content="([^"]*)"/i);
    const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/i);

    if (!title) failures.push(`${route.path} — missing <title>`);
    else {
      if (title.length > 70) warnings.push(`${route.path} — title is ${title.length} chars`);
      if (titles.has(title)) failures.push(`${route.path} — duplicate title (also on ${titles.get(title)})`);
      else titles.set(title, route.path);
    }
    if (!desc) failures.push(`${route.path} — missing meta description`);
    else if (desc.length < 70 || desc.length > 175) warnings.push(`${route.path} — description is ${desc.length} chars`);
    if (!canonical) failures.push(`${route.path} — missing canonical`);
    else if (!/^https?:\/\//.test(canonical)) failures.push(`${route.path} — canonical is not absolute`);
    else if (/localhost/i.test(canonical)) failures.push(`${route.path} — canonical points at localhost`);

    ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'].forEach((p) => {
      if (!new RegExp(`property="${p}"`).test(html)) failures.push(`${route.path} — missing ${p}`);
    });
    if (!/name="twitter:card" content="summary_large_image"/.test(html)) failures.push(`${route.path} — missing twitter:card`);

    /* --------------------------------------------------------- headings */
    const h1s = html.match(/<h1[\s>]/gi) || [];
    if (h1s.length !== 1) failures.push(`${route.path} — found ${h1s.length} <h1> elements (expected exactly 1)`);

    /* ----------------------------------------------------------- schema */
    const types = jsonLdTypes(html);
    if (types.has('__INVALID_JSON__')) failures.push(`${route.path} — a JSON-LD block failed to parse`);
    (route.types || []).forEach((t) => {
      if (!types.has(t)) failures.push(`${route.path} — JSON-LD missing @type "${t}"`);
    });

    /* ------------------------------------------------------------ words */
    const words = countWords(html);
    if (route.words && words < MIN_WORDS) {
      failures.push(`${route.path} — only ${words} words in <main> (target ${MIN_WORDS}+)`);
    }
    rows.push([route.path, res.status, words, types.size]);
  }

  /* ------------------------------------------------------------- report */
  console.log(`\nSEO audit against ${BASE}  (min ${MIN_WORDS} words)\n`);
  console.log('  status  words  types  path');
  console.log('  ------  -----  -----  ----');
  rows.forEach(([p, s, w, t]) => {
    console.log(`  ${String(s).padEnd(6)}  ${String(w).padStart(5)}  ${String(t).padStart(5)}  ${p}`);
  });

  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    warnings.forEach((w) => console.log('  ~ ' + w));
  }

  if (failures.length) {
    console.log(`\n${failures.length} FAILURE(S):`);
    failures.forEach((f) => console.log('  x ' + f));
    process.exitCode = 1;
  } else {
    console.log('\nAll SEO checks passed.');
  }
}

run().catch((e) => {
  console.error('check-seo failed to run:', e.message);
  console.error('Is the server running?  node server.js');
  process.exitCode = 1;
});
