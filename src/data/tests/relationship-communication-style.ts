import type { TestDefinition } from '../../lib/types';

/**
 * Relationship Communication Style — original, evidence-informed
 * self-reflection quiz. Describes a directness/openness style continuum
 * rather than a "good vs. bad" score; no style is presented as superior.
 */
export const relationshipCommunicationStyle: TestDefinition = {
  id: 're-33',
  slug: 'relationship-communication-style',
  registryId: 're-33',
  title: 'Relationship Communication Style',
  oneLiner: 'An evidence-informed self-reflection quiz on how directly you express needs and feelings in close relationships.',
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
    { id: 'q1', prompt: 'I say directly what I need in a relationship rather than hoping the other person notices.' },
    { id: 'q2', prompt: 'I bring up a problem soon after it happens rather than waiting or avoiding it.' },
    { id: 'q3', prompt: 'I tell a partner or close friend when something they did hurt or bothered me.' },
    { id: 'q4', prompt: 'I ask directly for reassurance or clarity when I’m unsure where I stand with someone.' },
    { id: 'q5', prompt: 'I express appreciation or affection out loud rather than assuming it’s understood.' },
    { id: 'q6', prompt: 'I say no or set a limit when something doesn’t work for me, even if it might disappoint the other person.' },
    { id: 'q7', prompt: 'I share how I’m feeling in the moment rather than processing it alone first and explaining later, if at all.' },
    { id: 'q8', prompt: 'I ask clarifying questions instead of assuming I know what someone meant.' },
    { id: 'q9', prompt: 'I bring up disagreements directly with the person involved, rather than venting to someone else instead.' },
    { id: 'q10', prompt: 'I tell people what I expect from them in a relationship, rather than expecting them to guess.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'More reserved communication style',
      shortInterpretation: 'Your responses describe a more reserved, indirect style — you tend to process internally before (or instead of) speaking up.',
      whatItMeans: 'You reported less frequent direct expression of needs, feelings, or disagreements. This is a communication style, not a flaw — many reserved communicators are thoughtful, low-drama, and careful not to overwhelm others.',
      whatItDoesNotMean: 'This does not mean you don’t care, and it is not the same as passivity or avoidance in every relationship — style can vary a lot by relationship and context.',
      strongestPatterns: ['Tendency to process feelings internally before sharing, if you share them at all.', 'Caution about creating conflict or disappointing others.'],
      areasToWatch: ['Needs or concerns that go unspoken can build up or get misread as "everything is fine" by others.'],
      suggestedNextSteps: ['Consider picking one low-stakes preference to state directly this week as practice.', 'The Boundary Setting and Conflict Response Style tests explore closely related territory.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Blended communication style',
      shortInterpretation: 'Your responses describe a blended style — sometimes direct, sometimes more reserved, depending on the relationship or situation.',
      whatItMeans: 'You reported a middle range of direct expression. Many people communicate this way: openly in some relationships or about some topics, more guarded in others.',
      whatItDoesNotMean: 'A blended score is not "average" in a normative sense — this quiz doesn’t compare you to a population, only to the 10–50 possible range.',
      strongestPatterns: ['Directness likely varies by relationship — perhaps more open with some people than others.'],
      areasToWatch: ['Notice if the relationships where you’re least direct are also the ones causing you the most quiet frustration.'],
      suggestedNextSteps: ['Consider which specific relationship or topic you tend to go quiet on, and why.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'More direct communication style',
      shortInterpretation: 'Your responses describe a more direct, open style — you tend to say what you need and feel relatively promptly.',
      whatItMeans: 'You reported frequent direct expression of needs, feelings, and disagreements. This style tends to reduce misunderstandings, though it isn’t automatically "better" — it depends on how it’s delivered and received.',
      whatItDoesNotMean: 'Directness is not the same as being right, and frequent direct expression doesn’t guarantee the other person feels heard — tone, timing, and listening matter as much as saying things at all.',
      strongestPatterns: ['Comfort naming needs, feelings, and disagreements relatively promptly.', 'Low reliance on others "just knowing" how you feel.'],
      areasToWatch: ['Consider whether your directness leaves enough room for the other person’s pace, especially with more reserved communicators.'],
      suggestedNextSteps: ['The Conflict Response Style and Emotional Availability tests can round out the picture of how you handle the other side of communication — listening and responding.'],
    },
  ],
  whatItMeasures: 'This quiz measures how often you directly express needs, feelings, and disagreements in close relationships, describing a style continuum from more reserved to more direct.',
  whoItIsFor: 'Anyone curious about their communication tendencies in relationships. It is a self-reflection tool, not a relationship-skills assessment or therapy substitute, and no style it describes is presented as inherently better than another.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 10 and 50, divided into three descriptive style bands. These describe a style, not a performance score — there is no "best" band.',
  scientificBasis: 'Item content was written for this platform, informed by general relationship-communication research on directness and disclosure in close relationships, without reproducing any specific copyrighted instrument or presenting the result as a validated typology.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Communication style often varies significantly by specific relationship, which a single score can’t fully capture.',
    'Reflects self-reported tendency, not observed behavior or the other person’s experience of the communication.',
  ],
  relatedTestSlugs: ['conflict-response-style', 'boundary-setting', 'emotional-availability', 'trust-tendencies'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
