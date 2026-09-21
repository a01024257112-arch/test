import type { TestDefinition } from '../../lib/types';

/**
 * Deep Work Readiness — original, evidence-informed self-reflection quiz.
 * Item content is original, informed by general research on focused
 * attention, task-switching costs, and environment design.
 */
export const deepWorkReadiness: TestDefinition = {
  id: 'wp-24',
  slug: 'deep-work-readiness',
  registryId: 'wp-24',
  title: 'Deep Work Readiness',
  oneLiner: 'An evidence-informed self-reflection quiz on your capacity for sustained, focused work.',
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
    { id: 'q1', prompt: 'I can work on a single task for an hour or more without checking my phone or messages.' },
    { id: 'q2', prompt: 'I schedule specific blocks of time for focused work, not just meetings and tasks.' },
    { id: 'q3', prompt: 'I turn off or silence notifications before starting demanding work.' },
    { id: 'q4', prompt: 'I know what my most cognitively demanding task each day is before I start working.' },
    { id: 'q5', prompt: 'I protect my focused work time from meetings when possible.' },
    { id: 'q6', prompt: 'I can return to a task quickly after being interrupted, without losing significant time re-orienting.' },
    { id: 'q7', prompt: 'I have a workspace that supports sustained concentration when I need it.' },
    { id: 'q8', prompt: 'I finish a work session feeling like I made real progress on something that mattered.' },
    { id: 'q9', prompt: 'I resist the urge to multitask when working on something important.' },
    { id: 'q10', prompt: 'I notice when I’m in a state of deep focus and try to protect it rather than break it unnecessarily.' },
    { id: 'q11', prompt: 'I set a clear intention or goal before starting a work session.' },
    { id: 'q12', prompt: 'I limit how often I check email or chat apps during focused work blocks.' },
  ],
  scoring: { method: 'sum', minPossible: 12, maxPossible: 60 },
  resultBands: [
    {
      id: 'lower', minScore: 12, maxScore: 27, label: 'Developing deep work habits',
      shortInterpretation: 'Your responses suggest sustained, focused work is currently more the exception than the routine for you.',
      whatItMeans: 'You reported infrequent use of the habits this quiz asks about — protected time blocks, notification control, and pre-session intention setting. This is common in reactive, meeting-heavy, or highly interrupted work environments.',
      whatItDoesNotMean: 'This is not a measure of intelligence, work ethic, or output quality — it reflects self-reported habits and environment, both of which are changeable.',
      strongestPatterns: ['Work is likely organized more around responding than around protected, planned focus time.', 'Interruptions may be frequent enough that "getting back into" a task is common.'],
      areasToWatch: ['Notice how much of a typical day is genuinely unscheduled vs. filled with meetings or reactive tasks.'],
      suggestedNextSteps: ['Start with one protected block (even 25–45 minutes) rather than trying to overhaul your whole schedule at once.', 'The Focus Environment Test and Meeting Overload Check look at two of the biggest structural blockers to this.'],
    },
    {
      id: 'moderate', minScore: 28, maxScore: 42, label: 'Some deep work habits in place',
      shortInterpretation: 'Your responses describe a mixed pattern — some real focused-work habits, alongside frequent interruption or reactive work.',
      whatItMeans: 'You reported a middle range across scheduling, environment control, and interruption recovery. Many people in this range have some of the pieces (e.g., a good workspace) but not others (e.g., protected calendar time).',
      whatItDoesNotMean: 'A moderate score doesn’t mean your current approach is failing — it may simply reflect a job or season of life with genuinely competing demands.',
      strongestPatterns: ['At least some intentional habits (scheduling, environment, or notification control) are already in place.', 'Focus is achievable but not yet consistently protected.'],
      areasToWatch: ['Identify which single habit — scheduling, notifications, or environment — is your weakest link; improving one often has outsized effects.'],
      suggestedNextSteps: ['Try protecting one recurring block per week first, rather than every day, to build the habit without disrupting everything else.', 'Pair this with the Notification Stress test to see if digital interruptions are a bigger factor than scheduling.'],
    },
    {
      id: 'higher', minScore: 43, maxScore: 60, label: 'Strong deep work habits',
      shortInterpretation: 'Your responses describe well-established habits that support sustained, focused work.',
      whatItMeans: 'You reported frequent use of protected time blocks, notification control, and intentional focus habits. This pattern is generally associated with an environment and routine that supports concentrated work.',
      whatItDoesNotMean: 'This isn’t a guarantee against burnout or overwork — strong focus habits and healthy limits on total workload are separate things. See the Burnout Warning Signs test if sustained effort is starting to feel draining rather than energizing.',
      strongestPatterns: ['Consistent scheduling and protection of focused time.', 'Good recovery from interruptions when they do happen.'],
      areasToWatch: ['Even strong focus habits benefit from periodic review as roles, teams, or tools change.'],
      suggestedNextSteps: ['Consider whether your current habits would hold up under a busier season, and what your fallback plan would be.'],
    },
  ],
  whatItMeasures: 'This quiz measures how often you use habits research associates with sustained, focused work — protected time blocks, notification control, environment design, and intentional session-setting.',
  whoItIsFor: 'Anyone whose work involves cognitively demanding tasks and who wants a structured way to reflect on their focus habits. It is a self-reflection tool, not a productivity or performance evaluation.',
  howScoringWorks: 'Each of the 12 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 12 and 60, divided into three descriptive bands. Unlike some of our other tests, a higher score here describes more frequent use of focus-supporting habits, not a warning sign.',
  scientificBasis: 'Item content was written for this platform, informed by general research on attention, task-switching costs, and environment design for concentrated work (e.g., Newport’s "deep work" framework and related attention-residue research), without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects self-reported habits, not measured output, performance, or work quality.',
    'What counts as "deep work" varies by role — some jobs are inherently more interrupt-driven, which this quiz does not fully account for.',
  ],
  relatedTestSlugs: ['procrastination-tendencies', 'burnout-warning-signs', 'work-boundary-check', 'meeting-overload-check'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
