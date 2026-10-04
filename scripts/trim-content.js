'use strict';
/**
 * Content trimmer — tightens the copy inside every block.
 *
 * The site averaged ~2,200 words of block copy per page, with 91 prose blocks
 * carrying most of it. This shortens the text of what renders, at sentence
 * boundaries, without touching the data model:
 *
 *   • prose / split paragraphs → ≤ 48 words
 *   • faq answers              → ≤ 42 words
 *   • card / step body text    → ≤ 24 / 38 words
 *
 * Item COUNTS (how many paragraphs, questions, cards, table rows render) are
 * capped separately in views/partials/blocks.ejs, so the source data stays
 * intact and the page length stays sane.
 *
 * Source files use \uXXXX escapes for typographic characters, so literals are
 * decoded before matching and re-encoded on write.
 *
 * Run: node scripts/trim-content.js [--dry]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry');

const LIMITS = {
  proseParaWords: 48,
  splitParaWords: 48,
  faqAnswerWords: 42,
  cardTextWords: 24,
  stepTextWords: 38
};

/* ------------------------------------------------------------------ helpers */

const words = (s) => String(s).trim().split(/\s+/).filter(Boolean);

/** Keep whole sentences until the word budget is reached. */
function clampText(text, max) {
  const s = String(text).trim();
  if (words(s).length <= max) return s;

  const sentences = s.match(/[^.!?]+[.!?]+["')\]]*|\S+$/g) || [s];
  const out = [];
  let n = 0;
  for (const sentence of sentences) {
    const w = words(sentence).length;
    if (n + w > max && out.length) break;
    out.push(sentence.trim());
    n += w;
    if (n >= max) break;
  }
  if (!out.length) out.push(sentences[0].trim());
  let result = out.join(' ');
  if (!/[.!?]["')\]]*$/.test(result)) result += '.';
  return result;
}

function decodeLit(s) {
  return s.replace(/\\(u[0-9a-fA-F]{4}|.)/g, (m, g) => {
    if (g[0] === 'u') return String.fromCharCode(parseInt(g.slice(1), 16));
    if (g === 'n') return '\n';
    if (g === 't') return '\t';
    return g;
  });
}

function encodeLit(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/[^\x20-\x7E]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
}

/* ------------------------------------------------------- collect the edits */

const edits = new Map();
const stats = { paras: 0, faq: 0, cards: 0, steps: 0 };

function note(original, replacement) {
  if (typeof original !== 'string' || !original.trim()) return;
  if (original === replacement) return;
  edits.set(original, replacement);
}

function trimBlocks(blocks) {
  blocks.forEach((b) => {
    if (!b || typeof b !== 'object') return;

    if ((b.type === 'prose' || b.type === 'split') && Array.isArray(b.body)) {
      const max = b.type === 'split' ? LIMITS.splitParaWords : LIMITS.proseParaWords;
      b.body.forEach((p) => {
        const t = clampText(p, max);
        if (t !== p) stats.paras++;
        note(p, t);
      });
    }

    if (b.type === 'faq' && Array.isArray(b.items)) {
      b.items.forEach((it) => {
        const t = clampText(it.a, LIMITS.faqAnswerWords);
        if (t !== it.a) stats.faq++;
        note(it.a, t);
      });
    }

    if ((b.type === 'cards' || b.type === 'steps') && Array.isArray(b.items)) {
      const max = b.type === 'steps' ? LIMITS.stepTextWords : LIMITS.cardTextWords;
      b.items.forEach((it) => {
        if (typeof it.text !== 'string') return;
        const t = clampText(it.text, max);
        if (t !== it.text) stats[b.type === 'steps' ? 'steps' : 'cards']++;
        note(it.text, t);
      });
    }
  });
}

const services = require(path.join(ROOT, 'data/services'));
const { pages } = require(path.join(ROOT, 'data/pages'));
const { posts } = require(path.join(ROOT, 'data/posts'));
const home = require(path.join(ROOT, 'data/home'));

trimBlocks(home.blocks);
services.forEach((s) => trimBlocks(s.blocks));
pages.forEach((p) => trimBlocks(p.blocks));
posts.forEach((p) => trimBlocks(p.blocks));

console.log(`collected ${edits.size} text edits`);
console.log(
  `  paragraphs ${stats.paras} · faq answers ${stats.faq} · cards ${stats.cards} · steps ${stats.steps}`
);

/* ------------------------------------------------------------- apply to disk */

const files = [
  'data/home.js',
  ...fs.readdirSync(path.join(ROOT, 'data/services')).filter((f) => f.endsWith('.js')).map((f) => 'data/services/' + f),
  ...fs.readdirSync(path.join(ROOT, 'data/pages')).filter((f) => f.endsWith('.js')).map((f) => 'data/pages/' + f),
  ...fs.readdirSync(path.join(ROOT, 'data/posts')).filter((f) => f.endsWith('.js')).map((f) => 'data/posts/' + f)
];

const LIT = /'((?:[^'\\]|\\.)*)'/g;
let touched = 0;
let applied = 0;
const missed = new Set(edits.keys());

for (const rel of files) {
  const abs = path.join(ROOT, rel);
  const lines = fs.readFileSync(abs, 'utf8').split('\n');
  let changed = false;

  const out = lines.map((line) => {
    if (line.indexOf("'") === -1) return line;
    let result = '';
    let last = 0;
    let local = false;
    LIT.lastIndex = 0;
    let m;
    while ((m = LIT.exec(line))) {
      const decoded = decodeLit(m[1]);
      if (!edits.has(decoded)) continue;
      missed.delete(decoded);
      result += line.slice(last, m.index) + "'" + encodeLit(edits.get(decoded)) + "'";
      last = m.index + m[0].length;
      local = true;
      applied++;
    }
    if (!local) return line;
    changed = true;
    return result + line.slice(last);
  });

  if (changed) {
    touched++;
    if (!DRY) fs.writeFileSync(abs, out.join('\n'));
  }
}

console.log(`\nrewrote ${touched} data files (${applied} replacements)`);
if (missed.size) {
  console.log(`\n${missed.size} edit(s) not found in source:`);
  [...missed].slice(0, 8).forEach((m) => console.log('  · ' + String(m).slice(0, 80)));
}
if (DRY) console.log('\n(dry run — nothing written)');
