import type { TestDefinition } from '../../lib/types';

/**
 * Work Motivation — original, evidence-informed self-reflection quiz.
 * Positively framed: a HIGHER score means stronger self-reported
 * motivation — stated explicitly to avoid confusion.
 */
export const workMotivation: TestDefinition = {
  id: 'ca-58',
  slug: 'work-motivation',
  registryId: 'ca-58',
  title: 'Work Motivation',
  oneLiner: 'An evidence-informed self-reflection quiz on what currently drives your motivation at work.',
  estimatedMinutes: [3, 4],
  category: 'career',
  evidenceLevel: 'C',
  answerScale: [
    { value: 1, label: 'Strongly Disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly Agree' },
  ],
  questions: [
    { id: 'q1', prompt: 'I feel genuinely interested in the work itself, not just its outcomes.' },
    { id: 'q2', prompt: 'I want to do well because the work matters to me, not just to avoid criticism.' },
    { id: 'q3', prompt: 'I find myself thinking about work problems even when I don’t have to.' },
    { id: 'q4', prompt: 'I feel a sense of progress or growth in my current role.' },
    { id: 'q5', prompt: 'I would still put in real effort even if no one were checking on me.' },
    { id: 'q6', prompt: 'I feel energized, not just obligated, when I start my workday.' },
    { id: 'q7', prompt: 'I take initiative on things beyond what’s strictly asked of me.' },
    { id: 'q8', prompt: 'I feel a sense of ownership over the outcomes of my work.' },
    { id: 'q9', prompt: 'I can clearly explain why my work matters, beyond a paycheck.' },
    { id: 'q10', prompt: 'I look forward to specific parts of my job.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'Lower current motivation',
      shortInterpretation: 'Your responses describe lower self-reported motivation right now.',
      whatItMeans: 'You reported lower agreement across genuine interest, initiative, ownership, and sense of purpose. This is a snapshot of current motivation, which can be affected by role fit, workload, or life circumstances.',
      whatItDoesNotMean: 'This is not a verdict on your work ethic or capability — motivation fluctuates and is often more about fit and conditions than personal drive.',
      strongestPatterns: ['Motivation may currently be more externally driven (avoiding criticism, meeting expectations) than internally driven.'],
      areasToWatch: ['Consider whether this reflects the role itself, current workload, or something more situational (a hard season, unclear expectations).'],
      suggestedNextSteps: ['The Job Satisfaction Check and Career Decision Confidence tests can help clarify whether this points to a role-specific issue or something broader.', 'Identify your single highest-scoring item — that’s often a clue to what still genuinely engages you.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Mixed motivation',
      shortInterpretation: 'Your responses describe a mixed picture — genuine engagement in some areas, less in others.',
      whatItMeans: 'You reported a middle range overall, which usually means some parts of the work motivate you more than others.',
      whatItDoesNotMean: 'A moderate score doesn’t mean something is wrong — most people’s motivation varies by task and season rather than being uniformly high.',
      strongestPatterns: ['Motivation is likely uneven across different parts of your role.'],
      areasToWatch: ['Identify your lowest-scoring item — that’s usually the most specific, actionable thing to address.'],
      suggestedNextSteps: ['Consider whether more of your time could shift toward the parts of the job that scored highest for you.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'Strong current motivation',
      shortInterpretation: 'Your responses describe strong, largely self-driven motivation right now.',
      whatItMeans: 'You reported high agreement across genuine interest, initiative, ownership, and sense of purpose — signs generally associated with intrinsic motivation.',
      whatItDoesNotMean: 'Strong motivation now doesn’t guarantee it will stay that way automatically, and it isn’t the same as absence of stress — see the Burnout Warning Signs test if intensity is starting to feel draining.',
      strongestPatterns: ['Motivation appears to come from genuine interest and ownership, not just external pressure.'],
      areasToWatch: ['Notice if any single factor was your lowest answer — worth keeping an eye on even amid overall strong motivation.'],
      suggestedNextSteps: ['The Workplace Strengths and Job Satisfaction Check tests can help you understand what specifically is driving this, so you can look for it in future roles too.'],
    },
  ],
  whatItMeasures: 'This quiz measures your self-reported agreement with statements associated with intrinsic motivation — genuine interest, initiative, ownership, and sense of purpose in your current work.',
  whoItIsFor: 'Anyone who wants a structured snapshot of what’s currently driving (or not driving) their motivation at work. It is a self-reflection tool, not a validated organizational-psychology instrument.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Strongly Disagree") to 5 ("Strongly Agree") and summed for a total between 10 and 50. A higher score means stronger self-reported motivation — stated explicitly since some other tests on this platform use the reverse framing.',
  scientificBasis: 'Item content was written for this platform, informed by general motivation research distinguishing intrinsic drivers (interest, ownership, purpose) from purely extrinsic ones (e.g., self-determination theory), without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects a snapshot in time; motivation can shift with workload, role changes, or life circumstances.',
    'A single total score can mask very different underlying pictures across specific tasks or projects.',
  ],
  relatedTestSlugs: ['job-satisfaction-check', 'career-decision-confidence', 'workplace-strengths', 'burnout-warning-signs'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
