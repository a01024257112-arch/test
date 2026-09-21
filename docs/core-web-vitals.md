# Core Web Vitals — Approach & Status

## Targets (from spec)

| Metric | Real-world 75th %ile target | Internal stretch target |
|---|---|---|
| LCP | ≤ 2.5s | < 2.0s |
| INP | ≤ 200ms | < 150ms |
| CLS | ≤ 0.1 | < 0.05 |

## What this build does to hit them

- **Static HTML by default.** Every route in `src/pages/**` is a static
  Astro page with zero client JS unless it explicitly ships a `<script>` —
  only three do: the quiz engine, the results reveal, and client-side
  search. There is no app shell, no client router, no hydration framework.
- **No web fonts.** `--font-sans` is a system-font stack
  (`-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`). Zero
  font requests, zero FOIT/FOUT, zero `font-display` tuning needed because
  there's nothing to swap.
- **No layout-shift sources**: no ads, no late-loading embeds, no
  web-font swap, no image dimensions left unset (the two SVG assets in
  `public/` — favicon and OG image — are vector and sized in markup).
  Quiz question transitions toggle a `hidden` attribute rather than
  animating height, so there's no reflow-driven shift.
- **No render-blocking third-party scripts.** There are currently no
  third-party scripts at all (no analytics vendor wired in yet — see Known
  Limitations in the final report). When one is added, it must be `defer`
  or loaded after `test_view`/`test_start`/`test_complete` events, per the
  privacy architecture doc.
- **Small, scoped JS islands.** `quiz-engine.client.ts` and
  `results-view.client.ts` are plain TypeScript modules with no
  dependencies — Astro/Vite compiles and tree-shakes them per-component,
  so a page that doesn't use the quiz engine ships none of its code.
- **Compressed HTML.** `astro.config.mjs` sets `compressHTML: true`.
  Brotli/Gzip and long-lived asset caching are a hosting-layer
  configuration step (Netlify/Cloudflare Pages both do this by default for
  static assets) — see `docs/final-report.md` → Recommended next steps for
  the header rules to set explicitly at deploy time.

## Measured in this session

A production build (`npm run build`) was produced and smoke-tested with a
real headless-Chromium session against `astro preview` (see
`docs/final-report.md` → Known Limitations for exactly what was and wasn't
checked). Bundle sizes at build time:

```
dist/_astro/hoisted.CX19TYpy.js   0.19 kB (gzip 0.18 kB)
dist/_astro/hoisted.DZGKBEZb.js   0.84 kB (gzip 0.53 kB)
dist/_astro/hoisted.CLQ3MdA2.js   2.01 kB (gzip 0.80 kB)
dist/_astro/hoisted.CGyUB8Zq.js   3.14 kB (gzip 1.43 kB)
```

That's the entire client-side JS footprint for the whole site combined —
well within "no large JavaScript framework bundle" territory (these four
chunks together are the quiz engine, results reveal, search, and the
language-selector script).

## Not yet measured

A real Lighthouse (mobile + desktop) run against a deployed URL, and
real-user CrUX/field data, require an actual public deployment — both are
listed as next steps in `docs/final-report.md`. Bundle size and the
absence of layout-shift sources are structural guarantees of this
architecture; they are not a substitute for measuring the deployed site.
