# How to Add a Language

The URL architecture, hreflang plumbing, and routing already support any
number of locales — every route in `src/pages/[lang]/**` uses
`getStaticPaths()` driven by `liveLocales` from `src/i18n/config.ts`. Adding
a language is a content task, not a routing task.

## 1. Decide what kind of content you're translating

- **Editorial content** (category intros, guide articles, legal pages,
  homepage copy): ordinary high-quality localization is fine. Adapt units,
  date formats, and cultural examples — don't just machine-translate
  verbatim (see spec §13).
- **Validated instrument content** (a Level A test's questions and
  scoring): **only use an officially validated translation of that specific
  instrument**, if one exists. Do not translate GAD-7, PHQ-9, Mini-IPIP,
  etc. yourself, and do not machine-translate them. An unvalidated
  translation of a validated instrument is not the validated instrument —
  its psychometric properties (sensitivity, specificity, cut points) do not
  automatically carry over.
- **Custom evidence-informed content** (Level C tests): ordinary
  high-quality localization is acceptable, same as editorial content, since
  there's no psychometric validity claim to preserve.

## 2. Record translation provenance

For a Level A/B test, add a `TranslationRecord` (see `src/lib/types.ts`)
capturing `translationSource`, `translationReference`, `reviewedBy`,
`reviewDate`, and whether it's `validated: true`. If no validated
translation exists for that locale, **do not publish that test in that
locale** — publish the editorial pages (landing-page prose, category pages,
guides) in the new language, but leave the test itself English-only (or
hold the whole test back for that locale) until a validated translation is
confirmed. Never claim "validated" for a translation that hasn't been.

## 3. Turn the locale on

In `src/i18n/config.ts`, flip the locale's `live` flag:

```ts
{ code: 'es', label: 'Español', hreflang: 'es', dir: 'ltr', live: true },
```

This alone makes every `getStaticPaths()` call across the site start
generating `/es/...` pages, adds `/es/` to the sitemap, and adds an `hreflang="es"`
alternate link to every page (including the English versions, which now
correctly point back at their Spanish equivalents).

## 4. Provide the actual translated strings

Right now, all editorial content (`src/lib/categories.ts`, `src/data/guides.ts`,
`src/data/tests/*.ts`, and the hand-written copy in `.astro` page files) is
English-only, referenced directly rather than through a translation
lookup table. To add real content for a new locale:

1. Introduce a per-locale content lookup (e.g. `src/i18n/content/es.ts`
   mirroring the shape of `categories`/`guides`/test editorial fields) —
   this repo does not yet include that abstraction; it's the main piece of
   scaffolding this step requires. Keep the *data model* (registry,
   scoring, result-band structure) locale-independent; only the *prose
   strings* need a per-locale table.
2. Update each page template to select the locale-specific content object
   using the `lang` param instead of importing the English constant
   directly.
3. UI microcopy (button labels like "Start test", "Next", "Retake test")
   should move into a small `src/i18n/ui-strings.ts` dictionary keyed by
   locale, rather than being hard-coded in components like
   `QuizEngine.astro`.

## 5. Validate and build

```bash
npm run test:data   # unaffected by locale — still checks the English data model
npm run build        # will now also emit /es/... routes
```

Manually check: hreflang links resolve to real pages (no 404s), the
language selector in `SiteHeader.astro` no longer shows the locale as
"(coming soon)", and any Level A/B test without a validated translation is
either absent from that locale's routes or clearly marked as
English-only.

## 6. Do not do this

- Do not flip `live: true` for a locale before any content exists for it —
  that would ship hreflang links to thin or missing pages.
- Do not auto-translate a validated clinical instrument to "unblock" a
  language launch. Ship the locale without that specific test instead.
- Do not permanently IP-redirect users into a locale. The homepage's
  language suggestion (`src/pages/index.astro`) is intentionally a
  one-time, JS-based, browser-language suggestion with a manual link
  fallback — keep new-locale rollouts consistent with that.
