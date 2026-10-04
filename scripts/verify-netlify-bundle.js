'use strict';
/**
 * Netlify serverless-bundle verification.
 *
 * Netlify runs no long-lived Node process — the whole Express app is bundled
 * into ONE function by esbuild and shipped without node_modules. Two classes of
 * bug appear only there and are invisible to `node server.js`:
 *
 *   1. Templates read from disk at runtime  → needs `included_files`
 *   2. `require(variable)` inside our code  → esbuild cannot resolve it
 *
 * This script copies the runtime directories into an isolated temp folder
 * (nowhere near the project's node_modules), loads the REAL bundled handler and
 * invokes it with synthetic Lambda-style events.
 *
 * The bundling step is done for you by `npm run verify:bundle`, which runs
 * esbuild and then calls this file. To run the steps by hand:
 *
 *   node_modules/.bin/esbuild netlify/functions/server.js --bundle \
 *     --platform=node --target=node20 --format=cjs --outfile=.bundle-sim/server.js
 *   node scripts/verify-netlify-bundle.js
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SIM = path.join(os.tmpdir(), 'praivelle-bundle-sim');
const LOCAL_BUNDLE = path.join(ROOT, '.bundle-sim', 'server.js');
const BUNDLE = path.join(SIM, 'netlify', 'functions', 'server.js');

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, e.name);
    const dest = path.join(to, e.name);
    if (e.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

/** Walk upward from `dir` looking for a node_modules folder. */
function hasNodeModulesOnPath(dir) {
  let cur = path.resolve(dir);
  for (let i = 0; i < 8; i++) {
    if (fs.existsSync(path.join(cur, 'node_modules'))) return cur;
    const parent = path.dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return null;
}

function event(pathname, method) {
  return {
    path: pathname,
    httpMethod: method || 'GET',
    headers: { host: 'praivellehouse.com', 'x-forwarded-proto': 'https' },
    queryStringParameters: null,
    body: null,
    isBase64Encoded: false
  };
}

async function main() {
  console.log('Netlify bundle verification\n');

  if (!fs.existsSync(LOCAL_BUNDLE)) {
    console.error('  x no bundle found at ' + LOCAL_BUNDLE);
    console.error('    Run `npm run verify:bundle`, which builds it first.');
    process.exitCode = 1;
    return;
  }

  // Move the bundle into the isolated simulation directory.
  fs.rmSync(SIM, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(BUNDLE), { recursive: true });
  fs.copyFileSync(LOCAL_BUNDLE, BUNDLE);

  /* ------------------------------- copy what `included_files` would copy */
  ['views', 'data', 'lib'].forEach((d) => copyDir(path.join(ROOT, d), path.join(SIM, d)));
  fs.mkdirSync(path.join(SIM, 'img'), { recursive: true });
  fs.copyFileSync(path.join(ROOT, 'img', 'manifest.json'), path.join(SIM, 'img', 'manifest.json'));
  console.log('  \u2713 copied views/ data/ lib/ img/manifest.json (matching included_files)');

  /* ------------------------------------------- assert real isolation */
  const leak = hasNodeModulesOnPath(path.join(SIM, 'netlify', 'functions'));
  if (leak) {
    console.error('  x found node_modules at ' + leak + ' — the test would give a false pass');
    process.exitCode = 1;
    return;
  }
  console.log('  \u2713 simulation is isolated (no node_modules on the resolution path)');

  const bytes = fs.statSync(BUNDLE).size;
  console.log(`  \u2713 bundle is ${(bytes / 1024).toFixed(0)} KB`);

  /* ------------------------------------------------------ invoke handler */
  const { handler } = require(BUNDLE);
  const routes = [
    ['/', 200, 'Praivelle House'],
    ['/about', 200, 'Praivelle House'],
    ['/team', 200, 'Genevi'],
    ['/services', 200, 'Rooms &amp; Suites'],
    ['/services/rooms-suites', 200, 'Garden King'],
    ['/services/spa-wellness', 200, 'Prairie Reset'],
    ['/services/dining', 200, 'Baptiste'],
    ['/services/weddings-events', 200, 'Whitfield'],
    ['/services/meetings-corporate', 200, 'delegate'],
    ['/services/experiences-concierge', 200, 'concierge'],
    ['/offers', 200, 'Prairie Escape'],
    ['/gallery', 200, 'gallery'],
    ['/reviews', 200, 'review'],
    ['/blog', 200, 'Journal'],
    ['/blog/why-we-kept-the-farmhouse', 200, 'farmhouse'],
    ['/faq', 200, 'FAQ'],
    ['/contact', 200, 'front desk'],
    ['/careers', 200, 'Praivelle House'],
    ['/privacy-policy', 200, 'Privacy'],
    ['/terms', 200, 'Terms'],
    ['/accessibility', 200, 'Accessibility'],
    ['/sitemap', 200, 'Sitemap'],
    ['/sitemap.xml', 200, '<urlset'],
    ['/robots.txt', 200, 'Sitemap: https://'],
    ['/no-such-page', 404, '404']
  ];

  let failed = 0;
  for (const [p, expect, needle] of routes) {
    let res;
    try {
      res = await handler(event(p), {});
    } catch (err) {
      failed++;
      console.log(`  x ${p} — handler threw: ${err.message}`);
      continue;
    }
    const body = res.body || '';
    const ok = res.statusCode === expect && body.indexOf(needle) > -1;
    if (!ok) {
      failed++;
      console.log(
        `  x ${p} — got ${res.statusCode}, expected ${expect}; needle "${needle}" ${
          body.indexOf(needle) > -1 ? 'found' : 'MISSING'
        }`
      );
    }
  }
  if (!failed) console.log(`  \u2713 all ${routes.length} routes render inside the bundled function`);

  /* ------------------------------------------- GET the search route */
  // A real Lambda event carries the query string separately from `path`.
  const search = await handler(
    Object.assign(event('/search'), { queryStringParameters: { q: 'spa' } }),
    {}
  );
  if (search.statusCode === 200 && /Search the site|Results for/.test(search.body || '')) {
    console.log('  \u2713 GET /search renders with a query string');
  } else {
    failed++;
    console.log(`  x GET /search returned ${search.statusCode} (expected 200)`);
  }

  /* ------------------------------------------- POST the enquiry form */
  const post = await handler(
    {
      path: '/contact',
      httpMethod: 'POST',
      headers: {
        host: 'praivellehouse.com',
        'x-forwarded-proto': 'https',
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: 'firstName=Ada&lastName=Lovelace&email=ada%40example.com&phone=8165550147&consent=yes&message=Anniversary',
      isBase64Encoded: false
    },
    {}
  );
  if (post.statusCode === 200 && /enquiry is with the front desk/.test(post.body || '')) {
    console.log('  \u2713 POST /contact accepts a valid enquiry');
  } else {
    failed++;
    console.log(`  x POST /contact returned ${post.statusCode} (expected the success state)`);
  }

  const invalid = await handler(
    {
      path: '/contact',
      httpMethod: 'POST',
      headers: { host: 'praivellehouse.com', 'content-type': 'application/x-www-form-urlencoded' },
      body: 'firstName=&lastName=&email=nope&phone=12',
      isBase64Encoded: false
    },
    {}
  );
  if (invalid.statusCode === 422) {
    console.log('  \u2713 POST /contact rejects an invalid enquiry with 422');
  } else {
    failed++;
    console.log(`  x POST /contact should return 422 for invalid input, got ${invalid.statusCode}`);
  }

  console.log(
    failed
      ? `\n${failed} problem(s) found in the bundled function.`
      : '\nBundle verification passed — the Netlify deploy will render correctly.'
  );
  if (failed) process.exitCode = 1;
}

main().catch((e) => {
  console.error('verify:bundle failed:', e.stack || e.message);
  process.exitCode = 1;
});
