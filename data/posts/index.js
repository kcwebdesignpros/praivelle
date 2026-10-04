'use strict';
/**
 * Journal articles, newest first.
 *
 * NOTE: static requires only — see data/services/index.js for why a dynamic
 * require breaks the Netlify function bundle.
 */

const all = [
  require('./a-weekend-in-kansas-city'),
  require('./what-to-pack-for-a-prairie-wedding'),
  require('./the-case-for-eating-at-the-counter'),
  require('./why-we-kept-the-farmhouse')
];

const posts = all.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

const bySlug = posts.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});

const categories = [...new Set(posts.map((p) => p.category))];

module.exports = { posts, bySlug, categories };
