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
- **Every content page needs 2,000+ words** inside `<main>` (client brief).
  Verified by `npm run check:seo`.
- **Brand palette:** navy `#0B1F3A`, gold `#C9A24B`, cream `#F3ECDC`, ivory
  `#FBF8F2`. Tokens are defined in `public/css/style.css` §1. Legacy token names
  (`--blue`, `--teal`, `--cyan`, `--soft`, `--slate`) are **aliases** pointing at
  the new palette — keep that indirection when editing.
- **Type:** Playfair Display (headings, `--font-display`) + Plus Jakarta Sans
  (UI, `--font`). Both self-hosted in `public/fonts`; no CDN anywhere.
- **Section 18** of the stylesheet is the "brand refinements" layer. Put
  brand-level visual overrides there rather than editing base rules.
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
