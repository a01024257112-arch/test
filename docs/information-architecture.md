# Phase 1 — Information Architecture & System Design

This is the pre-build design pass the spec asked for: IA, visual system,
data schema, licensing registry approach, i18n/SEO architecture, privacy
architecture, and sitemap structure. Later sections point at the actual
files that implement each decision.

## A. Information architecture

```
/{lang}/                         Homepage — hero, search, popular tests, category grid
/{lang}/{category}/               6 category pages (mental-wellbeing, personality,
                                   productivity, relationships, lifestyle, career)
/{lang}/tests/{slug}/              Test landing page (SEO content, evidence label, Start)
/{lang}/tests/{slug}/take/          Quiz flow — one question per screen, noindex
/{lang}/tests/{slug}/results/       Results — reads localStorage only, noindex
/{lang}/guides/                    Content hub index
/{lang}/guides/{slug}/              Guide article
/{lang}/about/, /editorial-policy/, /evidence-policy/, /methodology/,
/{lang}/corrections-policy/, /privacy-policy/, /terms-of-use/,
/{lang}/medical-disclaimer/, /cookie-policy/, /contact/, /search/
```

Every test belongs to exactly one category. Every category page links to
its published tests plus its roadmap (unpublished) tests by name only (no
dead links). Every test page links to 3–6 related tests (same category or
adjacent concern, curated via `relatedTestSlugs`, not randomly generated)
and 1–3 guides (`relatedGuideSlugs`). Guides link back to the tests they
reference. This closes the loop the spec calls "deliberate semantic
internal-link structure" (see `docs/final-report.md` → SEO implementation).

## B. Visual system

Implemented in `src/styles/tokens.css` + `src/styles/global.css`. Key
decisions:

- **Palette**: white background, near-black text, muted secondary gray,
  light gray borders, one restrained accent (deep teal-green `#1F5F4E`) —
  deliberately not a "quiz site" purple/pink gradient. Full dark-mode token
  set via `prefers-color-scheme` and a `data-theme` override hook.
  Evidence badges (A/B/C/D) use four muted, distinguishable colors — never
  red/green pass-fail coding, since a screening result is not pass/fail.
- **Type**: system-font stack only (`-apple-system, Segoe UI, Roboto, ...`)
  — zero web-font payload, so there's nothing to preload or block on.
- **Components**: `.btn` (44–56px min height per spec), `.card`, `.badge`,
  `.callout`, `.crisis-box` — all defined once in `global.css` and reused,
  not redefined per page.

## C. Test data schema

`src/lib/types.ts` defines two separate structures on purpose:

- `RegistryEntry` — the scientific/legal/editorial record. Exists for
  **every** roadmap test, published or not. This is the object the spec's
  "internal registry" section asked for, field-for-field (id, name, slug,
  category, assessmentType, evidenceLevel, instrumentName, originalAuthors,
  publicationYear, sourceURL, doi, officialReference, licenseStatus,
  commercialUseAllowed, translationStatus, validatedLanguages,
  questionCount, scoringMethod, cutoffMethod, targetPopulation, ageRange,
  limitations, disclaimer, reviewStatus, reviewerName, reviewerCredentials,
  lastReviewed, references[]).
- `TestDefinition` — the runnable quiz (questions, answer scale, scoring
  rule, result bands/dimension bands, editorial sections). Only exists for
  tests whose `RegistryEntry.status === 'published'`.

Separation matters: a `TestDefinition` can never be built into a routed
page without a matching `published` registry entry — enforced by
`scripts/validate-registry.ts`, which the build's `npm run build` chain
implicitly depends on via `npm run test:data`.

## D. Scientific / licensing registry approach

See `docs/evidence-and-licensing-registry.md` for the full verification
writeup. Structurally: `src/data/registry.ts` holds all 60 entries;
`getPublishedRegistry()`, `getRegistryBySlug()`, `getRegistryByCategory()`
are the only read APIs pages use, so no page can accidentally render an
unpublished test.

## E. International SEO architecture

- **URL structure**: ASCII, untranslated, stable slugs under `/{lang}/...`
  (`src/i18n/config.ts` defines the locale list; `liveLocales` gates what
  actually gets built and routed).
- **hreflang**: `BaseLayout.astro` emits one `<link rel="alternate">` per
  *live* locale plus `x-default` → the English URL. We deliberately never
  emit hreflang for a locale that has no built page — that would violate
  the whole point of hreflang (telling crawlers about equivalent,
  existing content).
- **Canonical**: every page self-canonicalizes to its own `/{lang}/...` URL.
- **No IP-based redirect**: the bare `/` route does a client-side,
  browser-language-based suggestion (not IP-based, not permanent — see
  `src/pages/index.astro`), and still renders a manual link.
- **Language selector**: in `SiteHeader.astro`, showing live locales as
  selectable and reserved locales as visibly disabled ("coming soon")
  rather than hidden, so the roadmap is honest.

## F. Privacy architecture

Answers and results never leave the browser. See
`docs/final-report.md` → Privacy section, and `src/scripts/quiz-engine.client.ts`
/ `results-view.client.ts` for the actual mechanism (localStorage in,
localStorage out, no `fetch` calls anywhere in either file).

## G. Sitemap structure

`src/pages/sitemap.xml.ts` generates a single sitemap (small site; a
sitemap index becomes worth it once the catalog is large enough — see
`docs/final-report.md` → Recommended next steps) covering: homepage,
category pages, published test landing pages, guides, and legal/trust
pages — for every *live* locale. It deliberately excludes `/take/` and
`/results/` (session/personalized flows) and `/search/`.
