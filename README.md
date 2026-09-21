# Clarity — Evidence-Informed Self-Assessment Platform

Clarity is a static-first, privacy-first self-assessment platform. It publishes
evidence-informed self-assessment tools — personality, mental wellbeing, work,
relationships, lifestyle, and career — and is architected to scale toward a
roadmap of ~60 tests without ever "forcing" an unverified test into
production to hit that number.

> **Read this first:** [`docs/evidence-and-licensing-registry.md`](docs/evidence-and-licensing-registry.md)
> explains exactly which of the 60 roadmap tests are live, why, and what was
> verified before publishing each one. [`docs/final-report.md`](docs/final-report.md)
> is the full delivery report (files created, what's published vs. held back,
> SEO/accessibility/privacy implementation, known limitations, next steps).

## Quick start

```bash
npm install
npm run test:data    # validates the evidence registry against the test data
npm run dev           # http://localhost:4321
npm run build          # astro check + static build to dist/
npm run preview        # serve the production build locally
```

Node 18+ required.

## What's actually live right now

Seventeen fully working assessments, covering all six of the site's
categories. The first three were the original Phase 2 templates (one per
evidence level); the other fourteen were added across two scaling passes,
all Level C (original content, no licensing dependency):

| Test | Evidence level | Instrument | Category |
|---|---|---|---|
| [Anxiety Symptom Screening](/en/tests/anxiety-symptom-screening/) | A — Validated screening tool | GAD-7 (Spitzer et al., 2006) | Mental Wellbeing |
| [Big Five Personality Test — Short](/en/tests/big-five-personality-short/) | B — Public-domain scale | Mini-IPIP (Donnellan et al., 2006) | Personality |
| [Procrastination Tendencies](/en/tests/procrastination-tendencies/) | C — Evidence-informed | Original, platform-authored | Work & Productivity |
| [Burnout Warning Signs](/en/tests/burnout-warning-signs/) | C — Evidence-informed | Original, platform-authored | Mental Wellbeing |
| [Deep Work Readiness](/en/tests/deep-work-readiness/) | C — Evidence-informed | Original, platform-authored | Work & Productivity |
| [Meeting Overload Check](/en/tests/meeting-overload-check/) | C — Evidence-informed | Original, platform-authored | Work & Productivity |
| [Work Boundary Check](/en/tests/work-boundary-check/) | C — Evidence-informed | Original, platform-authored | Work & Productivity |
| [Relationship Communication Style](/en/tests/relationship-communication-style/) | C — Evidence-informed | Original, platform-authored | Relationships |
| [Conflict Response Style](/en/tests/conflict-response-style/) | C — Evidence-informed | Original, platform-authored | Relationships |
| [Boundary Setting](/en/tests/boundary-setting/) | C — Evidence-informed | Original, platform-authored | Relationships |
| [Digital Wellbeing Check](/en/tests/digital-wellbeing-check/) | C — Evidence-informed | Original, platform-authored | Lifestyle |
| [Sleep Hygiene Check](/en/tests/sleep-hygiene-check/) | C — Evidence-informed | Original, platform-authored | Lifestyle |
| [Notification Stress](/en/tests/notification-stress/) | C — Evidence-informed | Original, platform-authored | Lifestyle |
| [Exercise Consistency](/en/tests/exercise-consistency/) | C — Evidence-informed | Original, platform-authored | Lifestyle |
| [Job Satisfaction Check](/en/tests/job-satisfaction-check/) | C — Evidence-informed | Original, platform-authored | Career & Values |
| [Work Motivation](/en/tests/work-motivation/) | C — Evidence-informed | Original, platform-authored | Career & Values |
| [Career Decision Confidence](/en/tests/career-decision-confidence/) | C — Evidence-informed | Original, platform-authored | Career & Values |

43 more roadmap tests exist as **registry entries only** — see
`src/data/registry.ts` — each tagged `published`, `draft`, `requires-review`,
or `planned`. Nothing is routed, linked, or built for a test unless its
registry status is `published`. This is enforced automatically by
`npm run test:data` (`scripts/validate-registry.ts`), which fails the build
if a `TestDefinition` exists without a matching `published` registry entry,
or if scoring/result-band data is internally inconsistent.

## Project structure

```
src/
  lib/types.ts              Core TypeScript data model (RegistryEntry, TestDefinition, ...)
  data/registry.ts           The master evidence/licensing registry — ALL 60 roadmap tests
  data/tests/                One file per PUBLISHED test's questions + scoring + result content
  data/guides.ts              Content-hub guide articles
  lib/categories.ts           Editorial content for the 6 category pages
  i18n/config.ts              Locale list; `live: true/false` gates what gets built
  layouts/                   BaseLayout (SEO/hreflang/JSON-LD shell), ArticleLayout
  components/                 SiteHeader/Footer, TestCard, EvidenceBadge, QuizEngine, ...
  scripts/                    Vanilla-TS client islands: quiz engine, results reveal, search
  styles/                     tokens.css (design system), global.css, quiz.css, results.css
  pages/
    index.astro                Root — client-side language-preference redirect to /en/
    [lang]/index.astro          Homepage
    [lang]/[category]/          Category pages (6)
    [lang]/tests/[slug]/        Test landing page
    [lang]/tests/[slug]/take/    Quiz flow (noindex)
    [lang]/tests/[slug]/results/ Results page, reads localStorage only (noindex)
    [lang]/guides/[slug]/        Guides
    [lang]/{about,privacy-policy,terms-of-use,medical-disclaimer,cookie-policy,
            editorial-policy,evidence-policy,methodology,corrections-policy,contact}/
    robots.txt.ts, sitemap.xml.ts, llms.txt.ts
scripts/validate-registry.ts   Registry/data integrity check (npm run test:data)
docs/                          All deliverable docs — see index below
```

## Design principles this build follows

- **No test is published without a verified license.** See the evidence
  registry doc for the actual verification trail (sources checked, what was
  confirmed, what was held back).
- **Scoring never leaves the browser.** The quiz engine (`src/scripts/quiz-engine.client.ts`)
  and results reveal (`src/scripts/results-view.client.ts`) are vanilla
  TypeScript with no framework and no network calls — they read an inline
  JSON payload, score in-memory, and persist only to `localStorage`.
- **Evidence labels are structural, not decorative.** `EvidenceLevel` (`A`–`D`)
  is a field on the data model, enforced by the validation script, and
  rendered as a badge everywhere a test is listed.
- **Static-first.** Every page is pre-rendered HTML (Astro, zero client JS
  by default); the only hydrated islands are the quiz engine, the results
  reveal, and the client-side search box.

## Documentation index

- [`docs/information-architecture.md`](docs/information-architecture.md) — Phase 1: IA, visual system, data schema, i18n/SEO architecture, privacy architecture, sitemap structure.
- [`docs/evidence-and-licensing-registry.md`](docs/evidence-and-licensing-registry.md) — the licensing verification writeup for every clinical/public-domain instrument considered.
- [`docs/roadmap-60-tests.md`](docs/roadmap-60-tests.md) — full 60-test roadmap with status.
- [`docs/accessibility-checklist.md`](docs/accessibility-checklist.md) — WCAG 2.2 AA checklist and current status.
- [`docs/core-web-vitals.md`](docs/core-web-vitals.md) — performance approach and measurement plan.
- [`docs/adding-a-test.md`](docs/adding-a-test.md) — step-by-step for adding test #4 through #60.
- [`docs/adding-a-language.md`](docs/adding-a-language.md) — step-by-step for taking a locale from reserved to live.
- [`docs/final-report.md`](docs/final-report.md) — the full delivery report.

## Deployment

Static output (`npm run build` → `dist/`) deploys to any static host —
Netlify, Cloudflare Pages, etc. Set `site` in `astro.config.mjs` to your real
production domain before deploying; it drives canonical URLs, hreflang,
sitemap, and Open Graph tags.
