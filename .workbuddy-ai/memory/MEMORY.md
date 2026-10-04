# Praivelle House — project memory

## What this is

Premium boutique-hotel website for **Praivelle House**, an independent
twelve-suite hotel in the Kansas City area. Node.js + Express + EJS, fully
data-driven (no database, no CMS), SEO-optimised, deployable to Netlify / Vercel
/ a VPS from one repo.

## Conventions

- **All content lives in `data/`.** Templates never hard-code business facts.
  `data/site.js` is the single source of truth for NAP, hours, nav, socials.
- **Pages are arrays of blocks.** Adding a block to a data file adds a section;
  no template edit needed. Block types are rendered by
  `views/partials/blocks.ejs`.
- **Static requires only** in `data/*/index.js`. A dynamic
  `require('./' + slug)` breaks the Netlify esbuild bundle and kills every page.
- **Pages target 800–1,800 words** inside `<main>` (revised brief — the original
  2,000+ target made the pages too long to read). Two levers keep it there:
  `scripts/trim-content.js` shortens paragraph text at sentence boundaries, and
  the `CAP` map in `views/partials/blocks.ejs` caps how many items each block
  renders. Both are overridable per block with `b.limit`. Verified by
  `npm run check:seo` (floor is `MIN_WORDS`, default 800).
- **Internal linking** lives in `views/partials/related.ejs` — an explicit
  RELATED map, rendered as a "Where to go next" row on every content page.
- **Brand palette:** indigo `#2E3C85`, orange `#ED7D3B` (text-safe `#B85415`),
  tint `#F5F8FF`, borders `#E8EBF2`. Tokens live in `public/css/style.css` §1.
  Legacy names (`--blue`, `--teal`, `--cyan`, `--soft`, `--gold`, `--slate`) are
  **aliases** remapped onto the new palette — keep that indirection when editing.
- **Type:** Poppins (display headings, `--font-display`) + Plus Jakarta Sans
  (UI, `--font`). Both self-hosted in `public/fonts`; no CDN anywhere.
- **Brand mark:** an interlocked P/H monogram in a double ring, generated from
  `img/raw/src-logo-mark.png`. `scripts/generate-image-variants.js` auto-crops
  it to a circle and emits two forms — `logo-mark.webp` (indigo disc, for light
  surfaces) and `logo-mark-light.webp` (indigo keyed out, for the navy footer).
- **The lockup is live text, not a bitmap.** `views/partials/lockup.ejs` renders
  the mark plus the wordmark as HTML in Poppins, driven by
  `site.wordmark = { lead, accent, tagline }`. Pass `light: true` on dark
  surfaces. Used in the header, the mobile drawer and the footer.
- **Visual language** (per the client reference): rounded hero card with a
  centred overlay and an overlapping booking bar; centred `.section__head` with
  an icon eyebrow; navy icon-circle category cards (`.svc-card`); image listing
  cards with badge + meta row + price + orange CTA (`.room-card`).
- **Rooms** are a first-class data set: `data/rooms.js` (6 room types) rendered
  by the `rooms` block, exposed to templates as `rooms` via `res.locals`.
- **Section 18** of the stylesheet is the brand layer. Put brand-level visual
  overrides there rather than editing base rules.
- **Watch the base `max-width` traps.** `.hero__title` is capped at `17ch` in
  §8 and `.hero__inner` shrink-wraps as a centred grid item — both silently
  defeat a later `max-width`. Set `width: 100%` and `max-width: none` in §18
  when you want the hero text to use the full column.
- **Footer credit is mandatory:** "Web and Marketing By KC Web Design Pros"
  linking to https://kansascitywebdesignpros.com/

## Commands

```
npm start              # local server
npm run check:seo      # SEO + word-count audit (needs a running server)
npm run verify:bundle  # reproduce + test the Netlify serverless bundle
npm run images         # rebuild WebP variants + manifest from img/raw
npm run fonts          # re-download self-hosted fonts
```

## Environment quirks (Windows, this machine)

- Node **cannot spawn child processes** (`EBUSY` on any `execFileSync`, even
  `bash`). Use the Bash tool directly for binaries like esbuild.
- Node `fetch` needs `NO_PROXY=127.0.0.1,localhost` to reach a local server.
- `agent-browser` resets its daemon between Bash calls — do the whole
  open → interact → screenshot sequence in one call.
- `agent-browser screenshot --full` produces a blank image here; capture
  viewport sections while scrolling.
- Background servers do not survive between turns.

## Open items before launch

1. Replace the demo NAP in `data/site.js` (address, three phone numbers, emails).
2. Wire `POST /contact` to a real mail transport (currently logs to stdout).
3. Set `SITE_URL` in the host environment and redeploy.
4. Swap the generated photography for real property shots if available —
   `img/raw/src-<name>.png` → `npm run images`.
