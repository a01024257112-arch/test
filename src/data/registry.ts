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
    status: 'planned',
    statusReason: 'Not restricted by licensing (custom, evidence-informed content referencing published burnout research) — simply not authored yet in this build cycle.',
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
  ...([
    'Deep Work Readiness', 'Focus Environment Test', 'Meeting Overload Check', 'Remote Work Fit',
    'Work Boundary Check', 'Decision-Making Style', 'Feedback Preference', 'Leadership Tendencies', 'Team Collaboration Style',
  ] as const).map((name, i) =>
    base({
      id: `wp-${24 + i}`, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: 'productivity' as AssessmentCategory, evidenceLevel: 'C' as EvidenceLevel, assessmentType: 'evidence-informed',
      status: 'planned',
      statusReason: 'Custom evidence-informed quiz. No licensing blocker; roadmap slot for a future build cycle.',
    })
  ),

  // ============================ RELATIONSHIPS ============================
  ...([
    'Relationship Communication Style', 'Conflict Response Style', 'Boundary Setting', 'Trust Tendencies',
    'Jealousy Triggers', 'Emotional Availability', 'Friendship Style', 'Social Energy', 'Dating Expectations',
    'Relationship Maintenance Habits',
  ] as const).map((name, i) =>
    base({
      id: `re-${33 + i}`, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
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
  ...([
    'Sleep Hygiene Check', 'Sleep Debt Check', 'Digital Wellbeing Check', 'Smartphone Habit Check',
    'Social Media Habit Check', 'Notification Stress', 'Caffeine Timing Habits', 'Exercise Consistency', 'Recovery Routine',
  ] as const).map((name, i) =>
    base({
      id: `li-${44 + i}`, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: 'lifestyle' as AssessmentCategory, evidenceLevel: 'C' as EvidenceLevel, assessmentType: 'evidence-informed',
      status: 'planned',
      statusReason: 'Custom evidence-informed quiz. No licensing blocker; roadmap slot for a future build cycle.',
    })
  ),

  // ============================ CAREER & VALUES ============================
  ...([
    'Career Values', 'Job Satisfaction Check', 'Job Change Readiness', 'Entrepreneurial Work Style',
    'Learning Preferences', 'Work Motivation', 'Career Decision Confidence', 'Workplace Strengths',
  ] as const).map((name, i) =>
    base({
      id: `ca-${53 + i}`, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
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
