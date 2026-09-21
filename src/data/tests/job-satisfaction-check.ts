import type { TestDefinition } from '../../lib/types';

/**
 * Job Satisfaction Check — original, evidence-informed self-reflection
 * quiz. Items are phrased positively, so a HIGHER score means higher
 * self-reported satisfaction — stated explicitly to avoid confusion.
 */
export const jobSatisfactionCheck: TestDefinition = {
  id: 'ca-54',
  slug: 'job-satisfaction-check',
  registryId: 'ca-54',
  title: 'Job Satisfaction Check',
  oneLiner: 'An evidence-informed self-reflection quiz on how satisfied you currently feel in your job.',
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
    { id: 'q1', prompt: 'Overall, I feel satisfied with my current job.' },
    { id: 'q2', prompt: 'I feel like my work is a good fit for my skills.' },
    { id: 'q3', prompt: 'I feel recognized for the work I do.' },
    { id: 'q4', prompt: 'I have enough autonomy in how I do my work.' },
    { id: 'q5', prompt: 'I feel fairly compensated for the work I do.' },
    { id: 'q6', prompt: 'I get along well with the people I work with most closely.' },
    { id: 'q7', prompt: 'I see a path for growth or development in my current role.' },
    { id: 'q8', prompt: 'I feel like my work aligns with what matters to me.' },
    { id: 'q9', prompt: 'I look forward to most workdays, not just the weekend.' },
    { id: 'q10', prompt: 'I would recommend my workplace to someone I care about.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'Lower current satisfaction',
      shortInterpretation: 'Your responses describe lower satisfaction with several aspects of your current job.',
      whatItMeans: 'You reported lower agreement across fit, recognition, autonomy, compensation, and alignment with what matters to you. This is a snapshot of how things feel right now, across several distinct factors.',
      whatItDoesNotMean: 'This is not a verdict on your career or a signal you must make a change immediately — it’s useful information about which specific factors are weighing on you most.',
      strongestPatterns: ['Dissatisfaction likely spans more than one factor — worth identifying which ones specifically.'],
      areasToWatch: ['Look back at your individual answers: a low score on "growth path" or "compensation" points to a very different next step than a low score on "fit" or "alignment with values."'],
      suggestedNextSteps: ['The Job Change Readiness and Career Values tests can help clarify whether the issue is this specific role, or a broader mismatch worth addressing directly first.', 'Consider whether a conversation with your manager about a specific factor (workload, growth, recognition) is possible before assuming a bigger change is needed.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Mixed satisfaction',
      shortInterpretation: 'Your responses describe a mixed picture — genuinely positive in some areas, weaker in others.',
      whatItMeans: 'You reported a middle range overall, which usually means some factors (like relationships with colleagues) are working well while others (like growth path or compensation) are not.',
      whatItDoesNotMean: 'A moderate score doesn’t mean you’re "meh" about your job in a general sense — it likely means specific, identifiable factors are pulling in different directions.',
      strongestPatterns: ['Satisfaction is likely uneven across factors rather than uniformly moderate.'],
      areasToWatch: ['Identify your single lowest-scoring item — that’s usually the most specific, actionable thing to address.'],
      suggestedNextSteps: ['Consider whether your lowest-scoring factor is something that could realistically change in your current role, or whether it points to a longer-term mismatch.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'Higher current satisfaction',
      shortInterpretation: 'Your responses describe strong satisfaction across most aspects of your current job.',
      whatItMeans: 'You reported high agreement across fit, recognition, autonomy, compensation, relationships, and alignment with what matters to you.',
      whatItDoesNotMean: 'High satisfaction now doesn’t mean it will stay that way automatically — circumstances, roles, and priorities change over time.',
      strongestPatterns: ['Satisfaction appears broad-based rather than resting on just one factor.'],
      areasToWatch: ['Notice if any single factor (even one) was your lowest answer — worth keeping an eye on even amid overall satisfaction.'],
      suggestedNextSteps: ['The Workplace Strengths and Work Motivation tests can help you understand what’s driving this satisfaction, so you can look for it again in future roles.'],
    },
  ],
  whatItMeasures: 'This quiz measures your self-reported agreement across several distinct factors commonly linked to job satisfaction: fit, recognition, autonomy, compensation, relationships, growth, and values alignment.',
  whoItIsFor: 'Anyone who wants a structured snapshot of how satisfied they currently feel at work. It is a self-reflection tool, not a workplace climate survey or a validated organizational-psychology instrument.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Strongly Disagree") to 5 ("Strongly Agree") and summed for a total between 10 and 50. A higher score means higher self-reported satisfaction — stated explicitly since some other tests on this platform use the reverse framing.',
  scientificBasis: 'Item content was written for this platform, informed by general organizational-psychology research identifying common drivers of job satisfaction (fit, autonomy, recognition, compensation, relationships, growth, and values alignment), without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects a snapshot in time — satisfaction can shift with workload, team changes, or life circumstances.',
    'A single total score can mask very different underlying pictures — always worth reviewing which specific factors scored lowest.',
  ],
  relatedTestSlugs: ['job-change-readiness', 'career-values', 'work-motivation', 'burnout-warning-signs'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
