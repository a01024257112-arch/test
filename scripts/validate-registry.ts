/**
 * Registry / test-definition integrity check.
 * Run with: npm run test:data
 *
 * Enforces the platform's core safety rule: no test may be routed or built
 * unless its registry entry says "published", and every "published" test
 * must have a matching, internally consistent TestDefinition.
 */
import { registry } from '../src/data/registry';
import { testDefinitions } from '../src/data/tests/index';

let errors = 0;
const warn = (msg: string) => { console.error(`✗ ${msg}`); errors++; };

const publishedRegistry = registry.filter((r) => r.status === 'published');

for (const entry of publishedRegistry) {
  const def = testDefinitions.find((t) => t.slug === entry.slug);
  if (!def) {
    warn(`Registry entry "${entry.slug}" is status=published but has no TestDefinition built.`);
    continue;
  }
  if (def.evidenceLevel !== entry.evidenceLevel) {
    warn(`Evidence level mismatch for "${entry.slug}": registry=${entry.evidenceLevel} definition=${def.evidenceLevel}`);
  }
  if (entry.evidenceLevel === 'A' && entry.licenseStatus === 'unverified') {
    warn(`"${entry.slug}" is evidenceLevel A but licenseStatus is unverified — must not be published.`);
  }
}

for (const def of testDefinitions) {
  const entry = registry.find((r) => r.slug === def.slug);
  if (!entry) {
    warn(`TestDefinition "${def.slug}" has no matching registry entry.`);
    continue;
  }
  if (entry.status !== 'published') {
    warn(`TestDefinition "${def.slug}" exists but its registry status is "${entry.status}", not "published". Refusing to route this test.`);
  }

  // Scoring sanity checks
  if (def.scoring.method === 'sum') {
    if (def.resultBands.length === 0) warn(`"${def.slug}": sum-scored test has no resultBands.`);
    const sorted = [...def.resultBands].sort((a, b) => a.minScore - b.minScore);
    if (sorted[0]?.minScore !== def.scoring.minPossible) {
      warn(`"${def.slug}": result bands do not start at minPossible (${def.scoring.minPossible}).`);
    }
    if (sorted[sorted.length - 1]?.maxScore !== def.scoring.maxPossible) {
      warn(`"${def.slug}": result bands do not end at maxPossible (${def.scoring.maxPossible}).`);
    }
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].minScore !== sorted[i - 1].maxScore + 1) {
        warn(`"${def.slug}": gap or overlap between result bands "${sorted[i - 1].id}" and "${sorted[i].id}".`);
      }
    }
  }
  if (def.scoring.method === 'per-dimension-sum') {
    if (!def.dimensions || def.dimensions.length === 0) warn(`"${def.slug}": per-dimension-sum test has no dimensions defined.`);
    if (!def.dimensionBands) warn(`"${def.slug}": per-dimension-sum test has no dimensionBands.`);
    for (const dim of def.dimensions ?? []) {
      const qs = def.questions.filter((q) => q.dimension === dim.id);
      if (qs.length === 0) warn(`"${def.slug}": dimension "${dim.id}" has no questions.`);
      if (!def.dimensionBands?.[dim.id]) warn(`"${def.slug}": dimension "${dim.id}" has no result bands.`);
    }
  }

  // Crisis note requirement for clinical-topic tests
  if (def.evidenceLevel === 'A' && def.category === 'mental-wellbeing' && !def.crisisNoteRequired) {
    warn(`"${def.slug}": validated mental-wellbeing screening tool should set crisisNoteRequired = true.`);
  }
}

if (errors > 0) {
  console.error(`\n${errors} registry/data integrity error(s) found.`);
  process.exit(1);
} else {
  console.log(`✓ Registry and test data are internally consistent (${testDefinitions.length} published test(s) checked).`);
}
