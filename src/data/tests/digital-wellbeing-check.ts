import type { TestDefinition } from '../../lib/types';

/**
 * Digital Wellbeing Check — original, evidence-informed self-reflection
 * quiz on smartphone/social-media habits and their effect on daily life.
 */
export const digitalWellbeingCheck: TestDefinition = {
  id: 'li-46',
  slug: 'digital-wellbeing-check',
  registryId: 'li-46',
  title: 'Digital Wellbeing Check',
  oneLiner: 'An evidence-informed self-reflection quiz on how your device habits affect your daily life.',
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
    { id: 'q1', prompt: 'I check my phone within a few minutes of waking up.' },
    { id: 'q2', prompt: 'I pick up my phone without a specific reason, out of habit.' },
    { id: 'q3', prompt: 'I lose track of time while scrolling and end up spending longer than I intended.' },
    { id: 'q4', prompt: 'I feel a pull to check my phone during conversations, meals, or time with others.' },
    { id: 'q5', prompt: 'Notifications interrupt tasks I’m in the middle of.' },
    { id: 'q6', prompt: 'I feel anxious or on edge when I don’t have my phone nearby.' },
    { id: 'q7', prompt: 'I use my phone in bed shortly before trying to sleep.' },
    { id: 'q8', prompt: 'I’ve tried to cut back on screen time and found it harder than expected.' },
    { id: 'q9', prompt: 'I compare my life to what I see on social media in a way that affects my mood.' },
    { id: 'q10', prompt: 'I reach for my phone during small gaps (waiting in line, elevator rides) rather than just waiting.' },
    { id: 'q11', prompt: 'My actual screen time surprises me when I check it.' },
    { id: 'q12', prompt: 'I’ve missed something in the physical world around me because I was looking at my phone.' },
  ],
  scoring: { method: 'sum', minPossible: 12, maxPossible: 60 },
  resultBands: [
    {
      id: 'lower', minScore: 12, maxScore: 27, label: 'Few signs of digital overuse',
      shortInterpretation: 'Your responses show few signs of your device habits crowding out other parts of daily life.',
      whatItMeans: 'You reported infrequent habitual checking, notification interruption, and difficulty disengaging. Your relationship with your devices doesn’t show the pattern this quiz was designed to flag.',
      whatItDoesNotMean: 'This doesn’t mean screen time is at zero or that it can never become an issue — habits can shift, especially around stressful periods.',
      strongestPatterns: ['Device use appears mostly intentional rather than habitual or automatic.', 'Low interference with sleep, conversations, or focus.'],
      areasToWatch: ['If this shifts, the Notification Stress and Smartphone Habit Check tests dig deeper into specific pieces of this.'],
      suggestedNextSteps: ['No specific action is indicated by this result alone.'],
    },
    {
      id: 'moderate', minScore: 28, maxScore: 42, label: 'Some signs of digital overuse',
      shortInterpretation: 'Your responses describe a mixed pattern — some habitual or automatic phone use, alongside more intentional use.',
      whatItMeans: 'You reported a middle range across habitual checking, notification interruption, and time loss. This is an extremely common pattern — most smartphone-owning adults show some of these signs some of the time.',
      whatItDoesNotMean: 'A moderate score doesn’t mean you have "an addiction" — this is a self-reflection tool, not a clinical instrument, and habitual phone use exists on a wide spectrum.',
      strongestPatterns: ['Certain moments (waking up, gaps in the day, before bed) seem to be the biggest habit triggers.'],
      areasToWatch: ['Notice which specific moment from the quiz (morning, bedtime, social situations) is your strongest pattern — that’s usually the highest-leverage place to start.'],
      suggestedNextSteps: ['Try one specific change (phone outside the bedroom, notifications off during a set block) rather than an overall time limit, which tends to be harder to sustain.', 'The Notification Stress and Social Media Habit Check tests can help pinpoint which part of your digital habits matters most.'],
    },
    {
      id: 'higher', minScore: 43, maxScore: 60, label: 'Multiple signs of digital overuse',
      shortInterpretation: 'Your responses show frequent signs of your device habits crowding out sleep, focus, or time with others.',
      whatItMeans: 'You reported frequent habitual checking, difficulty disengaging, and interference with sleep or in-person moments. This pattern is worth paying attention to, particularly around sleep (item 7) and social presence (items 4, 12).',
      whatItDoesNotMean: 'This is not a diagnosis of "phone addiction" — that is not a term this quiz uses or claims to assess — it describes a self-reported behavioral pattern, not a clinical condition.',
      strongestPatterns: ['A strong habitual pull to check the phone, sometimes without a specific reason.', 'Some difficulty disengaging once scrolling starts.'],
      areasToWatch: ['Phone use close to bedtime (item 7) can affect sleep quality independent of screen light itself, through mental stimulation and delayed wind-down.'],
      suggestedNextSteps: ['Consider a specific, concrete change — like charging your phone outside the bedroom — rather than a vague goal to "use it less."', 'The Sleep Hygiene Check and Notification Stress tests target two of the areas most affected by this pattern.', 'If this is affecting your mood, relationships, or daily functioning significantly, it’s worth reflecting on with a friend, coach, or professional.'],
    },
  ],
  whatItMeasures: 'This quiz measures how often you notice habitual or automatic phone use, difficulty disengaging, and interference with sleep, focus, or in-person interaction.',
  whoItIsFor: 'Anyone curious about their smartphone and social-media habits. It is a self-reflection tool, not a clinical instrument, and does not diagnose "phone addiction" or any related condition.',
  howScoringWorks: 'Each of the 12 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 12 and 60, divided into three descriptive bands.',
  scientificBasis: 'Item content was written for this platform, informed by general research on habitual technology use, notification interruption, and sleep interference from pre-bed screen use, without reproducing any specific copyrighted instrument or making a clinical addiction claim.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects self-reported frequency, not measured screen time or objective behavior.',
    'Does not diagnose problematic technology use as a clinical condition.',
  ],
  relatedTestSlugs: ['smartphone-habit-check', 'notification-stress', 'sleep-hygiene-check', 'social-media-habit-check'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
