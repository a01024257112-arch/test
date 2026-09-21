import type { TestDefinition } from '../../lib/types';

/**
 * Exercise Consistency — original, evidence-informed self-reflection quiz.
 * Positively framed: a HIGHER score means more consistent activity habits
 * — stated explicitly to avoid confusion.
 */
export const exerciseConsistency: TestDefinition = {
  id: 'li-51',
  slug: 'exercise-consistency',
  registryId: 'li-51',
  title: 'Exercise Consistency',
  oneLiner: 'An evidence-informed self-reflection quiz on how consistently physical activity fits into your routine.',
  estimatedMinutes: [3, 4],
  category: 'lifestyle',
  evidenceLevel: 'C',
  answerScale: [
    { value: 1, label: 'Never' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Very Often' },
  ],
  questions: [
    { id: 'q1', prompt: 'I do some form of physical activity most days of the week.' },
    { id: 'q2', prompt: 'I have a consistent time or routine for exercise, rather than fitting it in randomly.' },
    { id: 'q3', prompt: 'I keep up with activity even during busy or stressful weeks.' },
    { id: 'q4', prompt: 'I do activity I genuinely enjoy, not just what I think I "should" do.' },
    { id: 'q5', prompt: 'I notice and adjust when a long stretch has gone by without much movement.' },
    { id: 'q6', prompt: 'I build some movement into my day even without a formal "workout" (walking, stretching, taking stairs).' },
    { id: 'q7', prompt: 'I get back into a routine relatively quickly after a break (travel, illness, a busy period).' },
    { id: 'q8', prompt: 'I plan activity in advance rather than relying only on spontaneous motivation.' },
    { id: 'q9', prompt: 'I notice physical or mood benefits that reinforce the habit.' },
    { id: 'q10', prompt: 'I prioritize activity even when my schedule is tight.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'Room to build a more consistent routine',
      shortInterpretation: 'Your responses suggest physical activity isn’t yet a consistent part of your routine.',
      whatItMeans: 'You reported infrequent regular activity, planning, or quick recovery after a break. This is common, especially with a busy or unpredictable schedule.',
      whatItDoesNotMean: 'This is not a judgment of your health, willpower, or worth — consistency is a habit-and-circumstance problem as much as a motivation one.',
      strongestPatterns: ['Activity likely depends heavily on spontaneous motivation rather than a set routine.'],
      areasToWatch: ['A long break with no adjustment (the inverse of item 5) is often the hardest pattern to reverse — noticing it early helps.'],
      suggestedNextSteps: ['Start smaller than feels sufficient — a short, consistent routine tends to stick better than an ambitious, inconsistent one.', 'The Recovery Routine test explores a closely related area.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Somewhat consistent routine',
      shortInterpretation: 'Your responses describe a mixed pattern — regular activity some weeks, inconsistent during others.',
      whatItMeans: 'You reported a middle range of consistency. Many people’s activity levels track closely with how busy or stressed a given period is.',
      whatItDoesNotMean: 'A moderate score doesn’t mean you’re failing at this — most people’s activity naturally fluctuates with life circumstances.',
      strongestPatterns: ['Busy or stressful periods likely have the biggest impact on your consistency (the inverse of item 3).'],
      areasToWatch: ['Notice how quickly you get back into a routine after a disruption (item 7) — that recovery speed matters more than never being disrupted at all.'],
      suggestedNextSteps: ['Consider planning activity in advance for your busiest weeks specifically, since that’s likely when consistency slips most.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'Consistent activity routine',
      shortInterpretation: 'Your responses describe a well-established, consistent activity routine.',
      whatItMeans: 'You reported frequent, planned activity that holds up even during busy periods, along with quick recovery after breaks.',
      whatItDoesNotMean: 'A high score doesn’t measure fitness level, performance, or health outcomes — it reflects self-reported consistency of habit, not intensity or results.',
      strongestPatterns: ['Routine appears resilient to disruption (item 7).', 'Activity seems to come from genuine enjoyment (item 4), which tends to support long-term consistency.'],
      areasToWatch: ['Even strong routines are worth revisiting periodically to avoid staleness or overuse patterns.'],
      suggestedNextSteps: ['The Recovery Routine and Sleep Hygiene Check tests look at two habits that tend to reinforce consistent activity.'],
    },
  ],
  whatItMeasures: 'This quiz measures how consistently physical activity fits into your routine, including planning, resilience to disruption, and enjoyment.',
  whoItIsFor: 'Anyone who wants a structured check-in on their activity habits. It is a self-reflection tool on consistency, not a fitness, performance, or medical assessment.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 10 and 50. A higher score means more consistent activity habits — stated explicitly since some other tests on this platform use the reverse framing.',
  scientificBasis: 'Item content was written for this platform, informed by general behavioral research on habit consistency, routine, and intrinsic motivation for physical activity, without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Measures consistency of habit, not fitness level, intensity, or health outcomes.',
    'Does not account for physical limitations or medical conditions that may affect activity levels.',
  ],
  relatedTestSlugs: ['recovery-routine', 'sleep-hygiene-check', 'burnout-warning-signs'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
