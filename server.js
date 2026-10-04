'use strict';
/**
 * Praivelle House — Express server.
 *
 * Host-agnostic: runs as a normal Node process, inside a Netlify function
 * (via netlify/functions/server.js + serverless-http) and on Vercel.
 */

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const compression = require('compression');
const ejs = require('ejs'); // static require → bundlers can see it (see engine note below)

const ROOT = require('./lib/root');
const site = require('./data/site');
const services = require('./data/services');
const { pages, bySlug } = require('./data/pages');
const { posts, bySlug: postBySlug, categories } = require('./data/posts');
const home = require('./data/home');
const rooms = require('./data/rooms');
const { icon } = require('./lib/icons');
const { imgTag, srcset, width: imgWidth, height: imgHeight } = require('./lib/img');
const S = require('./lib/schema');

const app = express();
const PORT = process.env.PORT || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

/* ------------------------------------------------------------------ engine */
// Registering the engine up front is load-bearing: Express resolves view
// engines with a *dynamic* require (`require(mod).__express`) that bundlers
// cannot see, which breaks `Cannot find module 'ejs'` inside a Netlify
// function. Pre-registering makes Express skip the lookup entirely.
app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');
app.set('views', path.join(ROOT, 'views'));
app.set('trust proxy', true);
app.disable('x-powered-by');

/* ----------------------------------------------------------------- helpers */
function fmtNum(value, decimals) {
  const n = Number(value) || 0;
  const d = decimals || 0;
  const str = d ? n.toFixed(d) : String(Math.round(n));
  const parts = str.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function fmtDate(value) {
  if (!value) return '';
  const dt = new Date(value + (String(value).length === 10 ? 'T12:00:00Z' : ''));
  if (isNaN(dt.getTime())) return value;
  return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

function absUrl(p) {
  if (!p) return site.url;
  if (/^https?:\/\//i.test(p)) return p;
  return site.url + (p.charAt(0) === '/' ? p : '/' + p);
}

function assetVersion() {
  try {
    let hash = '';
    ['public/css/style.css', 'public/js/main.js'].forEach((f) => {
      const st = fs.statSync(path.join(ROOT, f));
      hash += st.size + '-' + Math.round(st.mtimeMs);
    });
    return crypto.createHash('md5').update(hash).digest('hex').slice(0, 8);
  } catch (_) {
    return '1';
  }
}
const ASSET_V = assetVersion();

/* ------------------------------------------------------------- middleware */
app.use(compression());

app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.locals.nonce = nonce;

  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "img-src 'self' data:",
      "font-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      `script-src 'self' 'nonce-${nonce}'`,
      "connect-src 'self'",
      'upgrade-insecure-requests'
    ].join('; ')
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('X-DNS-Prefetch-Control', 'off');
  if (IS_PROD) res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  next();
});

// Long-lived immutable caching for static assets, short revalidating cache for HTML.
const imgOpts = { maxAge: '365d', immutable: true, etag: false, lastModified: false, fallthrough: true };
const cssOpts = { maxAge: '365d', immutable: true, etag: false, lastModified: false, fallthrough: true };

app.use('/img', express.static(path.join(ROOT, 'img'), imgOpts));
app.use('/fonts', express.static(path.join(ROOT, 'public', 'fonts'), cssOpts));
app.use(express.static(path.join(ROOT, 'public'), cssOpts));

// Netlify publishes `public/`, so the build copies img/ into public/img/.
// Serve that copy too when it exists (harmless locally).
const publicImg = path.join(ROOT, 'public', 'img');
if (fs.existsSync(publicImg)) app.use('/img', express.static(publicImg, imgOpts));

app.use(express.urlencoded({ extended: false, limit: '64kb' }));
app.use(express.json({ limit: '64kb' }));

/* --------------------------------------------------------- shared locals */
app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.services = services;
  res.locals.pages = { pages, bySlug };
  res.locals.posts = posts;
  res.locals.categories = categories;
  res.locals.home = home;
  res.locals.rooms = rooms;
  res.locals.icon = icon;
  res.locals.imgTag = imgTag;
  res.locals.srcset = srcset;
  res.locals.imgWidth = imgWidth;
  res.locals.imgHeight = imgHeight;
  res.locals.fmtNum = fmtNum;
  res.locals.fmtDate = fmtDate;
  res.locals.absUrl = absUrl;
  res.locals.assetVersion = ASSET_V;
  res.locals.currentPath = req.path;
  res.locals.year = new Date().getFullYear();
  res.locals.isActive = function (p) {
    if (!p || p === '/') return req.path === '/';
    return req.path === p || req.path.indexOf(p + '/') === 0;
  };
  next();
});

/* ----------------------------------------------------------- search index */
const SEARCH_INDEX = []
  .concat(
    rooms.map((r) => ({
      title: r.name,
      path: r.path,
      type: 'Room',
      text: r.where + ' · from ' + r.price + ' per night',
      keys: [r.name, r.badge, r.where].concat((r.meta || []).map((m) => m.label)).join(' ')
    }))
  )
  .concat(
    services.map((s) => ({
      title: s.name,
      path: '/services/' + s.slug,
      type: 'Service',
      text: s.metaDescription,
      keys: [s.name, s.shortName, s.tagline].concat(s.highlights || []).join(' ')
    }))
  )
  .concat(
    pages.map((p) => ({
      title: p.name,
      path: p.path,
      type: 'Patient information',
      text: p.metaDescription,
      keys: [p.name, p.h1, p.metaKeywords].join(' ')
    }))
  )
  .concat(
    posts.map((p) => ({
      title: p.title,
      path: '/blog/' + p.slug,
      type: 'Article',
      text: p.excerpt,
      keys: [p.title, p.category, (p.tags || []).join(' ')].join(' ')
    }))
  )
  .concat(
    site.team.map((t) => ({
      title: t.name + (t.credentials ? ', ' + t.credentials : ''),
      path: '/team#' + t.slug,
      type: 'Our team',
      text: t.short,
      keys: [t.name, t.role, (t.specialties || []).join(' ')].join(' ')
    }))
  );

function runSearch(q) {
  const query = String(q || '').trim().toLowerCase();
  if (!query) return [];
  const terms = query.split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];

  return SEARCH_INDEX.map((item) => {
    const title = item.title.toLowerCase();
    const body = (item.text + ' ' + item.keys).toLowerCase();
    let score = 0;
    terms.forEach((t) => {
      if (title.indexOf(t) > -1) score += 6;
      if (title.indexOf(t) === 0) score += 4;
      if (body.indexOf(t) > -1) score += 2;
      if (item.keys.toLowerCase().indexOf(t) > -1) score += 1;
    });
    return { item: item, score: score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map((r) => r.item);
}

/* ------------------------------------------------------------------ routes */
function crumbsFor(items) {
  return [{ name: 'Home', path: '/' }].concat(items);
}

/** Shared renderer for the generic inner pages. */
function renderPage(req, res, page, extra) {
  const opts = Object.assign(
    {
      page: page,
      crumbs: crumbsFor([{ name: page.name, path: page.path }]),
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: page.metaKeywords,
      canonical: absUrl(page.path),
      ogType: 'website',
      ogImage: absUrl(page.heroImage || site.ogImage),
      preloadImage: page.heroImage ? absUrl(page.heroImage) : null,
      preloadSrcset: page.heroImage ? srcset(page.heroImage) : null,
      preloadSizes: '100vw',
      bodyClass: 'page page--' + page.slug,
      schema: []
    },
    extra || {}
  );
  res.render('page', opts);
}

/* Home */
app.get('/', (req, res) => {
  res.render('index', {
    title: home.metaTitle,
    description: home.metaDescription,
    keywords: home.metaKeywords,
    canonical: absUrl('/'),
    ogType: 'website',
    ogImage: absUrl(site.ogImage),
    preloadImage: home.hero.image,
    preloadSrcset: srcset(home.hero.image),
    preloadSizes: '100vw',
    bodyClass: 'home',
    schema: [
      S.localBusiness(site),
      S.website(site),
      S.itemList(
        services.map((s) => ({ name: s.name, path: '/services/' + s.slug })),
        site,
        'Rooms, spa, dining and event services at ' + site.name
      ),
      home.faqs && home.faqs.length ? S.faqPage(home.faqs) : null,
      S.howTo(
        'What to expect when you stay at ' + site.name,
        [
          { title: 'Tell us why you are coming', text: 'Book online or call the front desk, which is staffed around the clock. Mention what the trip is for and we will match the room to it.' },
          { title: 'We confirm everything in writing', text: 'Your room, your rate and any treatment or table you have asked for are confirmed the same day, with free changes up to 72 hours before arrival.' },
          { title: 'Arrive and hand over the car', text: 'Pull into the porte-cochère and leave the keys with us. Valet parking is complimentary and check-in opens at three o\u2019clock.' },
          { title: 'Settle in and eat well', text: 'A hand-written welcome note, a carafe of water and the day\u2019s menu are waiting in the room. Dinner runs from half past five and the spa stays open until eight.' },
          { title: 'Leave later than you meant to', text: 'Breakfast runs until ten and late check-out to two is usually available on request. Before you go, the front desk will ask what you would change.' }
        ],
        site
      )
    ]
  });
});

/* Blog index — rendered from the page data file */
app.get('/blog', (req, res) => {
  const page = bySlug['blog-index'];
  if (!page) return res.status(404).render('404', notFoundOpts(req));
  renderPage(req, res, page, {
    ogType: 'website',
    schema: [
      S.localBusiness(site),
      S.webPage(page, site),
      S.breadcrumbs(crumbsFor([{ name: 'Journal', path: '/blog' }]), site),
      S.itemList(
        posts.map((p) => ({ name: p.title, path: '/blog/' + p.slug })),
        site,
        'Praivelle House Journal'
      ),
      page.faqs && page.faqs.length ? S.faqPage(page.faqs) : null
    ].filter(Boolean)
  });
});

/* Services index — the page data file lives at /services */
app.get('/services', (req, res) => {
  const page = bySlug['services-index'];
  if (!page) return res.status(404).render('404', notFoundOpts(req));
  renderPage(req, res, page, {
    schema: [
      S.localBusiness(site),
      S.webPage(page, site),
      S.breadcrumbs(crumbsFor([{ name: 'Services', path: '/services' }]), site),
      S.itemList(
        services.map((s) => ({ name: s.name, path: '/services/' + s.slug })),
        site,
        'Rooms, spa, dining and event services at ' + site.name
      ),
      page.faqs && page.faqs.length ? S.faqPage(page.faqs) : null
    ].filter(Boolean)
  });
});

/* Service detail */
app.get('/services/:slug', (req, res, next) => {
  const service = services.filter((s) => s.slug === req.params.slug)[0];
  if (!service) return next();

  res.render('service', {
    service: service,
    crumbs: crumbsFor([
      { name: 'Services', path: '/services' },
      { name: service.shortName, path: '/services/' + service.slug }
    ]),
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    canonical: absUrl('/services/' + service.slug),
    ogType: 'article',
    ogImage: absUrl(service.image),
    preloadImage: service.image,
    preloadSrcset: srcset(service.image),
    preloadSizes: '100vw',
    bodyClass: 'service service--' + service.slug,
    schema: [
      S.service(service, site),
      S.webPage(
        {
          path: '/services/' + service.slug,
          metaTitle: service.metaTitle,
          metaDescription: service.metaDescription,
          heroImage: service.image,
          schemaType: 'WebPage'
        },
        site
      ),
      S.breadcrumbs(
        crumbsFor([
          { name: 'Services', path: '/services' },
          { name: service.shortName, path: '/services/' + service.slug }
        ]),
        site
      ),
      service.faqs && service.faqs.length ? S.faqPage(service.faqs) : null
    ].filter(Boolean)
  });
});

/* Blog post */
app.get('/blog/:slug', (req, res, next) => {
  const post = postBySlug[req.params.slug];
  if (!post) return next();

  res.render('post', {
    post: post,
    crumbs: crumbsFor([
      { name: 'Journal', path: '/blog' },
      { name: post.category, path: '/blog' },
      { name: post.title, path: '/blog/' + post.slug }
    ]),
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
    canonical: absUrl('/blog/' + post.slug),
    ogType: 'article',
    ogImage: absUrl(post.image),
    preloadImage: post.image,
    preloadSrcset: srcset(post.image),
    preloadSizes: '100vw',
    bodyClass: 'post post--' + post.slug,
    schema: [
      S.blogPosting(post, site),
      S.breadcrumbs(
        crumbsFor([
          { name: 'Journal', path: '/blog' },
          { name: post.title, path: '/blog/' + post.slug }
        ]),
        site
      ),
      post.faqs && post.faqs.length ? S.faqPage(post.faqs) : null
    ].filter(Boolean)
  });
});

/* Search */
app.get('/search', (req, res) => {
  const q = String(req.query.q || '').slice(0, 80);
  const results = runSearch(q);
  res.render('search', {
    query: q,
    results: results,
    title: q
      ? 'Search results for "' + q + '" | ' + site.name
      : 'Search | ' + site.name + ' — Boutique Hotel in Kansas City',
    description:
      'Search ' +
      site.name +
      ' for rooms and suites, spa treatments, dining, weddings and the Journal. An independent boutique hotel serving the Kansas City metro.',
    keywords: 'search boutique hotel kansas city, find a spa hotel kansas city, prairie ridge hotel',
    canonical: absUrl('/search'),
    robots: 'noindex, follow',
    ogType: 'website',
    ogImage: absUrl(site.ogImage),
    bodyClass: 'search',
    schema: [S.website(site)]
  });
});

/* Contact (GET renders the page, POST handles the form) */
app.post('/contact', (req, res) => {
  const page = bySlug['contact'];
  const b = req.body || {};
  const errors = {};

  const clean = (v) => String(v == null ? '' : v).trim();
  const firstName = clean(b.firstName).slice(0, 80);
  const lastName = clean(b.lastName).slice(0, 80);
  const email = clean(b.email).slice(0, 160);
  const phone = clean(b.phone).slice(0, 40);
  const message = clean(b.message).slice(0, 2000);
  const consent = clean(b.consent);
  const honeypot = clean(b.website);

  if (!firstName) errors.firstName = 'Please tell us your first name.';
  if (!lastName) errors.lastName = 'Please tell us your last name.';
  if (!email) errors.email = 'We need an email address to confirm your appointment.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'That email address does not look right.';
  if (!phone) errors.phone = 'Please give us a phone number so we can call you back.';
  else if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a full 10-digit phone number.';
  if (!consent) errors.consent = 'Please confirm you are happy for us to contact you.';

  // Bots fill hidden fields. Pretend success and move on.
  if (honeypot) {
    return renderPage(req, res, page, { sent: true, formErrors: {}, formValues: {}, schema: contactSchema(page) });
  }

  if (Object.keys(errors).length) {
    return res.status(422).render('page', Object.assign(basePageOpts(page), {
      page: page,
      crumbs: crumbsFor([{ name: page.name, path: page.path }]),
      sent: false,
      formErrors: errors,
      formValues: b,
      schema: contactSchema(page)
    }));
  }

  // No database in this build — log the enquiry so it is never silently lost.
  // Wire this to SMTP / a form endpoint / a serverless email API in production.
  console.log('[Praivelle enquiry]', JSON.stringify({
    at: new Date().toISOString(),
    name: firstName + ' ' + lastName,
    email: email,
    phone: phone,
    guestType: clean(b.guestType),
    interest: clean(b.service),
    arrivalWindow: clean(b.preferred),
    message: message
  }));

  return renderPage(req, res, page, {
    sent: true,
    formErrors: {},
    formValues: {},
    schema: contactSchema(page)
  });
});

function basePageOpts(page) {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
    canonical: absUrl(page.path),
    ogType: 'website',
    ogImage: absUrl(page.heroImage || site.ogImage),
    preloadImage: page.heroImage || null,
    preloadSrcset: page.heroImage ? srcset(page.heroImage) : null,
    preloadSizes: '100vw',
    bodyClass: 'page page--' + page.slug
  };
}

function contactSchema(page) {
  return [
    S.localBusiness(site),
    S.webPage(Object.assign({ schemaType: 'ContactPage' }, page), site),
    S.breadcrumbs(crumbsFor([{ name: page.name, path: page.path }]), site),
    page.faqs && page.faqs.length ? S.faqPage(page.faqs) : null
  ].filter(Boolean);
}

/* HTML sitemap */
app.get('/sitemap', (req, res) => {
  res.render('sitemap', {
    title: 'Sitemap | ' + site.name + ' — Boutique Hotel in Kansas City',
    description:
      'Every page on the ' +
      site.name +
      ' website in one place: rooms and services, offers and packages, the team, the gallery and the Journal.',
    keywords: 'praivelle house sitemap, boutique hotel kansas city pages',
    canonical: absUrl('/sitemap'),
    ogType: 'website',
    ogImage: absUrl(site.ogImage),
    bodyClass: 'sitemap-page',
    schema: [
      S.webPage(
        {
          path: '/sitemap',
          metaTitle: 'Sitemap | ' + site.name,
          metaDescription: 'Complete index of the ' + site.name + ' website.'
        },
        site
      ),
      S.breadcrumbs(crumbsFor([{ name: 'Sitemap', path: '/sitemap' }]), site),
      S.itemList(
        services
          .map((s) => ({ name: s.name, path: '/services/' + s.slug }))
          .concat(pages.map((p) => ({ name: p.name, path: p.path })))
          .concat(posts.map((p) => ({ name: p.title, path: '/blog/' + p.slug }))),
        site,
        site.name + ' sitemap'
      )
    ]
  });
});

/* Generic inner pages — must come after the more specific routes above. */
app.get('/:slug', (req, res, next) => {
  const page = bySlug[req.params.slug];
  if (!page) return next();
  if (page.path !== '/' + req.params.slug) return next();

  const schema = [
    S.localBusiness(site),
    page.schemaType === 'MedicalWebPage' ? S.webPage(page, site) : S.webPage(page, site),
    S.breadcrumbs(crumbsFor([{ name: page.name, path: page.path }]), site),
    page.faqs && page.faqs.length ? S.faqPage(page.faqs) : null,
    page.slug === 'team' ? S.personList(site.team, site) : null
  ].filter(Boolean);

  // personList returns an array of Physician objects.
  const flat = [];
  schema.forEach((s) => {
    if (Array.isArray(s)) s.forEach((x) => flat.push(x));
    else flat.push(s);
  });

  renderPage(req, res, page, {
    schema: flat,
    sent: false,
    formErrors: {},
    formValues: {}
  });
});

/* --------------------------------------------------------- sitemap + robots */
app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];

  urls.push({ loc: absUrl('/'), lastmod: today, changefreq: 'weekly', priority: '1.0' });
  urls.push({ loc: absUrl('/services'), lastmod: today, changefreq: 'monthly', priority: '0.9' });
  urls.push({ loc: absUrl('/blog'), lastmod: posts[0] ? posts[0].date : today, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: absUrl('/contact'), lastmod: today, changefreq: 'monthly', priority: '0.9' });

  services.forEach((s) =>
    urls.push({ loc: absUrl('/services/' + s.slug), lastmod: today, changefreq: 'monthly', priority: '0.9' })
  );

  pages.forEach((p) => {
    if (p.path === '/contact') return;
    const noindex = ['privacy-policy', 'terms', 'accessibility'].indexOf(p.slug) > -1;
    urls.push({
      loc: absUrl(p.path),
      lastmod: p.dateModified || today,
      changefreq: noindex ? 'yearly' : 'monthly',
      priority: noindex ? '0.3' : '0.8'
    });
  });

  posts.forEach((p) =>
    urls.push({ loc: absUrl('/blog/' + p.slug), lastmod: p.updated || p.date, changefreq: 'yearly', priority: '0.7' })
  );

  urls.push({ loc: absUrl('/sitemap'), lastmod: today, changefreq: 'monthly', priority: '0.4' });

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map(
        (u) =>
          '  <url>\n' +
          '    <loc>' + u.loc + '</loc>\n' +
          '    <lastmod>' + u.lastmod + '</lastmod>\n' +
          '    <changefreq>' + u.changefreq + '</changefreq>\n' +
          '    <priority>' + u.priority + '</priority>\n' +
          '  </url>'
      )
      .join('\n') +
    '\n</urlset>\n';

  res.type('application/xml').setHeader('Cache-Control', 'public, max-age=3600');
  res.send(xml);
});

app.get('/robots.txt', (req, res) => {
  const txt =
    'User-agent: *\n' +
    'Allow: /\n' +
    'Disallow: /search\n' +
    '\n' +
    'User-agent: GPTBot\nAllow: /\n\n' +
    'User-agent: Google-Extended\nAllow: /\n\n' +
    'Sitemap: ' + absUrl('/sitemap.xml') + '\n';
  res.type('text/plain').setHeader('Cache-Control', 'public, max-age=86400');
  res.send(txt);
});

app.get('/manifest.webmanifest', (req, res) => res.redirect(301, '/site.webmanifest'));

/* ------------------------------------------------------------ 404 + errors */
function notFoundOpts(req) {
  return {
    title: 'Page not found | ' + site.name,
    description: 'The page you were looking for could not be found on the ' + site.name + ' website.',
    keywords: '',
    canonical: absUrl(req.path),
    robots: 'noindex, follow',
    ogType: 'website',
    ogImage: absUrl(site.ogImage),
    bodyClass: 'error-404',
    schema: [S.localBusiness(site)]
  };
}

app.use((req, res) => {
  res.status(404).render('404', notFoundOpts(req));
});

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('[Praivelle error]', err && err.stack ? err.stack : err);
  if (res.headersSent) return;
  res.status(500).render('404', Object.assign(notFoundOpts(req), {
    title: 'Something went wrong | ' + site.name,
    description: 'We hit an unexpected error. Please call the front desk on ' + site.phone + '.'
  }));
});

/* ------------------------------------------------------------------- start */
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Praivelle House running on http://localhost:' + PORT);
    console.log('  root: ' + ROOT);
    console.log('  asset version: ' + ASSET_V);
  });
}

module.exports = app;
