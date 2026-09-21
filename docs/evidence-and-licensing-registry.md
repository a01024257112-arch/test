# Evidence & Licensing Registry — Verification Writeup

This document is the narrative companion to `src/data/registry.ts`. It
records what was actually checked, this review cycle, for every named
clinical or public-domain instrument on the 60-test roadmap, and why each
one is `published`, `draft`, or `requires-review`.

Full machine-readable fields (author, year, DOI, cutoff method, limitations,
etc.) live on each `RegistryEntry` in `src/data/registry.ts`. This document
is the "how we decided" trail; the code is the "what we published" record.

## Verification method

For each instrument below, the verification was done by direct source
lookup (official publisher statements, the original peer-reviewed
publication, or the sponsoring organization's own licensing page) via live
web search during this build. Where a source could not be reached or the
result was ambiguous, the test was held back rather than published on the
strength of general familiarity with the instrument. "I recognize this
instrument as commonly free to use" is explicitly **not** treated as
sufficient grounds to publish — see the Evidence Policy page for the
standing rule.

## Instruments verified and published (Evidence Level A)

### GAD-7 (Generalized Anxiety Disorder 7-item scale)
- **Source checked:** Pfizer's public release statement and the original
  publication (Spitzer, Kroenke, Williams, Löwe. *Arch Intern Med.*
  2006;166(10):1092-1097. doi:10.1001/archinte.166.10.1092).
- **Finding:** Pfizer released the GAD-7 (and PHQ-9) without copyright
  restriction and at no charge in 2010. No permission is required to
  reproduce, translate, display, or distribute it.
- **Decision:** Published. Item wording, 0–3 response scale, and the
  5/10/15 severity cut points were reproduced verbatim from the original
  publication. Built as one of the three Phase 2 template assessments
  (`src/data/tests/anxiety-symptom-screening.ts`).

## Instruments verified, license confirmed, build pending (`draft`)

These cleared the same licensing bar as the GAD-7 above but were not
selected as one of the three Phase 2 templates, so the interactive test has
not been authored yet this cycle. They are **not** routed or linked
anywhere on the live site.

### PHQ-9 (Patient Health Questionnaire-9)
- **Source checked:** Same 2010 Pfizer release as GAD-7; original
  publication (Kroenke, Spitzer, Williams. *J Gen Intern Med.*
  2001;16(9):606-613).
- **Finding:** Free to use, no permission required, same as GAD-7.
- **Why still `draft` and not `published`:** Item 9 of the PHQ-9 asks about
  thoughts of self-harm and requires a dedicated safety-routing UI (a
  distinct flag/response path, not folded into the numeric total) before it
  can go live responsibly. That UI does not exist yet in this build cycle.

### AUDIT-C (Alcohol Use Disorders Identification Test — Consumption)
- **Source checked:** WHO-sponsored original development (Bush, Kivlahan,
  McDonell, Fihn, Bradley. *Arch Intern Med.* 1998;158(16):1789-1795); U.S.
  Department of Veterans Affairs distribution.
- **Finding:** Confirmed public domain.
- **Why still `draft`:** Simply not built yet — no licensing blocker. Next
  in line for the second scaling pass (see `docs/roadmap-60-tests.md`).

### Big Five — Full (IPIP 50-item)
- **Source checked:** International Personality Item Pool (ipip.ori.org);
  Goldberg (1999).
- **Finding:** Confirmed public domain.
- **Why still `draft`:** The 20-item Mini-IPIP short form was prioritized as
  the personality Phase 2 template for its lower time cost to users; the
  full 50-item form is next in line.

## Instrument held back — commercial licensing restriction found

### Perceived Stress Scale (PSS-10)
- **Source checked:** Cohen, Kamarck, Mermelstein (1983); Mind Garden's
  distribution page; Sheldon Cohen's own copyright notice (© 1994, all
  rights reserved).
- **Finding:** Free for **non-commercial** research and clinical use, but
  commercial reproduction requires a license from Mind Garden / Dr. Cohen,
  which this build does not hold.
- **Decision:** `requires-review`, not published. This is the clearest
  example on the roadmap of the platform's "verify before publish" rule
  actually blocking a well-known, easily-recognized instrument — precisely
  the failure mode the rule exists to prevent.

## Instruments not verified this cycle — held back by default

The following named instruments are commonly cited as low-friction to use,
but **no live source check was completed for them this cycle**, so per
policy they are not published:

- **ASRS-v1.1** (Adult ADHD Self-Report Scale) — Adult ADHD Self-Screening
- **WHO-5 Well-Being Index** — General Wellbeing Check
- Panic, Social Anxiety, and OCD self-check instruments — no specific
  instrument was even selected yet, let alone verified
- **rMEQ / MEQ** (chronotype questionnaires) — Chronotype / Morning-Evening
  Preference

Each is marked `requires-review` in the registry with a `statusReason`
explaining that no verification was completed, not that a problem was
found. A future review cycle should either complete the same source-check
process used for GAD-7/PHQ-9/AUDIT-C above, or replace the roadmap slot
with a custom evidence-informed (Level C) quiz if rights cannot be secured.

## Custom evidence-informed tests (Level C) — no licensing dependency

Procrastination Tendencies (published) and the ~40 other roadmap slots
across Work & Productivity, Relationships, Lifestyle, and Career are
original content written for this platform. They carry no third-party
licensing risk by construction — the open question for each is authoring
time, not rights clearance. They are labeled `planned` until written, and
every one of them, once built, must ship with the "evidence-informed
self-reflection assessment" label — never implied to be a validated scale.

## Standing rule going forward

> If licensing, translation, or scoring rights cannot be verified against a
> primary source in the current review cycle, the test is marked
> `requires-review` and is not published — regardless of how well-known the
> instrument is, and regardless of whether publishing it would help reach a
> roadmap target.

This rule is enforced structurally, not just by convention:
`scripts/validate-registry.ts` refuses the build if any `TestDefinition`
exists whose matching registry entry is not `status: "published"`.
