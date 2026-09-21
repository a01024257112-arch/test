import type { TestDefinition } from '../../lib/types';

/**
 * Burnout Warning Signs — original, evidence-informed self-reflection quiz.
 * Item content is original, written with reference to the three core
 * burnout dimensions described in the general occupational-health
 * literature (exhaustion, cynicism/detachment, reduced sense of
 * accomplishment) without reproducing any specific copyrighted instrument.
 */
export const burnoutWarningSigns: TestDefinition = {
  id: 'mw-10',
  slug: 'burnout-warning-signs',
  registryId: 'mw-10',
  title: 'Burnout Warning Signs',
  oneLiner: 'An evidence-informed self-reflection quiz on exhaustion, detachment, and motivation at work.',
  estimatedMinutes: [3, 4],
  category: 'mental-wellbeing',
  evidenceLevel: 'C',
  answerScale: [
    { value: 1, label: 'Never' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Very Often' },
  ],
  questions: [
    { id: 'q1', prompt: 'I feel emotionally drained by the end of the workday.' },
    { id: 'q2', prompt: 'I wake up already feeling tired about the day of work ahead.' },
    { id: 'q3', prompt: 'I feel more cynical or negative about my work than I used to.' },
    { id: 'q4', prompt: 'I find myself mentally distancing from colleagues, clients, or the work itself.' },
    { id: 'q5', prompt: 'Small work problems feel more irritating or overwhelming than they used to.' },
    { id: 'q6', prompt: 'I doubt whether the work I do actually matters or makes a difference.' },
    { id: 'q7', prompt: 'I feel less effective or capable at my job than I used to.' },
    { id: 'q8', prompt: 'I need increasing amounts of willpower just to start routine tasks.' },
    { id: 'q9', prompt: 'I use days off to recover from work rather than to actually rest or enjoy myself.' },
    { id: 'q10', prompt: 'I have physical signs of strain (headaches, tension, sleep trouble) that seem connected to work.' },
    { id: 'q11', prompt: 'I feel like I have little control over the demands placed on me at work.' },
    { id: 'q12', prompt: 'I think about quitting or escaping my job, even if I don’t act on it.' },
  ],
  scoring: { method: 'sum', minPossible: 12, maxPossible: 60 },
  resultBands: [
    {
      id: 'lower', minScore: 12, maxScore: 27, label: 'Few burnout warning signs',
      shortInterpretation: 'Your responses show few of the exhaustion, detachment, or motivation signs commonly associated with burnout.',
      whatItMeans: 'You reported low frequency across exhaustion, cynicism, and reduced-effectiveness items. This suggests your current relationship with work isn’t showing the pattern research associates with burnout.',
      whatItDoesNotMean: 'This doesn’t mean work is stress-free, and it isn’t a guarantee against burnout developing later — it reflects how things feel right now, not a fixed state.',
      strongestPatterns: ['Low emotional exhaustion by end of day.', 'Sense of effectiveness and meaning in the work is largely intact.'],
      areasToWatch: ['Notice if this shifts after a change in workload, role, or team.'],
      suggestedNextSteps: ['No specific action is indicated by this result alone — general habits that protect against burnout (real recovery time, workload boundaries) remain worth maintaining.'],
    },
    {
      id: 'moderate', minScore: 28, maxScore: 42, label: 'Some burnout warning signs',
      shortInterpretation: 'Your responses show a moderate level of exhaustion, detachment, or motivation strain.',
      whatItMeans: 'You reported a middle range across the three areas this quiz asks about — exhaustion, cynicism/detachment, and reduced sense of effectiveness. Occupational-health research describes burnout as building gradually along exactly these three dimensions, so a moderate pattern is worth paying attention to before it deepens.',
      whatItDoesNotMean: 'A moderate score is not a diagnosis and does not mean you are failing at your job — burnout research treats it as a response to sustained job conditions (workload, control, fairness, values fit), not a personal weakness.',
      strongestPatterns: ['Some days feel notably more draining than others.', 'Early signs of distancing from work or colleagues.'],
      areasToWatch: ['Notice which specific dimension (exhaustion, detachment, or effectiveness) is strongest for you — they often call for different responses.', 'Physical symptoms (item 10) are worth tracking separately from mood.'],
      suggestedNextSteps: ['Look at whether recovery time (evenings, weekends, days off) is actually restorative or just "less work."', 'Consider whether workload, autonomy, or a mismatch in values is the biggest driver for you — the source often points to the fix.', 'The Work Boundary Check and Focus Environment Test explore related territory.'],
    },
    {
      id: 'higher', minScore: 43, maxScore: 60, label: 'Multiple burnout warning signs',
      shortInterpretation: 'Your responses show a pattern across exhaustion, detachment, and motivation that lines up with several established burnout warning signs.',
      whatItMeans: 'You reported frequent exhaustion, cynicism or detachment, and reduced sense of effectiveness — the three dimensions that occupational-health research consistently uses to describe burnout. This is a self-reported pattern, not a workplace or medical diagnosis, but it is one worth taking seriously.',
      whatItDoesNotMean: 'This is not a mental-health diagnosis, and it does not mean you are inadequate at your job — research frames burnout primarily as a response to sustained job conditions rather than an individual failing.',
      strongestPatterns: ['Exhaustion that doesn’t fully resolve with normal rest.', 'Growing emotional distance from work that used to feel meaningful.'],
      areasToWatch: ['Physical symptoms connected to work stress (item 10) are worth discussing with a healthcare professional if they persist.', 'Thoughts of escaping or quitting (item 12), even without acting on them, are a signal worth taking seriously rather than dismissing.'],
      suggestedNextSteps: ['Consider what would need to change structurally (workload, control, support, fairness, values fit) rather than only what you personally could push through.', 'A conversation with a manager, HR, or a mental-health professional can help separate what’s workable from what may require a bigger change.', 'If exhaustion or low mood is affecting your wellbeing broadly, not just at work, the Anxiety Symptom Screening or a conversation with a healthcare professional may be a useful next step.'],
      professionalSupportNote: 'If exhaustion, detachment, or low mood is persistent and affecting your wellbeing beyond work, consider speaking with a healthcare professional.',
    },
  ],
  whatItMeasures: 'This quiz measures how often you notice patterns of emotional exhaustion, cynicism or detachment from work, and reduced sense of effectiveness — the three dimensions occupational-health research most consistently associates with burnout.',
  whoItIsFor: 'Anyone who wants a structured way to check in on their relationship with work. It is a self-reflection tool, not a clinical or occupational diagnostic instrument.',
  howScoringWorks: 'Each of the 12 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 12 and 60. The result is divided into three descriptive bands based on where your total falls — these are informational bands, not clinical cutoffs.',
  scientificBasis: 'Item content was written for this platform and is informed by, but does not reproduce, the general occupational-health literature describing burnout along three dimensions: emotional exhaustion, cynicism/depersonalization, and reduced sense of personal accomplishment. It is labeled an evidence-informed self-reflection assessment, not a validated psychometric scale.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects self-reported frequency over a general recent period, not a clinical or occupational assessment.',
    'Cannot distinguish burnout from overlapping conditions like depression — persistent symptoms are worth discussing with a professional regardless of this score.',
  ],
  relatedTestSlugs: ['procrastination-tendencies', 'work-boundary-check', 'anxiety-symptom-screening', 'deep-work-readiness'],
  relatedGuideSlugs: ['how-online-self-assessments-work', 'screening-vs-diagnosis'],
  crisisNoteRequired: false,
};
