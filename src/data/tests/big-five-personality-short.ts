import type { TestDefinition, ResultBand } from '../../lib/types';

/**
 * Mini-IPIP — 20-item Big Five short form.
 * Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006).
 * Psychological Assessment, 18(2), 192-203. doi:10.1037/1040-3590.18.2.192
 * Items drawn from the public-domain International Personality Item Pool (ipip.ori.org).
 * Response scale: 1 = Very Inaccurate ... 5 = Very Accurate.
 */

function bands(dimensionName: string, lowDesc: string, midDesc: string, highDesc: string, lowTraits: string[], highTraits: string[]): ResultBand[] {
  return [
    {
      id: 'lower', minScore: 4, maxScore: 10, label: `Lower ${dimensionName}`,
      shortInterpretation: `Your responses place you toward the lower end of the ${dimensionName} range.`,
      whatItMeans: lowDesc,
      whatItDoesNotMean: 'This is a relative description of self-reported tendencies, not a deficiency, diagnosis, or fixed trait — people express traits differently across situations and over time.',
      strongestPatterns: lowTraits,
      areasToWatch: ['Consider how this tendency shows up in situations that matter to you, and whether it serves you well there.'],
      suggestedNextSteps: ['Compare this result with the other four traits to see your fuller pattern.', 'Retake the test after a few months to see how stable this tendency is for you.'],
    },
    {
      id: 'mid', minScore: 11, maxScore: 14, label: `Mid-range ${dimensionName}`,
      shortInterpretation: `Your responses place you in the mid-range for ${dimensionName}.`,
      whatItMeans: midDesc,
      whatItDoesNotMean: 'A mid-range score does not mean "average" in a normative sense across the whole population — this short form is not scored against population norms.',
      strongestPatterns: ['A flexible pattern, leaning neither strongly high nor strongly low on this trait.'],
      areasToWatch: ['Notice which situations pull you toward each end of this trait.'],
      suggestedNextSteps: ['Compare this result with the other four traits to see your fuller pattern.'],
    },
    {
      id: 'higher', minScore: 15, maxScore: 20, label: `Higher ${dimensionName}`,
      shortInterpretation: `Your responses place you toward the higher end of the ${dimensionName} range.`,
      whatItMeans: highDesc,
      whatItDoesNotMean: 'This is a relative description of self-reported tendencies, not a superior trait or a fixed label — high scores bring their own trade-offs depending on context.',
      strongestPatterns: highTraits,
      areasToWatch: ['Consider whether this tendency ever works against you in specific situations.'],
      suggestedNextSteps: ['Compare this result with the other four traits to see your fuller pattern.', 'Retake the test after a few months to see how stable this tendency is for you.'],
    },
  ];
}

export const bigFivePersonalityShort: TestDefinition = {
  id: 'pe-12',
  slug: 'big-five-personality-short',
  registryId: 'pe-12',
  title: 'Big Five Personality Test — Short',
  oneLiner: 'A 20-item public-domain measure of the five broad personality trait dimensions.',
  estimatedMinutes: [3, 5],
  category: 'personality',
  evidenceLevel: 'B',
  answerScale: [
    { value: 1, label: 'Very Inaccurate' },
    { value: 2, label: 'Moderately Inaccurate' },
    { value: 3, label: 'Neither Accurate nor Inaccurate' },
    { value: 4, label: 'Moderately Accurate' },
    { value: 5, label: 'Very Accurate' },
  ],
  dimensions: [
    { id: 'extraversion', name: 'Extraversion', shortDescription: 'Sociability, assertiveness, and enthusiasm in social situations.' },
    { id: 'agreeableness', name: 'Agreeableness', shortDescription: 'Warmth, empathy, and cooperativeness toward others.' },
    { id: 'conscientiousness', name: 'Conscientiousness', shortDescription: 'Organization, dependability, and goal-directed behavior.' },
    { id: 'emotional-stability', name: 'Emotional Stability', shortDescription: 'Calmness and steadiness under stress (opposite of neuroticism).' },
    { id: 'openness', name: 'Openness to Experience', shortDescription: 'Imagination, curiosity, and interest in abstract or novel ideas.' },
  ],
  questions: [
    { id: 'q1', dimension: 'extraversion', prompt: 'Am the life of the party.' },
    { id: 'q2', dimension: 'extraversion', prompt: "Don't talk a lot.", reverseScored: true },
    { id: 'q3', dimension: 'extraversion', prompt: 'Feel comfortable around people.' },
    { id: 'q4', dimension: 'extraversion', prompt: 'Keep in the background.', reverseScored: true },

    { id: 'q5', dimension: 'agreeableness', prompt: "Sympathize with others' feelings." },
    { id: 'q6', dimension: 'agreeableness', prompt: "Am not interested in other people's problems.", reverseScored: true },
    { id: 'q7', dimension: 'agreeableness', prompt: "Feel others' emotions." },
    { id: 'q8', dimension: 'agreeableness', prompt: 'Am not really interested in others.', reverseScored: true },

    { id: 'q9', dimension: 'conscientiousness', prompt: 'Get chores done right away.' },
    { id: 'q10', dimension: 'conscientiousness', prompt: "Often forget to put things back in their proper place.", reverseScored: true },
    { id: 'q11', dimension: 'conscientiousness', prompt: 'Like order.' },
    { id: 'q12', dimension: 'conscientiousness', prompt: 'Make a mess of things.', reverseScored: true },

    { id: 'q13', dimension: 'emotional-stability', prompt: 'Have frequent mood swings.', reverseScored: true },
    { id: 'q14', dimension: 'emotional-stability', prompt: 'Am relaxed most of the time.' },
    { id: 'q15', dimension: 'emotional-stability', prompt: 'Get upset easily.', reverseScored: true },
    { id: 'q16', dimension: 'emotional-stability', prompt: 'Seldom feel blue.' },

    { id: 'q17', dimension: 'openness', prompt: 'Have a vivid imagination.' },
    { id: 'q18', dimension: 'openness', prompt: 'Have difficulty understanding abstract ideas.', reverseScored: true },
    { id: 'q19', dimension: 'openness', prompt: 'Am not interested in abstract ideas.', reverseScored: true },
    { id: 'q20', dimension: 'openness', prompt: 'Do not have a good imagination.', reverseScored: true },
  ],
  scoring: { method: 'per-dimension-sum', minPossible: 4, maxPossible: 20 },
  resultBands: [],
  dimensionBands: {
    extraversion: bands('Extraversion',
      'You describe yourself as reserved and comfortable with quieter, lower-stimulation settings rather than seeking them out.',
      'You describe yourself as situationally sociable — energized by people in some contexts and by solitude in others.',
      'You describe yourself as outgoing, talkative, and energized by social settings.',
      ['Comfort with solitude and lower-stimulation environments.', 'Tendency to observe before engaging in group settings.'],
      ['Ease initiating conversation and engaging groups.', 'Enthusiasm and visible energy in social settings.']),
    agreeableness: bands('Agreeableness',
      'You describe yourself as more focused on your own perspective than on tuning into others’ emotional states by default.',
      'You describe a balanced mix of self-focus and attentiveness to others’ feelings depending on the relationship.',
      'You describe yourself as empathetic and attentive to the feelings and needs of people around you.',
      ['Directness and independence in judgment.', 'Comfort prioritizing your own view in disagreements.'],
      ['Sensitivity to others’ emotional states.', 'Tendency toward cooperative, warm interactions.']),
    conscientiousness: bands('Conscientiousness',
      'You describe a more flexible, spontaneous approach to tasks and order rather than a highly structured one.',
      'You describe a mixed approach — structured in some areas of life, loose in others.',
      'You describe yourself as organized, dependable, and consistent about following through on tasks.',
      ['Comfort with spontaneity and adapting plans on the fly.', 'Lower attachment to strict routines.'],
      ['Reliable follow-through on commitments.', 'Preference for order and planning.']),
    'emotional-stability': bands('Emotional Stability',
      'You describe experiencing mood shifts and stress reactions more noticeably than a "steady baseline."',
      'You describe a mixed pattern — generally steady, with occasional stronger emotional reactions.',
      'You describe yourself as calm and steady, with a relatively even mood under everyday stress.',
      ['Emotional responsiveness to events, positive and negative.', 'Awareness of mood shifts as they happen.'],
      ['Steadiness under everyday pressure.', 'Quick recovery from minor setbacks.']),
    openness: bands('Openness to Experience',
      'You describe a preference for concrete, familiar ideas over abstract or highly novel ones.',
      'You describe a mixed pattern — curious in some domains, practical and concrete in others.',
      'You describe yourself as imaginative and drawn to abstract ideas, novelty, and creative thinking.',
      ['Preference for the concrete and proven over the abstract and speculative.', 'Practical, grounded approach to problems.'],
      ['Enjoyment of abstract or theoretical thinking.', 'Active imagination and interest in novel ideas.']),
  },
  whatItMeasures: 'The Mini-IPIP measures five broad personality trait dimensions — Extraversion, Agreeableness, Conscientiousness, Emotional Stability, and Openness to Experience — using 4 items per trait.',
  whoItIsFor: 'Anyone curious about their general personality tendencies. It was developed and validated on university and general community samples and is intended for self-reflection, not employment screening or clinical use.',
  howScoringWorks: 'Each item is rated 1 ("Very Inaccurate") to 5 ("Very Accurate"). Negatively worded items are reverse-scored, then the 4 items for each trait are summed, producing five separate scores ranging from 4 to 20.',
  scientificBasis: 'The Mini-IPIP was developed by Donnellan, Oswald, Baird, and Lucas (2006) as a short form of Goldberg’s public-domain International Personality Item Pool Big-Five markers, and its psychometric properties were evaluated across multiple samples in the original publication.',
  limitations: [
    'A short-form measure (4 items/trait) trades some precision for brevity compared to longer instruments.',
    'Self-report reflects self-perception, which can differ from how others perceive you.',
    'Not designed or validated for employment screening, clinical diagnosis, or high-stakes decision-making.',
    'Trait expression can vary by context, culture, and mood at the time of testing.',
  ],
  relatedTestSlugs: ['big-five-personality-full', 'assertiveness', 'self-discipline', 'career-values'],
  relatedGuideSlugs: ['big-five-personality-explained', 'how-personality-tests-are-scored'],
  crisisNoteRequired: false,
};
