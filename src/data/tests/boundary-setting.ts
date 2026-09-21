import type { TestDefinition } from '../../lib/types';

/**
 * Boundary Setting — original, evidence-informed self-reflection quiz.
 * Positively framed: a HIGHER score means more frequent, comfortable
 * boundary-setting — stated explicitly to avoid confusion.
 */
export const boundarySetting: TestDefinition = {
  id: 're-35',
  slug: 'boundary-setting',
  registryId: 're-35',
  title: 'Boundary Setting',
  oneLiner: 'An evidence-informed self-reflection quiz on how comfortable you are setting limits in relationships.',
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
    { id: 'q1', prompt: 'I say no to a request when I genuinely don’t have the capacity, even if it disappoints someone.' },
    { id: 'q2', prompt: 'I speak up when someone crosses a limit that matters to me.' },
    { id: 'q3', prompt: 'I ask for space or time alone when I need it, without over-explaining.' },
    { id: 'q4', prompt: 'I end a conversation or interaction that has become disrespectful or draining.' },
    { id: 'q5', prompt: 'I set limits on my time even with people I care about.' },
    { id: 'q6', prompt: 'I hold a boundary even when the other person pushes back.' },
    { id: 'q7', prompt: 'I feel okay, not guilty, after saying no to something I didn’t want to do.' },
    { id: 'q8', prompt: 'I tell people directly what I’m not comfortable with, rather than hoping they figure it out.' },
    { id: 'q9', prompt: 'I protect my own plans or commitments even when someone asks me to change them.' },
    { id: 'q10', prompt: 'I notice when I’m starting to feel resentful and trace it back to a boundary I haven’t set.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'Boundary setting feels difficult',
      shortInterpretation: 'Your responses suggest setting and holding limits is currently more the exception than the routine for you.',
      whatItMeans: 'You reported infrequent direct boundary-setting — saying no, asking for space, or holding a limit under pushback. This is common, especially in relationships where you value harmony or fear disappointing others.',
      whatItDoesNotMean: 'This is not a character flaw, and it doesn’t mean you have no limits — it may mean they’re harder to voice out loud than to feel internally.',
      strongestPatterns: ['Saying yes even at real personal cost may be a common pattern.', 'Guilt after saying no (the inverse of item 7) may make boundaries feel costly to set.'],
      areasToWatch: ['Resentment (item 10) is often the clearest internal signal that an unset boundary is accumulating cost.'],
      suggestedNextSteps: ['Start with one low-stakes boundary — a small no — as practice before tackling harder ones.', 'The Relationship Communication Style and Conflict Response Style tests explore closely related territory.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Boundary setting is a mixed picture',
      shortInterpretation: 'Your responses describe a mix — comfortable setting some boundaries, harder with others.',
      whatItMeans: 'You reported a middle range of comfort with boundary-setting. Many people find this easier in some relationships (work, acquaintances) and harder in others (family, romantic partners).',
      whatItDoesNotMean: 'A moderate score doesn’t mean you’re inconsistent or bad at this — boundary comfort reasonably varies by relationship and stakes.',
      strongestPatterns: ['Comfort with limits likely depends heavily on who’s asking.'],
      areasToWatch: ['Notice which specific relationship is hardest to set limits in — that’s usually where the resentment (item 10) shows up most.'],
      suggestedNextSteps: ['Pick the one relationship where boundaries feel hardest and consider what a small, specific limit there would look like.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'Comfortable setting boundaries',
      shortInterpretation: 'Your responses describe consistent comfort setting and holding limits.',
      whatItMeans: 'You reported frequent, direct boundary-setting — saying no, asking for space, and holding limits even under pushback.',
      whatItDoesNotMean: 'This doesn’t mean you’re rigid or unavailable — comfortable boundary-setting and warmth or flexibility aren’t opposites.',
      strongestPatterns: ['Comfort saying no without excessive guilt.', 'Willingness to hold a limit even when it’s met with pushback.'],
      areasToWatch: ['Consider whether your boundaries leave enough room for others’ needs too, especially in close relationships.'],
      suggestedNextSteps: ['The Conflict Response Style and Trust Tendencies tests can round out the picture of how boundaries fit into your broader relationship style.'],
    },
  ],
  whatItMeasures: 'This quiz measures how often you set and hold personal limits in relationships — saying no, asking for space, and maintaining a boundary under pushback.',
  whoItIsFor: 'Anyone curious about their boundary-setting habits. It is a self-reflection tool, not a therapy substitute or a validated psychometric instrument.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 10 and 50. A higher score means more frequent, comfortable boundary-setting — stated explicitly since some other tests on this platform use the reverse framing.',
  scientificBasis: 'Item content was written for this platform, informed by general relationship and clinical-psychology writing on boundary-setting and its link to resentment and relationship satisfaction, without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Boundary comfort often varies significantly by specific relationship, which a single score can’t fully capture.',
    'Reflects self-reported tendency, not observed behavior.',
  ],
  relatedTestSlugs: ['relationship-communication-style', 'conflict-response-style', 'work-boundary-check', 'trust-tendencies'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
