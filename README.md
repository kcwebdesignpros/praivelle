# Praivelle House

An independent twelve-suite boutique hotel website — Kansas City area.

Built with **Node.js + Express + EJS**, driven entirely by data files (no database,
no CMS), fully SEO-optimised, and ready to deploy to **Netlify**.

---

## Quick start

```bash
npm install
npm start            # http://localhost:3000
```

Useful scripts:

| Script | What it does |
|---|---|
| `npm start` | Run the site as a normal Node process |
| `npm run images` | Rebuild WebP masters, responsive variants and `img/manifest.json` |
| `npm run fonts` | Re-download and self-host the brand typefaces |
| `npm run check:seo` | Audit every route for titles, canonicals, JSON-LD, H1s and word count |
| `npm run verify:bundle` | Reproduce the Netlify serverless build and test the real handler |
| `npm run prepare:netlify` | Copy `/img` into the publish directory (runs on Netlify) |

---

## Architecture

```
├── server.js                 routes, sitemap.xml, robots.txt, CSP + cache headers
├── netlify.toml              build, function bundling, redirects, headers
├── netlify/functions/server.js   the Express app wrapped by serverless-http
├── data/                     ← ALL CONTENT LIVES HERE
│   ├── site.js               NAP, hours, nav, socials, trust data
│   ├── home.js               home page blocks
│   ├── team.js               the four department heads
│   ├── testimonials.js       guest reviews
│   ├── services/             six service pages + index.js
│   ├── pages/                thirteen inner pages + index.js
│   └── posts/                four Journal articles + index.js
├── lib/
│   ├── schema.js             JSON-LD builders
│   ├── icons.js              inline SVG icon set (no icon font, no sprite)
│   ├── img.js                srcset/sizes from img/manifest.json
│   └── root.js               host-agnostic project-root resolution
├── views/
│   ├── partials/             head · header · footer · page-hero · blocks · cta · form
│   └── *.ejs                 one template per page type
├── public/                   css · js · fonts · site.webmanifest  (the publish dir)
├── img/                      WebP masters + responsive variants + favicons
└── scripts/                  image, font and verification tooling
```

**Dependencies:** `express`, `ejs`, `compression`, `serverless-http`.
**Dev only:** `sharp` (image pipeline). Nothing else.

---

## Content model

Every page is an array of **blocks**. Add a block to a data file and the page
gains a section — no template edits. Available types:

`prose` · `cards` · `steps` · `stats` · `timeline` · `split` · `table` ·
`checklist` · `faq` · `quote` · `gallery` · `marquee` · `cta` · `text` ·
`services-grid` · `rooms` · `testimonials` · `team-preview` · `team-grid` ·
`blog-preview` · `blog-grid` · `amenity-strip` · `trust-bar` · `offer`

Pages target a scannable **800–1,800 words** inside `<main>` — enough to rank,
short enough to read. The cap is enforced in two places: `scripts/trim-content.js`
shortens paragraph text at sentence boundaries, and `views/partials/blocks.ejs`
caps how many items each block renders (`CAP`). Both are overridable per block
with `b.limit`. Verified by `npm run check:seo`.

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | Our Story |
| `/team` | Meet the Team |
| `/services` | Stay & Services (hub) |
| `/services/rooms-suites` | Rooms & Suites |
| `/services/spa-wellness` | Spa & Wellness |
| `/services/dining` | Dining & Culinary |
| `/services/weddings-events` | Weddings & Celebrations |
| `/services/meetings-corporate` | Meetings & Corporate Events |
| `/services/experiences-concierge` | Experiences & Concierge |
| `/offers` | Offers & Packages |
| `/gallery` | Gallery |
| `/reviews` | Guest Reviews |
| `/blog` | The Journal |
| `/blog/:slug` | Four articles |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact & Reservations (with enquiry form) |
| `/careers` | Careers |
| `/privacy-policy` · `/terms` · `/accessibility` | Legal |
| `/sitemap` · `/sitemap.xml` · `/robots.txt` · `/search` | System |

---

## Design system

The visual language follows the supplied reference: indigo primary, orange
accent, tinted section bands, centred section heads and two families of card.

| Token | Value | Used for |
|---|---|---|
| `--navy` | `#2E3C85` | Header, footer, headings, icon circles, badges |
| `--orange` | `#ED7D3B` | Buttons, links, active states, accents |
| `--orange-700` | `#B85415` | Text-safe orange (links, eyebrows on light) |
| `--tint` | `#F5F8FF` | Alternate section backgrounds |
| `--line` | `#E8EBF2` | Card and divider borders |

**Type:** Poppins (display headings, `--font-display`) + Plus Jakarta Sans
(body and UI, `--font`). Both self-hosted in `public/fonts` — no CDN anywhere.

**Structure:** rounded hero card with a centred overlay and an overlapping
booking bar; centred `.section__head` blocks with an icon eyebrow; navy
icon-circle category cards (`.svc-card`); image listing cards with a badge,
meta row, nightly price and orange CTA (`.room-card`).

**Legacy aliases.** Section 1 of the stylesheet defines the new tokens and then
remaps the older names (`--blue`, `--teal`, `--cyan`, `--soft`, `--gold`,
`--slate`) onto them, so every pre-existing rule keeps working. Section 18 is
the brand layer — put visual overrides there rather than editing base rules.

---

## Content and readability

Pages are written to be skimmed, not read end to end:

- **Prose blocks show at most 2 paragraphs**, capped at 48 words each.
- **FAQ blocks show at most 6 questions**, answers capped at 42 words.
- Cards cap at 6, steps at 5, table rows at 8, checklist items at 8.
- Every content page ends with a **"Where to go next"** row of 4 contextual
  internal links, defined in `views/partials/related.ejs`.

`scripts/trim-content.js` applies the text caps across `data/` in place, so the
voice stays consistent and re-running it is safe.

---

## SEO

- Unique `title`, `description`, `keywords` and `<link rel="canonical">` per page.
- Open Graph + Twitter `summary_large_image` with a generated 1200×630 card.
- JSON-LD: `Hotel`/`LodgingBusiness`, `WebSite` + `SearchAction`, `Service` (+
  `Offer`), `FAQPage`, `BreadcrumbList`, `BlogPosting`, `ItemList`, `HowTo`,
  `Person`, `Review`, `AggregateRating`.
- Dynamic `sitemap.xml` with absolute URLs, `lastmod`, `changefreq`, `priority`.
- `robots.txt` with an **absolute** `Sitemap:` line, generated from `SITE_URL`.
- One `<h1>` per page, logical heading order, descriptive `alt` text.

Run `npm run check:seo` against a running server to verify all of it.

---

## Performance

- `compression()`; immutable one-year cache for `/img`, `/fonts`, `/css`, `/js`;
  short revalidating cache for HTML.
- Every image is WebP with `srcset` + `sizes`, explicit `width`/`height` and
  `loading="lazy"`; the LCP image is preloaded with `fetchpriority="high"`.
- **No CDN and no third-party requests at runtime.** Fonts, icons and images are
  all self-hosted; icons are inlined SVG.
- One stylesheet, one small deferred JS file, no frameworks.

---

## Accessibility

Skip link, visible focus rings, 44px minimum touch targets on mobile, a keyboard-
accessible mega menu, a focus-trapped mobile drawer, and full
`prefers-reduced-motion` support. See `/accessibility` for the guest-facing
statement.

---

## Deploying

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for Netlify (plus Vercel and a VPS),
including the two bundler gotchas that break Express on serverless.

---

## Notes before going live

- **The NAP is a demo.** Replace the address and telephone numbers in
  `data/site.js` with the real ones.
- **The enquiry form has no database.** It validates, logs to the console and
  renders a success state. Wire it to SMTP, a form endpoint or a serverless email
  API before launch — see DEPLOYMENT.md.
- Set the `SITE_URL` environment variable so canonicals, Open Graph URLs,
  JSON-LD `@id`s and the sitemap all use the production domain.

---

Web and Marketing By [KC Web Design Pros](https://kansascitywebdesignpros.com/)
