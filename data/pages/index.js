'use strict';
/**
 * All inner pages. Each file is one route rendered by views/page.ejs.
 *
 * NOTE: static requires only — see data/services/index.js for why a dynamic
 * require breaks the Netlify function bundle.
 */

const pages = [
  require('./about'),
  require('./team'),
  require('./services-index'),
  require('./offers'),
  require('./gallery'),
  require('./reviews'),
  require('./blog-index'),
  require('./faq'),
  require('./contact'),
  require('./careers'),
  require('./privacy-policy'),
  require('./terms'),
  require('./accessibility')
];

const bySlug = pages.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});

module.exports = { pages, bySlug, slugs: pages.map((p) => p.slug) };
