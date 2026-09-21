import type { TestDefinition } from '../../lib/types';
import { anxietySymptomScreening } from './anxiety-symptom-screening';
import { bigFivePersonalityShort } from './big-five-personality-short';
import { procrastinationTendencies } from './procrastination-tendencies';
import { burnoutWarningSigns } from './burnout-warning-signs';
import { deepWorkReadiness } from './deep-work-readiness';
import { relationshipCommunicationStyle } from './relationship-communication-style';
import { digitalWellbeingCheck } from './digital-wellbeing-check';
import { sleepHygieneCheck } from './sleep-hygiene-check';
import { jobSatisfactionCheck } from './job-satisfaction-check';

/**
 * Every runnable test on the site. A test may only appear here if its
 * registry entry (src/data/registry.ts) has status "published".
 */
export const testDefinitions: TestDefinition[] = [
  anxietySymptomScreening,
  bigFivePersonalityShort,
  procrastinationTendencies,
  burnoutWarningSigns,
  deepWorkReadiness,
  relationshipCommunicationStyle,
  digitalWellbeingCheck,
  sleepHygieneCheck,
  jobSatisfactionCheck,
];

export function getTestBySlug(slug: string): TestDefinition | undefined {
  return testDefinitions.find((t) => t.slug === slug);
}
