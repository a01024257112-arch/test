import type { TestDefinition } from '../../lib/types';

/**
 * GAD-7 — Generalized Anxiety Disorder 7-item scale.
 * Spitzer RL, Kroenke K, Williams JBW, Löwe B. Arch Intern Med. 2006;166(10):1092-1097.
 * Released by Pfizer without copyright restriction, at no charge, since 2010.
 * Item wording, response scale, and scoring reproduced verbatim from the source publication.
 */
export const anxietySymptomScreening: TestDefinition = {
  id: 'mw-02',
  slug: 'anxiety-symptom-screening',
  registryId: 'mw-02',
  title: 'Anxiety Symptom Screening',
  oneLiner: 'A validated 7-item screening tool for generalized anxiety symptoms (GAD-7).',
  estimatedMinutes: [2, 3],
  category: 'mental-wellbeing',
  evidenceLevel: 'A',
  answerScale: [
    { value: 0, label: 'Not at all' },
    { value: 1, label: 'Several days' },
    { value: 2, label: 'More than half the days' },
    { value: 3, label: 'Nearly every day' },
  ],
  questions: [
    { id: 'q1', prompt: 'Feeling nervous, anxious, or on edge' },
    { id: 'q2', prompt: 'Not being able to stop or control worrying' },
    { id: 'q3', prompt: 'Worrying too much about different things' },
    { id: 'q4', prompt: 'Trouble relaxing' },
    { id: 'q5', prompt: 'Being so restless that it is hard to sit still' },
    { id: 'q6', prompt: 'Becoming easily annoyed or irritable' },
    { id: 'q7', prompt: 'Feeling afraid, as if something awful might happen' },
  ],
  scoring: { method: 'sum', minPossible: 0, maxPossible: 21 },
  resultBands: [
    {
      id: 'minimal', minScore: 0, maxScore: 4, label: 'Minimal anxiety symptom signals',
      shortInterpretation: 'Your responses show a pattern of minimal anxiety-related symptoms over the past two weeks.',
      whatItMeans: 'Your total score falls in the range the GAD-7 literature labels "minimal." Most people scoring in this range report few or no interfering anxiety symptoms in the prior two weeks.',
      whatItDoesNotMean: 'This does not mean you are free of stress or worry, and it does not rule out an anxiety disorder — screening tools capture a two-week snapshot, not a full clinical picture.',
      strongestPatterns: ['Low frequency of worry-related symptoms in the past two weeks.', 'Low interference from restlessness or irritability.'],
      areasToWatch: ['If your circumstances change or symptoms increase, consider retaking the screening in a few weeks.'],
      suggestedNextSteps: ['No action is typically needed based on this result alone.', 'General stress-management habits (sleep, movement, boundaries) remain worthwhile regardless of score.'],
    },
    {
      id: 'mild', minScore: 5, maxScore: 9, label: 'Mild anxiety symptom signals',
      shortInterpretation: 'Your responses show a pattern consistent with mild anxiety-related symptoms.',
      whatItMeans: 'Your total score falls in the "mild" range. This suggests some anxiety-related symptoms were present on several days over the past two weeks.',
      whatItDoesNotMean: 'A mild score is not a diagnosis of an anxiety disorder. Mild, temporary anxiety is common and often situational.',
      strongestPatterns: ['Some worry or nervousness present on multiple days.', 'Symptoms are present but not yet at a level associated with high clinical concern in the original validation study.'],
      areasToWatch: ['Notice whether specific situations (work, sleep, relationships) consistently trigger these feelings.', 'Track whether the pattern persists or worsens over the next few weeks.'],
      suggestedNextSteps: ['Consider stress-reduction practices such as regular exercise, sleep hygiene, and structured downtime.', 'If symptoms persist beyond a few weeks or begin interfering with daily life, consider discussing them with a healthcare professional.'],
    },
    {
      id: 'moderate', minScore: 10, maxScore: 14, label: 'Moderate anxiety symptom signals',
      shortInterpretation: 'Your responses show a pattern consistent with moderate anxiety-related symptoms.',
      whatItMeans: 'Your total score is at or above 10, the cut point the original validation study (Spitzer et al., 2006) found reasonably sensitive and specific for identifying generalized anxiety disorder in primary-care settings (89% sensitivity, 82% specificity against a structured clinical interview).',
      whatItDoesNotMean: 'This is not a diagnosis. The original study measured how well this cut point identified people who, on further clinical evaluation, met criteria for an anxiety disorder — it is a probability signal, not a determination.',
      strongestPatterns: ['Anxiety-related symptoms present on more than half the days across multiple items.', 'Pattern consistent with what standardized research associates with a higher likelihood of a diagnosable anxiety condition.'],
      areasToWatch: ['Sleep disruption, difficulty concentrating, and physical restlessness are common companions of this symptom level.', 'Consider how these symptoms may be affecting work, relationships, or daily functioning.'],
      suggestedNextSteps: ['A conversation with a primary-care provider or mental-health professional is a reasonable next step to get a full evaluation.', 'Bringing your results to that conversation can help focus the discussion.'],
      professionalSupportNote: 'A score at or above 10 is the range where the original research recommends further clinical evaluation.',
    },
    {
      id: 'severe', minScore: 15, maxScore: 21, label: 'Severe anxiety symptom signals',
      shortInterpretation: 'Your responses show a pattern consistent with severe anxiety-related symptoms.',
      whatItMeans: 'Your total score is in the range the GAD-7 literature labels "severe." This indicates a high frequency and breadth of anxiety-related symptoms in the past two weeks.',
      whatItDoesNotMean: 'This is not a diagnosis, and it is not a measure of your worth, character, or ability to cope — it reflects how frequently specific symptoms occurred recently.',
      strongestPatterns: ['Anxiety-related symptoms present on nearly every day across most items.', 'This level is strongly associated, in research populations, with clinically significant anxiety.'],
      areasToWatch: ['Consider whether these symptoms are affecting sleep, work, relationships, or your ability to carry out daily activities.'],
      suggestedNextSteps: ['A timely conversation with a healthcare professional is strongly recommended.', 'If you are having thoughts of harming yourself, seek immediate help — see the crisis resources on this page.'],
      professionalSupportNote: 'Scores in this range warrant a prompt conversation with a qualified healthcare professional.',
    },
  ],
  whatItMeasures: 'The GAD-7 measures the frequency of seven core symptoms of generalized anxiety disorder — such as excessive worry, restlessness, and irritability — over the previous two weeks.',
  whoItIsFor: 'Adults who want a quick, standardized snapshot of anxiety-related symptoms. It was validated in primary-care and general population samples and is widely used as a first-step screening tool, not a specialist diagnostic instrument.',
  howScoringWorks: 'Each of the 7 items is scored from 0 ("Not at all") to 3 ("Nearly every day"), and the item scores are summed for a total between 0 and 21. Established research cut points (5 / 10 / 15) divide the range into minimal, mild, moderate, and severe symptom bands.',
  scientificBasis: 'The GAD-7 was developed and validated by Spitzer, Kroenke, Williams, and Löwe (2006) against structured psychiatric interviews in primary-care patients. It remains one of the most widely used and cited anxiety screening instruments in both clinical and research settings.',
  limitations: [
    'A screening tool, not a diagnostic instrument.',
    'Validated primarily in primary-care populations; results may generalize differently in other contexts.',
    'Captures a two-week snapshot and can be influenced by recent life events.',
    'Does not distinguish between generalized anxiety and other conditions with overlapping symptoms (e.g., depression, other anxiety disorders).',
  ],
  relatedTestSlugs: ['perceived-stress-check', 'burnout-warning-signs', 'sleep-hygiene-check', 'social-anxiety-self-check'],
  relatedGuideSlugs: ['screening-vs-diagnosis', 'how-online-self-assessments-work'],
  crisisNoteRequired: true,
};
