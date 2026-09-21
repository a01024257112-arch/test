import type { TestDefinition } from '../../lib/types';

/**
 * Procrastination Tendencies — original, evidence-informed self-reflection quiz.
 * Not a reproduction of any named copyrighted instrument. Item content is
 * original, written with reference to the general procrastination research
 * literature (see references in resultBands / registry entry).
 */
export const procrastinationTendencies: TestDefinition = {
  id: 'wp-23',
  slug: 'procrastination-tendencies',
  registryId: 'wp-23',
  title: 'Procrastination Tendencies',
  oneLiner: 'An evidence-informed self-reflection quiz on how and when you delay tasks.',
  estimatedMinutes: [3, 4],
  category: 'productivity',
  evidenceLevel: 'C',
  answerScale: [
    { value: 1, label: 'Never' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Very Often' },
  ],
  questions: [
    { id: 'q1', prompt: 'I put off tasks that feel unpleasant, even when I know they need to get done.' },
    { id: 'q2', prompt: 'I wait until close to a deadline before starting important work.' },
    { id: 'q3', prompt: 'I find quick distractions (messages, browsing, small chores) when facing a task I am avoiding.' },
    { id: 'q4', prompt: 'I tell myself I "work better under pressure" to justify starting late.' },
    { id: 'q5', prompt: 'I spend more time planning or organizing a task than actually doing it.' },
    { id: 'q6', prompt: 'I delay tasks that feel overwhelming or unclear rather than breaking them into smaller steps.' },
    { id: 'q7', prompt: 'I feel anxious or guilty about a delayed task, which makes it harder to start.' },
    { id: 'q8', prompt: 'I choose an easier, lower-priority task over a harder, more important one.' },
    { id: 'q9', prompt: 'I underestimate how long a task will take when I decide to delay it.' },
    { id: 'q10', prompt: 'I need a looming consequence (deadline, someone asking) before I take action.' },
    { id: 'q11', prompt: 'I avoid starting a task because I am worried it won’t turn out well.' },
    { id: 'q12', prompt: 'After delaying a task, I feel relief in the short term even though it causes stress later.' },
  ],
  scoring: { method: 'sum', minPossible: 12, maxPossible: 60 },
  resultBands: [
    {
      id: 'lower', minScore: 12, maxScore: 27, label: 'Lower procrastination tendency',
      shortInterpretation: 'Your responses describe a pattern of generally starting and following through on tasks without much delay.',
      whatItMeans: 'You reported infrequent delay behaviors across most of the situations this quiz asks about — task avoidance, distraction-seeking, and deadline-driven starts were not common patterns for you.',
      whatItDoesNotMean: 'This does not mean you never procrastinate, and it is not a measure of productivity, intelligence, or work quality — it reflects self-reported frequency of specific delay behaviors only.',
      strongestPatterns: ['Starting tasks without needing external pressure.', 'Low reliance on distraction as an avoidance strategy.'],
      areasToWatch: ['Even with a lower overall tendency, notice if specific task types (e.g., unclear or unpleasant ones) still trigger delay.'],
      suggestedNextSteps: ['Consider whether your current systems (calendars, task breakdowns) are working well enough to keep doing more of the same.'],
    },
    {
      id: 'moderate', minScore: 28, maxScore: 42, label: 'Moderate procrastination tendency',
      shortInterpretation: 'Your responses describe a mixed pattern — sometimes starting promptly, sometimes delaying, depending on the task.',
      whatItMeans: 'You reported a middle range of delay behaviors. This is a very common pattern: most people delay some kinds of tasks (especially unpleasant, unclear, or high-stakes ones) more than others.',
      whatItDoesNotMean: 'A moderate score is not a character flaw or a sign of poor discipline — procrastination research treats it primarily as a short-term mood-regulation habit, not a fixed trait.',
      strongestPatterns: ['Delay tends to cluster around specific task types rather than being constant.', 'Some reliance on deadlines or external pressure to start.'],
      areasToWatch: ['Notice which 2-3 task types you delay most, and what feeling (boredom, anxiety, unclear next step) tends to precede the delay.'],
      suggestedNextSteps: ['Try breaking your most-delayed task type into a single small first step.', 'Consider pairing a delayed task with a fixed time block rather than an open-ended deadline.', 'The "Deep Work Readiness" and "Focus Environment" assessments explore related habits.'],
    },
    {
      id: 'higher', minScore: 43, maxScore: 60, label: 'Higher procrastination tendency',
      shortInterpretation: 'Your responses describe a pattern of frequent task delay across a range of situations.',
      whatItMeans: 'You reported frequent delay behaviors, including distraction-seeking, deadline-dependence, and short-term relief from avoidance — patterns commonly described in the procrastination research literature as self-regulatory difficulty rather than poor character.',
      whatItDoesNotMean: 'This is not a diagnosis, a measure of laziness, or a permanent trait. Procrastination research frames it as a learned response to how a task feels in the moment (boring, unclear, anxiety-provoking), which means it is also a pattern that can shift with different strategies.',
      strongestPatterns: ['Short-term mood relief from delaying (item 12-style pattern) appears to reinforce the habit.', 'Avoidance is often triggered by task ambiguity or anticipated difficulty rather than task importance.'],
      areasToWatch: ['Notice the specific emotion that shows up right before you delay a task — research links procrastination more to mood-avoidance than to time-management skill alone.'],
      suggestedNextSteps: ['Consider starting with the smallest possible version of the task rather than the whole thing.', 'A fixed, short time block ("just 10 minutes") can lower the activation barrier more effectively than a deadline.', 'If procrastination is consistently affecting work, school, or wellbeing, a conversation with a coach or mental-health professional can help — persistent task avoidance sometimes overlaps with anxiety or attention-related patterns worth exploring separately.'],
    },
  ],
  whatItMeasures: 'This quiz measures how often you notice a set of specific, self-reported task-delay behaviors — such as distraction-seeking, deadline-dependence, and short-term avoidance relief — across everyday work and personal tasks.',
  whoItIsFor: 'Anyone who wants a structured way to reflect on their own task-delay patterns. It is a self-reflection tool, not a diagnostic or clinical instrument, and it is not a measure of productivity or work quality.',
  howScoringWorks: 'Each of the 12 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 12 and 60. The result is divided into three descriptive bands (lower / moderate / higher tendency) based on where your total falls in that range — these are informational bands, not clinical cutoffs.',
  scientificBasis: 'The item content was written for this platform and is informed by, but does not reproduce, published procrastination research — including work on procrastination as a self-regulatory and mood-regulation phenomenon (Steel, 2007; Sirois & Pychyl, 2013). It is labeled an evidence-informed self-reflection assessment, not a validated psychometric scale.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects self-reported frequency, not objective behavior, output, or task quality.',
    'Scores can vary with recent workload, stress, or the specific tasks you had in mind while answering.',
  ],
  relatedTestSlugs: ['deep-work-readiness', 'focus-environment-test', 'burnout-warning-signs', 'self-discipline'],
  relatedGuideSlugs: ['how-online-self-assessments-work', 'screening-vs-diagnosis'],
  crisisNoteRequired: false,
};
