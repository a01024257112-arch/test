import type { TestDefinition } from '../../lib/types';
import { anxietySymptomScreening } from './anxiety-symptom-screening';
import { bigFivePersonalityShort } from './big-five-personality-short';
import { procrastinationTendencies } from './procrastination-tendencies';

/**
 * Every runnable test on the site. A test may only appear here if its
 * registry entry (src/data/registry.ts) has status "published".
 */
export const testDefinitions: TestDefinition[] = [
  anxietySymptomScreening,
  bigFivePersonalityShort,
  procrastinationTendencies,
];

export function getTestBySlug(slug: string): TestDefinition | undefined {
  return testDefinitions.find((t) => t.slug === slug);
}
