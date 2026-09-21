# How to Add a New Test

This walks through taking a roadmap slot (already in `src/data/registry.ts`
as `draft`/`requires-review`/`planned`) to `published`. Follow it in order —
each step is a gate, not a suggestion.

## 1. Verify evidence and licensing first

Before writing a single question, resolve the registry entry:

- **Level A (validated screening tool)**: confirm, against a primary
  source (the original publication or the copyright holder's own
  statement), that you may reproduce the exact item wording and scoring
  rules, including for commercial use if this deployment is commercial.
  Record the source, license status, and commercial-use permission in the
  `RegistryEntry`. If you cannot confirm this, **stop** — leave the entry
  as `requires-review`. Do not proceed to write questions.
- **Level B (public-domain scale)**: confirm the item pool's public-domain
  status at its source (e.g., ipip.ori.org for IPIP-derived items).
- **Level C (evidence-informed)**: no licensing gate — but write original
  items. Do not lightly reword a copyrighted instrument; that is still a
  derivative work. Reference the general research literature in
  `scientificBasis`, not a specific instrument you're not licensed to use.

Update the entry in `src/data/registry.ts`: fill in `instrumentName`,
`originalAuthors`, `publicationYear`, `sourceURL`, `doi`, `officialReference`,
`licenseStatus`, `commercialUseAllowed`, `scoringMethod`, `cutoffMethod`,
`limitations`, `references`. Leave `status` as-is for now — it flips to
`published` only in the last step.

## 2. Write the `TestDefinition`

Create `src/data/tests/{slug}.ts` following the shape in
`src/lib/types.ts`. Copy the structure of an existing test that matches
your scoring method:

- Single total score, bands (e.g. anxiety-style) → copy
  `anxiety-symptom-screening.ts`.
- Multiple independent trait scores (e.g. personality-style) → copy
  `big-five-personality-short.ts`.
- Custom evidence-informed, single score → copy
  `procrastination-tendencies.ts`.

Required content per test (this is what populates the landing and results
pages — do not leave any of it generic/boilerplate):

- `oneLiner`, `whatItMeasures`, `whoItIsFor`, `howScoringWorks`,
  `scientificBasis`, `limitations[]` — landing page sections.
- `resultBands[]` (or `dimensionBands`) — each band needs its own
  `whatItMeans`, `whatItDoesNotMean`, `strongestPatterns[]`,
  `areasToWatch[]`, `suggestedNextSteps[]`, and — for any health-adjacent
  band — a `professionalSupportNote`.
- `relatedTestSlugs` — 3–6 real, deliberately chosen related tests (same
  category or genuinely adjacent concern). Do not auto-fill with random
  slugs; a related-test link that doesn't build yet is silently dropped by
  the page template, so broken roadmap references never produce a dead
  link, but an *irrelevant* live link will still render — curate it.
- `crisisNoteRequired: true` for any mental-health screening tool whose
  score could plausibly correlate with risk.

Register it in `src/data/tests/index.ts` (add to `testDefinitions`).

## 3. Flip the registry status

Only after steps 1–2 are complete and reviewed, change the `RegistryEntry.status`
to `'published'` and fill in `reviewStatus`, `lastReviewed`, and (only if a
real person actually reviewed it) `reviewerName`/`reviewerCredentials`. If
no one has reviewed it yet, leave `reviewStatus: 'editorial-review-pending'`
— do not invent a reviewer.

## 4. Validate

```bash
npm run test:data
```

This fails the build if: the registry/definition evidence levels don't
match, a Level A entry has `licenseStatus: 'unverified'`, result bands
don't tile the full score range with no gaps or overlaps, a
per-dimension test is missing bands for any dimension, or a published
mental-wellbeing Level A test doesn't set `crisisNoteRequired`.

## 5. Build and smoke-test

```bash
npm run build
npm run preview
```

Manually walk the new test: landing page → Start → answer every question
→ confirm the results page shows the right band/interpretation for a few
different answer patterns (all-low, all-high, mixed) → confirm "Retake"
clears state → confirm refreshing mid-quiz resumes correctly.

## 6. Nothing else to wire up

Category pages, the homepage's popular-tests grid, the sitemap, robots
handling, hreflang, and JSON-LD are all derived automatically from
`testDefinitions` / `registry` — you do not need to touch any of those
files to add a test.
