/**
 * Core data model for the assessment platform.
 *
 * Every test on the site is described by two separate structures:
 *   1. RegistryEntry  — the scientific / editorial / legal record (docs/registry).
 *   2. TestDefinition — the runnable quiz (questions, scoring, result bands).
 *
 * They are kept separate on purpose: the registry is the source of truth for
 * "can we publish this test at all", and the test definition only exists for
 * tests that have cleared that gate (status: "published").
 */

export type EvidenceLevel =
  | 'A' // Validated screening tool
  | 'B' // Public-domain psychological scale
  | 'C' // Evidence-informed self-assessment
  | 'D'; // Lightweight / entertainment quiz

export type AssessmentCategory =
  | 'mental-wellbeing'
  | 'personality'
  | 'productivity'
  | 'relationships'
  | 'lifestyle'
  | 'career';

export type PublicationStatus =
  | 'published' // Live on the site
  | 'draft' // Built but not yet reviewed/verified — not routed, not in sitemap
  | 'requires-review' // Licensing/translation/scoring could not be fully verified
  | 'planned'; // Roadmap only — no content built yet

export interface SourceReference {
  author: string;
  work: string;
  year: number;
  publisher?: string;
  doi?: string;
  url: string;
}

export interface LicenseInfo {
  status: 'public-domain' | 'permissive-free-use' | 'licensed' | 'unverified';
  commercialUseAllowed: boolean;
  notes: string;
}

export interface TranslationRecord {
  locale: string;
  validated: boolean;
  translationSource: string;
  translationReference?: string;
  reviewedBy?: string;
  reviewDate?: string;
}

/**
 * The scientific / legal / editorial registry entry.
 * This is the object required by the "internal registry" in the project spec.
 * One entry exists for every one of the ~60 roadmap tests, published or not.
 */
export interface RegistryEntry {
  id: string;
  name: string;
  slug: string;
  category: AssessmentCategory;
  assessmentType: 'validated-screening' | 'public-domain-scale' | 'evidence-informed' | 'entertainment';
  evidenceLevel: EvidenceLevel;
  instrumentName: string | null;
  originalAuthors: string[];
  publicationYear: number | null;
  sourceURL: string | null;
  doi: string | null;
  officialReference: string | null;
  licenseStatus: LicenseInfo['status'];
  commercialUseAllowed: boolean | null;
  translationStatus: 'not-applicable' | 'none-verified' | 'partial' | 'complete';
  validatedLanguages: string[];
  questionCount: number | null;
  scoringMethod: string;
  cutoffMethod: string | null;
  targetPopulation: string;
  ageRange: string;
  limitations: string[];
  disclaimer: string;
  reviewStatus: 'reviewed' | 'editorial-review-pending' | 'not-started';
  reviewerName: string | null;
  reviewerCredentials: string | null;
  lastReviewed: string | null;
  references: SourceReference[];
  status: PublicationStatus;
  statusReason: string;
}

export type AnswerScaleItem = {
  value: number;
  label: string;
};

export interface QuestionItem {
  id: string;
  prompt: string;
  /** Overrides the test-level answer scale for this question, if set. */
  answerScale?: AnswerScaleItem[];
  /** Multiplies the raw answer value by -1 conceptually (IPIP reverse-scored items). */
  reverseScored?: boolean;
  /** Which scored dimension/subscale this item feeds (for multi-trait tests). */
  dimension?: string;
}

export interface ResultBand {
  id: string;
  minScore: number;
  maxScore: number;
  label: string;
  shortInterpretation: string;
  whatItMeans: string;
  whatItDoesNotMean: string;
  strongestPatterns: string[];
  areasToWatch: string[];
  suggestedNextSteps: string[];
  professionalSupportNote?: string;
}

export interface DimensionDefinition {
  id: string;
  name: string;
  shortDescription: string;
}

export interface TestDefinition {
  id: string;
  slug: string;
  registryId: string;
  title: string;
  oneLiner: string;
  estimatedMinutes: [number, number];
  category: AssessmentCategory;
  evidenceLevel: EvidenceLevel;
  answerScale: AnswerScaleItem[];
  questions: QuestionItem[];
  dimensions?: DimensionDefinition[];
  scoring: {
    method: 'sum' | 'mean' | 'per-dimension-sum';
    minPossible: number;
    maxPossible: number;
  };
  /** Used by single-score tests (e.g. GAD-7, Procrastination Tendencies). */
  resultBands: ResultBand[];
  /** Used by multi-dimension tests (e.g. Big Five). Keyed by DimensionDefinition.id. */
  dimensionBands?: Record<string, ResultBand[]>;
  whatItMeasures: string;
  whoItIsFor: string;
  howScoringWorks: string;
  scientificBasis: string;
  limitations: string[];
  relatedTestSlugs: string[];
  relatedGuideSlugs: string[];
  crisisNoteRequired: boolean;
}
