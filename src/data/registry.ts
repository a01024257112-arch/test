import type { RegistryEntry, AssessmentCategory, EvidenceLevel } from '../lib/types';

/**
 * MASTER EVIDENCE / LICENSING REGISTRY
 * =====================================
 * One row per roadmap assessment (see docs/roadmap-60-tests.md).
 *
 * status meanings:
 *  - "published"        : live on the site, fully built, license verified.
 *  - "draft"             : license/instrument verified this review cycle,
 *                          but the interactive test has not been built yet.
 *  - "requires-review"   : a named validated instrument exists, but this
 *                          review cycle could not confirm reproduction/
 *                          commercial-use rights or a verified scoring
 *                          source. NOT published. No questions are stored
 *                          for these entries anywhere in the repo.
 *  - "planned"           : roadmap slot for a custom evidence-informed
 *                          quiz (category C). No licensing blocker, simply
 *                          not authored yet in this build cycle.
 *
 * See docs/evidence-and-licensing-registry.md for the narrative writeup of
 * each verification decision, including search sources used.
 */

function base(partial: Partial<RegistryEntry> & Pick<RegistryEntry, 'id' | 'name' | 'slug' | 'category' | 'evidenceLevel' | 'status' | 'statusReason'>): RegistryEntry {
  return {
    instrumentName: null,
    originalAuthors: [],
    publicationYear: null,
    sourceURL: null,
    doi: null,
    officialReference: null,
    licenseStatus: 'unverified',
    commercialUseAllowed: null,
    translationStatus: 'not-applicable',
    validatedLanguages: [],
    questionCount: null,
    scoringMethod: 'Not yet documented.',
    cutoffMethod: null,
    targetPopulation: 'General adult population (18+).',
    ageRange: '18+',
    limitations: [],
    disclaimer:
      'This tool is for self-reflection only. It is not a diagnostic instrument and does not replace professional advice.',
    reviewStatus: 'not-started',
    reviewerName: null,
    reviewerCredentials: null,
    lastReviewed: null,
    references: [],
    assessmentType: 'evidence-informed',
    ...partial,
  };
}

export const registry: RegistryEntry[] = [
  // ============================= MENTAL WELLBEING =============================
  base({
    id: 'mw-01', name: 'Adult ADHD Self-Screening', slug: 'adult-adhd-screening',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'Adult ADHD Self-Report Scale (ASRS-v1.1) Screener',
    status: 'requires-review',
    statusReason:
      'A validated instrument exists (WHO/Kessler ASRS-v1.1), but this review cycle could not confirm current reproduction and commercial-use permissions from the copyright holders. Held back per editorial policy: no licensing verification, no publication.',
  }),
  base({
    id: 'mw-02', name: 'Anxiety Symptom Screening', slug: 'anxiety-symptom-screening',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'GAD-7 (Generalized Anxiety Disorder 7-item scale)',
    originalAuthors: ['Robert L. Spitzer', 'Kurt Kroenke', 'Janet B. W. Williams', 'Bernd Löwe'],
    publicationYear: 2006,
    sourceURL: 'https://www.phqscreeners.com/',
    doi: '10.1001/archinte.166.10.1092',
    officialReference: 'Spitzer RL, Kroenke K, Williams JBW, Löwe B. A Brief Measure for Assessing Generalized Anxiety Disorder: The GAD-7. Arch Intern Med. 2006;166(10):1092-1097.',
    licenseStatus: 'permissive-free-use', commercialUseAllowed: true,
    translationStatus: 'partial', validatedLanguages: ['en'],
    questionCount: 7,
    scoringMethod: 'Sum of 7 items, each scored 0-3 ("Not at all" to "Nearly every day"). Total range 0-21.',
    cutoffMethod: 'Established cut points: 5 = mild, 10 = moderate, 15 = severe anxiety symptom levels. A score ≥10 is a reasonable cut point for identifying cases warranting further evaluation (Spitzer et al. 2006: sensitivity 89%, specificity 82% at cutoff 10 against a structured interview).',
    targetPopulation: 'Adults in primary-care and general population settings.', ageRange: '18+',
    limitations: [
      'A screening tool, not a diagnostic instrument — a high score indicates a pattern worth discussing with a clinician, not a diagnosis.',
      'Validated primarily in primary-care populations; performance can vary in other settings.',
      'Symptom overlap exists between generalized anxiety and other anxiety or mood disorders.',
    ],
    disclaimer: 'This screening tool cannot diagnose an anxiety disorder. Only a qualified healthcare professional can provide a full assessment and diagnosis.',
    reviewStatus: 'editorial-review-pending',
    reviewerName: null, reviewerCredentials: null, lastReviewed: '2026-09-21',
    references: [
      { author: 'Spitzer RL, Kroenke K, Williams JBW, Löwe B', work: 'A Brief Measure for Assessing Generalized Anxiety Disorder: The GAD-7', year: 2006, publisher: 'Archives of Internal Medicine', doi: '10.1001/archinte.166.10.1092', url: 'https://doi.org/10.1001/archinte.166.10.1092' },
      { author: 'Pfizer Inc.', work: 'PHQ/GAD-7 screeners — public release statement (no copyright restriction, no charge, since 2010)', year: 2010, url: 'https://www.phqscreeners.com/' },
    ],
    status: 'published',
    statusReason: 'License confirmed: Pfizer released the GAD-7 and PHQ-9 without copyright restriction and at no charge in 2010. Item wording, response scale, and cut points verified against the original 2006 publication. Built as one of the three Phase 2 template assessments.',
  }),
  base({
    id: 'mw-03', name: 'Depressive Symptom Screening', slug: 'depressive-symptom-screening',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'PHQ-9 (Patient Health Questionnaire-9)',
    originalAuthors: ['Kurt Kroenke', 'Robert L. Spitzer', 'Janet B. W. Williams'],
    publicationYear: 2001, sourceURL: 'https://www.phqscreeners.com/',
    doi: '10.1046/j.1525-1497.2001.016009606.x',
    officialReference: 'Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: Validity of a Brief Depression Severity Measure. J Gen Intern Med. 2001;16(9):606-613.',
    licenseStatus: 'permissive-free-use', commercialUseAllowed: true,
    translationStatus: 'partial', validatedLanguages: ['en'],
    questionCount: 9,
    scoringMethod: 'Sum of 9 items, each scored 0-3. Total range 0-27.',
    cutoffMethod: '5/10/15/20 = mild/moderate/moderately severe/severe. Item 9 (thoughts of self-harm) is flagged individually regardless of total score.',
    limitations: ['Screening only, not diagnostic.', 'Item 9 requires a dedicated safety response pathway, not a numeric score.'],
    disclaimer: 'This screening tool cannot diagnose depression. Only a qualified healthcare professional can provide a full assessment and diagnosis.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Kroenke K, Spitzer RL, Williams JBW', work: 'The PHQ-9: Validity of a Brief Depression Severity Measure', year: 2001, publisher: 'Journal of General Internal Medicine', doi: '10.1046/j.1525-1497.2001.016009606.x', url: 'https://doi.org/10.1046/j.1525-1497.2001.016009606.x' },
    ],
    status: 'draft',
    statusReason: 'Licensing verified (same 2010 Pfizer release as GAD-7). Item set and scoring confirmed against the original publication. Not yet built into an interactive test in this build cycle — requires a dedicated safety-routing UI for item 9 before it can move to published.',
  }),
  base({
    id: 'mw-04', name: 'Alcohol Use Screening', slug: 'alcohol-use-screening',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'AUDIT-C (Alcohol Use Disorders Identification Test — Consumption)',
    originalAuthors: ['Kristen Bush', 'Daniel R. Kivlahan', 'Mary B. McDonell', 'Stephan D. Fihn', 'Katharine A. Bradley'],
    publicationYear: 1998, sourceURL: 'https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a',
    officialReference: 'Bush K, Kivlahan DR, McDonell MB, Fihn SD, Bradley KA. The AUDIT Alcohol Consumption Questions (AUDIT-C). Arch Intern Med. 1998;158(16):1789-1795. Developed under WHO sponsorship.',
    licenseStatus: 'public-domain', commercialUseAllowed: true,
    translationStatus: 'partial', validatedLanguages: ['en'],
    questionCount: 3,
    scoringMethod: 'Sum of 3 items, each scored 0-4. Total range 0-12.',
    cutoffMethod: 'Commonly used cut points: ≥4 (men) / ≥3 (women) suggest hazardous drinking; higher scores suggest a higher likelihood of alcohol use disorder.',
    limitations: ['Screens for hazardous/harmful consumption patterns, not alcohol use disorder diagnosis.', 'Self-report is subject to under-reporting.'],
    disclaimer: 'This screening tool cannot diagnose alcohol use disorder. Only a qualified healthcare professional can provide a full assessment.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Bush K, Kivlahan DR, McDonell MB, Fihn SD, Bradley KA', work: 'The AUDIT Alcohol Consumption Questions (AUDIT-C)', year: 1998, publisher: 'Archives of Internal Medicine', url: 'https://pubmed.ncbi.nlm.nih.gov/9738608/' },
      { author: 'World Health Organization', work: 'AUDIT: The Alcohol Use Disorders Identification Test — Guidelines for Use in Primary Care', year: 2001, url: 'https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a' },
    ],
    status: 'draft',
    statusReason: 'Confirmed public domain (WHO-sponsored development, US Department of Veterans Affairs distribution). Not yet built into an interactive test in this build cycle.',
  }),
  base({
    id: 'mw-05', name: 'General Wellbeing Check', slug: 'general-wellbeing-check',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'WHO-5 Well-Being Index (candidate instrument, unverified this cycle)',
    status: 'requires-review',
    statusReason: 'A short, widely used, reportedly copyright-free instrument (WHO-5) exists for this purpose, but this review cycle did not complete source and translation verification. Held back pending confirmation.',
  }),
  base({
    id: 'mw-06', name: 'Perceived Stress Check', slug: 'perceived-stress-check',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'Perceived Stress Scale (PSS-10)',
    originalAuthors: ['Sheldon Cohen', 'Tom Kamarck', 'Robin Mermelstein'], publicationYear: 1983,
    licenseStatus: 'licensed', commercialUseAllowed: false,
    status: 'requires-review',
    statusReason: 'Confirmed copyrighted (© Sheldon Cohen, distributed via Mind Garden). Free for non-commercial research/clinical use, but commercial reproduction requires a license we have not obtained. Held back per editorial policy.',
  }),
  base({
    id: 'mw-07', name: 'Panic Symptom Check', slug: 'panic-symptom-check',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    status: 'requires-review',
    statusReason: 'No licensing/translation verification completed this review cycle.',
  }),
  base({
    id: 'mw-08', name: 'Social Anxiety Self-Check', slug: 'social-anxiety-self-check',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    status: 'requires-review',
    statusReason: 'No licensing/translation verification completed this review cycle.',
  }),
  base({
    id: 'mw-09', name: 'OCD Symptom Self-Check', slug: 'ocd-symptom-self-check',
    category: 'mental-wellbeing', evidenceLevel: 'A', assessmentType: 'validated-screening',
    status: 'requires-review',
    statusReason: 'No licensing/translation verification completed this review cycle.',
  }),
  base({
    id: 'mw-10', name: 'Burnout Warning Signs', slug: 'burnout-warning-signs',
    category: 'mental-wellbeing', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    scoringMethod: 'Sum of 12 original Likert items (1-5 frequency scale). Range 12-60.',
    cutoffMethod: 'Descriptive bands (fewer / some / multiple warning signs) — informational only, not a clinical or occupational cutoff.',
    targetPopulation: 'Working adults reflecting on their current relationship with work.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale.',
      'Cannot distinguish burnout from overlapping conditions such as depression.',
      'Reflects a recent self-reported pattern, not a workplace or clinical diagnosis.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Maslach, C., Schaufeli, W. B., & Leiter, M. P.', work: 'Job Burnout', year: 2001, publisher: 'Annual Review of Psychology', doi: '10.1146/annurev.psych.52.1.397', url: 'https://doi.org/10.1146/annurev.psych.52.1.397' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Grounded in general burnout research (the three-dimension exhaustion/cynicism/effectiveness framework) without reproducing any specific copyrighted instrument.',
  }),

  // ============================== PERSONALITY ==============================
  base({
    id: 'pe-11', name: 'Big Five Personality Test — Full', slug: 'big-five-personality-full',
    category: 'personality', evidenceLevel: 'B', assessmentType: 'public-domain-scale',
    instrumentName: 'IPIP 50-item Big-Five Factor Markers',
    originalAuthors: ['Lewis R. Goldberg', 'International Personality Item Pool contributors'],
    publicationYear: 1999, sourceURL: 'https://ipip.ori.org/',
    officialReference: 'Goldberg, L. R. (1999). A broad-bandwidth, public domain, personality inventory measuring the lower-level facets of several five-factor models. In Mervielde et al. (Eds.), Personality Psychology in Europe, Vol. 7.',
    licenseStatus: 'public-domain', commercialUseAllowed: true,
    translationStatus: 'partial', validatedLanguages: ['en'], questionCount: 50,
    scoringMethod: 'Sum of 10 items per factor (with reverse-scoring on negatively keyed items). Five factor scores, range 10-50 each.',
    references: [{ author: 'Goldberg, L. R.', work: 'International Personality Item Pool', year: 1999, url: 'https://ipip.ori.org/' }],
    status: 'draft',
    statusReason: 'License verified public domain (IPIP). Not yet built in this cycle — the 20-item Mini-IPIP short form was prioritized as the Phase 2 template.',
  }),
  base({
    id: 'pe-12', name: 'Big Five Personality Test — Short', slug: 'big-five-personality-short',
    category: 'personality', evidenceLevel: 'B', assessmentType: 'public-domain-scale',
    instrumentName: 'Mini-IPIP (20-item Big Five short form)',
    originalAuthors: ['M. Brent Donnellan', 'Frederick L. Oswald', 'Brendan M. Baird', 'Richard E. Lucas'],
    publicationYear: 2006, sourceURL: 'https://ipip.ori.org/',
    doi: '10.1037/1040-3590.18.2.192',
    officialReference: 'Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006). The Mini-IPIP scales: Tiny-yet-effective measures of the Big Five factors of personality. Psychological Assessment, 18(2), 192-203.',
    licenseStatus: 'public-domain', commercialUseAllowed: true,
    translationStatus: 'partial', validatedLanguages: ['en'], questionCount: 20,
    scoringMethod: 'Sum of 4 items per factor (with reverse-scoring on negatively keyed items). Five factor scores, range 4-20 each.',
    cutoffMethod: 'Norm-referenced only: each factor score is described as lower / mid-range / higher relative to the 4-20 possible range, not against clinical cutoffs.',
    targetPopulation: 'General adult population; validated primarily on university and general community samples.',
    limitations: [
      'A short-form trait measure, not a full clinical personality assessment.',
      '4 items per factor trades some precision for brevity relative to the full 50-item IPIP measure.',
      'Self-report trait measures reflect self-perception at one point in time and can vary with mood or context.',
    ],
    disclaimer: 'This is a personality self-reflection tool based on a public-domain research instrument. It describes general tendencies, not a clinical or diagnostic profile.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E.', work: 'The Mini-IPIP scales: Tiny-yet-effective measures of the Big Five factors of personality', year: 2006, publisher: 'Psychological Assessment', doi: '10.1037/1040-3590.18.2.192', url: 'https://doi.org/10.1037/1040-3590.18.2.192' },
      { author: 'Goldberg, L. R.', work: 'International Personality Item Pool', year: 1999, url: 'https://ipip.ori.org/' },
    ],
    status: 'published',
    statusReason: 'License confirmed public domain via the International Personality Item Pool (IPIP). Item wording and scoring verified against Donnellan et al. (2006). Built as one of the three Phase 2 template assessments.',
  }),
  ...(['Extraversion', 'Agreeableness', 'Conscientiousness', 'Emotional Stability', 'Openness to Experience'] as const).map((name, i) =>
    base({
      id: `pe-${13 + i}`, name, slug: name.toLowerCase().replace(/\s+/g, '-'),
      category: 'personality' as AssessmentCategory, evidenceLevel: 'B' as EvidenceLevel, assessmentType: 'public-domain-scale',
      instrumentName: 'IPIP single-factor subset (candidate)',
      status: 'planned',
      statusReason: 'Single-trait deep-dive built from the same public-domain IPIP item bank as the Big Five tests. Roadmap slot; not yet authored.',
    })
  ),
  ...(['Assertiveness', 'Sociability', 'Self-Discipline', 'Orderliness', 'Cautiousness'] as const).map((name, i) =>
    base({
      id: `pe-${18 + i}`, name, slug: name.toLowerCase().replace(/\s+/g, '-'),
      category: 'personality' as AssessmentCategory, evidenceLevel: 'B' as EvidenceLevel, assessmentType: 'public-domain-scale',
      instrumentName: 'IPIP facet-level subset (candidate)',
      status: 'planned',
      statusReason: 'Facet-level measure drawn from the public-domain IPIP facet item bank. Roadmap slot; not yet authored.',
    })
  ),

  // ========================= WORK & PRODUCTIVITY =========================
  base({
    id: 'wp-23', name: 'Procrastination Tendencies', slug: 'procrastination-tendencies',
    category: 'productivity', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    instrumentName: null,
    scoringMethod: 'Sum of 12 original Likert items (1-5 frequency scale). Range 12-60.',
    cutoffMethod: 'Tertile-style descriptive bands (lower / moderate / higher tendency) — informational only, not clinical cutoffs.',
    targetPopulation: 'Working adults and students reflecting on task-management habits.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale.',
      'Reflects self-reported patterns, not objective behavior or productivity outcomes.',
      'Informed by general procrastination research (e.g., temporal discounting, task-aversiveness, self-regulation literature) but is not itself a peer-reviewed instrument.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Steel, P.', work: 'The Nature of Procrastination: A Meta-Analytic and Theoretical Review of Quintessential Self-Regulatory Failure', year: 2007, publisher: 'Psychological Bulletin', doi: '10.1037/0033-2909.133.1.65', url: 'https://doi.org/10.1037/0033-2909.133.1.65' },
      { author: 'Sirois, F. M., & Pychyl, T.', work: 'Procrastination and the Priority of Short-Term Mood Regulation: Consequences for Future Self', year: 2013, publisher: 'Social and Personality Psychology Compass', doi: '10.1111/spc3.12011', url: 'https://doi.org/10.1111/spc3.12011' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Grounded in published procrastination research, clearly labeled as evidence-informed rather than validated. Built as one of the three Phase 2 template assessments.',
  }),
  base({
    id: 'wp-24', name: 'Deep Work Readiness', slug: 'deep-work-readiness',
    category: 'productivity', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    scoringMethod: 'Sum of 12 original Likert items (1-5 frequency scale). Range 12-60. Higher = more frequent use of focus-supporting habits.',
    cutoffMethod: 'Descriptive bands (developing / some / strong habits) — informational only, not a clinical or performance cutoff.',
    targetPopulation: 'Working adults and students whose work involves cognitively demanding tasks.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale.',
      'Reflects self-reported habits, not measured output, performance, or work quality.',
      'What counts as achievable "deep work" varies significantly by role.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Newport, C.', work: 'Deep Work: Rules for Focused Success in a Distracted World', year: 2016, publisher: 'Grand Central Publishing', url: 'https://www.calnewport.com/books/deep-work/' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Informed by general research on focused attention and task-switching costs, without reproducing any specific copyrighted instrument.',
  }),
  ...([
    ['wp-25', 'Focus Environment Test'], ['wp-26', 'Meeting Overload Check'], ['wp-27', 'Remote Work Fit'],
    ['wp-28', 'Work Boundary Check'], ['wp-29', 'Decision-Making Style'], ['wp-30', 'Feedback Preference'],
    ['wp-31', 'Leadership Tendencies'], ['wp-32', 'Team Collaboration Style'],
  ] as const).map(([id, name]) =>
    base({
      id, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: 'productivity' as AssessmentCategory, evidenceLevel: 'C' as EvidenceLevel, assessmentType: 'evidence-informed',
      status: 'planned',
      statusReason: 'Custom evidence-informed quiz. No licensing blocker; roadmap slot for a future build cycle.',
    })
  ),

  // ============================ RELATIONSHIPS ============================
  base({
    id: 're-33', name: 'Relationship Communication Style', slug: 'relationship-communication-style',
    category: 'relationships', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    scoringMethod: 'Sum of 10 original Likert items (1-5 frequency scale). Range 10-50. Describes a style continuum, not a good/bad score.',
    cutoffMethod: 'Descriptive style bands (more reserved / blended / more direct) — a style description, not a clinical cutoff. No band is presented as superior.',
    targetPopulation: 'Adults reflecting on their communication habits in close relationships.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale or typology.',
      'Communication style often varies by specific relationship, which a single score cannot fully capture.',
      'Reflects self-reported tendency, not observed behavior or the other person’s experience.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Gottman, J. M., & Silver, N.', work: 'The Seven Principles for Making Marriage Work', year: 1999, publisher: 'Harmony', url: 'https://www.gottman.com/' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Informed by general relationship-communication research, without reproducing any specific copyrighted instrument or validated typology.',
  }),
  ...([
    ['re-34', 'Conflict Response Style'], ['re-35', 'Boundary Setting'], ['re-36', 'Trust Tendencies'],
    ['re-37', 'Jealousy Triggers'], ['re-38', 'Emotional Availability'], ['re-39', 'Friendship Style'],
    ['re-40', 'Social Energy'], ['re-41', 'Dating Expectations'], ['re-42', 'Relationship Maintenance Habits'],
  ] as const).map(([id, name]) =>
    base({
      id, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: 'relationships' as AssessmentCategory, evidenceLevel: 'C' as EvidenceLevel, assessmentType: 'evidence-informed',
      status: 'planned',
      statusReason: 'Custom evidence-informed quiz. No licensing blocker; roadmap slot for a future build cycle.',
    })
  ),

  // ==================== LIFESTYLE & DIGITAL WELLBEING ====================
  base({
    id: 'li-43', name: 'Chronotype / Morning-Evening Preference', slug: 'chronotype-preference',
    category: 'lifestyle', evidenceLevel: 'A', assessmentType: 'validated-screening',
    instrumentName: 'Reduced Morningness-Eveningness Questionnaire (rMEQ) — candidate instrument',
    status: 'requires-review',
    statusReason: 'Validated chronotype instruments exist (e.g., rMEQ, MEQ), but licensing/permission was not verified this review cycle. Held back pending confirmation; a custom evidence-informed chronotype quiz may be built instead if rights cannot be confirmed.',
  }),
  base({
    id: 'li-44', name: 'Sleep Hygiene Check', slug: 'sleep-hygiene-check',
    category: 'lifestyle', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    scoringMethod: 'Sum of 10 original Likert items (1-5 frequency scale). Range 10-50. Higher = more consistent healthy sleep habits (positively framed, unlike most other tests on this platform).',
    cutoffMethod: 'Descriptive bands (room to build / mixed / strong habits) — informational only, not a clinical sleep-disorder cutoff.',
    targetPopulation: 'Adults reflecting on their sleep-related habits.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale.',
      'Measures habits, not sleep quality, sleep duration, or symptoms of a sleep disorder.',
      'Persistent sleep difficulty despite good habits is worth discussing with a healthcare professional.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Irish, L. A., Kline, C. E., Gunn, H. E., Buysse, D. J., & Hall, M. H.', work: 'The role of sleep hygiene in promoting public health: A review of empirical evidence', year: 2015, publisher: 'Sleep Medicine Reviews', doi: '10.1016/j.smrv.2014.10.001', url: 'https://doi.org/10.1016/j.smrv.2014.10.001' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Informed by general, widely published sleep-hygiene guidance, without reproducing any specific copyrighted instrument.',
  }),
  base({
    id: 'li-46', name: 'Digital Wellbeing Check', slug: 'digital-wellbeing-check',
    category: 'lifestyle', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    scoringMethod: 'Sum of 12 original Likert items (1-5 frequency scale). Range 12-60.',
    cutoffMethod: 'Descriptive bands (few / some / multiple signs of digital overuse) — informational only, not a clinical addiction cutoff.',
    targetPopulation: 'Adults reflecting on their smartphone and social-media habits.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale.',
      'Reflects self-reported frequency, not measured screen time or objective behavior.',
      'Does not diagnose problematic technology use as a clinical condition.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Elhai, J. D., Dvorak, R. D., Levine, J. C., & Hall, B. J.', work: 'Problematic smartphone use: A conceptual overview and systematic review of relations with anxiety and depression psychopathology', year: 2017, publisher: 'Journal of Affective Disorders', doi: '10.1016/j.jad.2016.08.030', url: 'https://doi.org/10.1016/j.jad.2016.08.030' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Informed by general research on habitual technology use, without reproducing any specific copyrighted instrument or making a clinical addiction claim.',
  }),
  ...([
    ['li-45', 'Sleep Debt Check'], ['li-47', 'Smartphone Habit Check'], ['li-48', 'Social Media Habit Check'],
    ['li-49', 'Notification Stress'], ['li-50', 'Caffeine Timing Habits'], ['li-51', 'Exercise Consistency'], ['li-52', 'Recovery Routine'],
  ] as const).map(([id, name]) =>
    base({
      id, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: 'lifestyle' as AssessmentCategory, evidenceLevel: 'C' as EvidenceLevel, assessmentType: 'evidence-informed',
      status: 'planned',
      statusReason: 'Custom evidence-informed quiz. No licensing blocker; roadmap slot for a future build cycle.',
    })
  ),

  // ============================ CAREER & VALUES ============================
  base({
    id: 'ca-54', name: 'Job Satisfaction Check', slug: 'job-satisfaction-check',
    category: 'career', evidenceLevel: 'C', assessmentType: 'evidence-informed',
    scoringMethod: 'Sum of 10 original Likert items (1-5 agreement scale). Range 10-50. Higher = higher self-reported satisfaction.',
    cutoffMethod: 'Descriptive bands (lower / mixed / higher satisfaction) — informational only, not a validated organizational-climate cutoff.',
    targetPopulation: 'Working adults reflecting on their current job.',
    limitations: [
      'An original, evidence-informed self-reflection tool — not a validated psychometric scale.',
      'Reflects a snapshot in time; satisfaction can shift with workload, team changes, or life circumstances.',
      'A single total score can mask very different underlying factor-level pictures.',
    ],
    disclaimer: 'This is an evidence-informed self-reflection assessment, not a clinically validated psychological test.',
    reviewStatus: 'editorial-review-pending', lastReviewed: '2026-09-21',
    references: [
      { author: 'Judge, T. A., Weiss, H. M., Kammeyer-Mueller, J. D., & Hulin, C. L.', work: 'Job attitudes, job satisfaction, and job affect: A century of continuity and of change', year: 2017, publisher: 'Journal of Applied Psychology', doi: '10.1037/apl0000181', url: 'https://doi.org/10.1037/apl0000181' },
    ],
    status: 'published',
    statusReason: 'Original items written for this platform; no third-party licensing dependency. Informed by general organizational-psychology research on job-satisfaction drivers, without reproducing any specific copyrighted instrument.',
  }),
  ...([
    ['ca-53', 'Career Values'], ['ca-55', 'Job Change Readiness'], ['ca-56', 'Entrepreneurial Work Style'],
    ['ca-57', 'Learning Preferences'], ['ca-58', 'Work Motivation'], ['ca-59', 'Career Decision Confidence'], ['ca-60', 'Workplace Strengths'],
  ] as const).map(([id, name]) =>
    base({
      id, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: 'career' as AssessmentCategory, evidenceLevel: 'C' as EvidenceLevel, assessmentType: 'evidence-informed',
      status: 'planned',
      statusReason: 'Custom evidence-informed quiz. No licensing blocker; roadmap slot for a future build cycle.',
    })
  ),
];

export function getPublishedRegistry(): RegistryEntry[] {
  return registry.filter((r) => r.status === 'published');
}

export function getRegistryBySlug(slug: string): RegistryEntry | undefined {
  return registry.find((r) => r.slug === slug);
}

export function getRegistryByCategory(category: AssessmentCategory): RegistryEntry[] {
  return registry.filter((r) => r.category === category);
}
