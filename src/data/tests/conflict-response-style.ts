import type { TestDefinition } from '../../lib/types';

/**
 * Conflict Response Style — original, evidence-informed self-reflection
 * quiz. Describes a withdraw <-> engage continuum, not a good/bad score;
 * no style is presented as superior.
 */
export const conflictResponseStyle: TestDefinition = {
  id: 're-34',
  slug: 'conflict-response-style',
  registryId: 're-34',
  title: 'Conflict Response Style',
  oneLiner: 'An evidence-informed self-reflection quiz on how you tend to engage with disagreement in close relationships.',
  estimatedMinutes: [3, 4],
  category: 'relationships',
  evidenceLevel: 'C',
  answerScale: [
    { value: 1, label: 'Never' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Very Often' },
  ],
  questions: [
    { id: 'q1', prompt: 'When a disagreement comes up, I address it directly rather than letting it pass.' },
    { id: 'q2', prompt: 'I stay in the conversation even when it gets uncomfortable, rather than withdrawing.' },
    { id: 'q3', prompt: 'I bring up a conflict soon after it happens rather than waiting until later.' },
    { id: 'q4', prompt: 'I say what’s actually bothering me rather than a smaller, "safer" version of it.' },
    { id: 'q5', prompt: 'I ask questions to understand the other person’s side during a disagreement.' },
    { id: 'q6', prompt: 'I keep engaging even if the other person seems upset, rather than backing off entirely.' },
    { id: 'q7', prompt: 'I initiate a follow-up conversation if something wasn’t fully resolved.' },
    { id: 'q8', prompt: 'I express disagreement even when I think it might not be well received.' },
    { id: 'q9', prompt: 'I try to find a resolution rather than just letting the tension fade on its own.' },
    { id: 'q10', prompt: 'I’m willing to sit with some discomfort in order to work through a disagreement.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'More withdrawing style',
      shortInterpretation: 'Your responses describe a style that leans toward stepping back from conflict rather than engaging with it directly.',
      whatItMeans: 'You reported less frequent direct engagement with disagreement — letting things pass, waiting, or disengaging when tension rises. This is a common style, often protective in the moment.',
      whatItDoesNotMean: 'This does not mean you avoid all conflict or don’t care about resolving things — and withdrawing is sometimes a genuinely wise choice, not always avoidance.',
      strongestPatterns: ['Tendency to let smaller disagreements pass rather than raise them.', 'Preference for tension to settle on its own.'],
      areasToWatch: ['Unaddressed disagreements can accumulate — notice if withdrawing is a deliberate choice or a default you’d rather change in some relationships.'],
      suggestedNextSteps: ['Consider picking one recurring, lower-stakes tension to address directly as practice.', 'The Relationship Communication Style and Boundary Setting tests explore closely related territory.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Blended style',
      shortInterpretation: 'Your responses describe a blended style — sometimes engaging directly, sometimes stepping back, depending on the situation.',
      whatItMeans: 'You reported a middle range of direct conflict engagement. Many people respond this way: engaging in some relationships or about some topics, withdrawing in others.',
      whatItDoesNotMean: 'A blended score is not "average" in a normative sense — this quiz doesn’t compare you to a population, only to the 10–50 possible range.',
      strongestPatterns: ['Engagement likely depends heavily on the relationship or the specific issue.'],
      areasToWatch: ['Notice if the relationships where you withdraw most are also where you feel the most lingering frustration.'],
      suggestedNextSteps: ['Consider which specific relationship or topic you tend to withdraw from, and whether that’s a choice you’d want to make differently.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'More engaging style',
      shortInterpretation: 'Your responses describe a style that leans toward staying engaged with disagreement and working to resolve it.',
      whatItMeans: 'You reported frequent direct engagement with conflict — addressing it promptly, staying in the conversation, and following up. This style tends to surface and resolve issues, though it isn’t automatically "better" for every relationship or moment.',
      whatItDoesNotMean: 'Engaging more doesn’t mean you handle conflict well in every sense — how you engage (tone, timing, listening) matters as much as whether you engage at all.',
      strongestPatterns: ['Comfort staying present through discomfort rather than disengaging.', 'Tendency to follow through on unresolved issues.'],
      areasToWatch: ['Consider whether your pace matches the other person’s — someone with a more withdrawing style may need more space than you’re inclined to give.'],
      suggestedNextSteps: ['The Relationship Communication Style and Emotional Availability tests can round out the picture of how conflict fits into your broader relationship style.'],
    },
  ],
  whatItMeasures: 'This quiz measures how often you engage directly with disagreement versus stepping back from it, describing a style continuum from more withdrawing to more engaging.',
  whoItIsFor: 'Anyone curious about their conflict-response tendencies in close relationships. It is a self-reflection tool, not a relationship-skills assessment, and no style it describes is presented as inherently better than another.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 10 and 50, divided into three descriptive style bands. These describe a style, not a performance score.',
  scientificBasis: 'Item content was written for this platform, informed by general relationship-conflict research on engagement versus withdrawal patterns (e.g., demand-withdraw dynamics widely studied in relationship science), without reproducing any specific copyrighted instrument or presenting the result as a validated typology.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Conflict style often varies significantly by specific relationship or issue, which a single score can’t fully capture.',
    'Reflects self-reported tendency, not the other person’s experience of the conflict.',
  ],
  relatedTestSlugs: ['relationship-communication-style', 'boundary-setting', 'trust-tendencies', 'emotional-availability'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
