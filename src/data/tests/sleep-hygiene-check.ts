import type { TestDefinition } from '../../lib/types';

/**
 * Sleep Hygiene Check — original, evidence-informed self-reflection quiz.
 * Items are phrased positively (good-habit frequency), so a HIGHER score
 * here means more consistent healthy sleep habits — the inverse framing
 * from most other tests on this platform. This is stated explicitly on
 * the landing and results pages to avoid confusion.
 */
export const sleepHygieneCheck: TestDefinition = {
  id: 'li-44',
  slug: 'sleep-hygiene-check',
  registryId: 'li-44',
  title: 'Sleep Hygiene Check',
  oneLiner: 'An evidence-informed self-reflection quiz on habits that support (or undermine) good sleep.',
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
    { id: 'q1', prompt: 'I go to bed around the same time most nights.' },
    { id: 'q2', prompt: 'I wake up around the same time most mornings, including weekends.' },
    { id: 'q3', prompt: 'I avoid caffeine within about 6 hours of bedtime.' },
    { id: 'q4', prompt: 'I keep my bedroom dark, quiet, and cool enough for sleep.' },
    { id: 'q5', prompt: 'I wind down with a calming routine before bed rather than going straight from activity to trying to sleep.' },
    { id: 'q6', prompt: 'I avoid large meals or alcohol close to bedtime.' },
    { id: 'q7', prompt: 'I get some natural daylight exposure during the day.' },
    { id: 'q8', prompt: 'I avoid long naps (over 30 minutes) or napping late in the day.' },
    { id: 'q9', prompt: 'I get some physical activity during the day, not right before bed.' },
    { id: 'q10', prompt: 'If I can’t fall asleep after a while, I get up and do something calm rather than lying there frustrated.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'Room to build stronger sleep habits',
      shortInterpretation: 'Your responses suggest several common sleep-hygiene habits aren’t yet part of your routine.',
      whatItMeans: 'You reported infrequent use of habits like a consistent schedule, a wind-down routine, and a sleep-friendly environment. These are exactly the areas general sleep-hygiene guidance focuses on first.',
      whatItDoesNotMean: 'This is not a diagnosis of a sleep disorder — this quiz asks about habits, not symptoms like difficulty falling asleep or daytime fatigue. If those are present, that’s worth discussing with a healthcare professional regardless of this score.',
      strongestPatterns: ['Bedtime and wake time likely vary night to night.', 'Pre-bed routine may go straight from activity or screens into trying to sleep.'],
      areasToWatch: ['A consistent wake time (item 2) is often the single highest-leverage habit — even more than bedtime consistency.'],
      suggestedNextSteps: ['Pick one habit — a consistent wake time is a common starting point — rather than trying to change everything at once.', 'The Sleep Debt Check and Caffeine Timing Habits tests look at two related pieces in more depth.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Mixed sleep habits',
      shortInterpretation: 'Your responses describe a mix — some solid sleep-supporting habits, alongside some gaps.',
      whatItMeans: 'You reported a middle range of habit consistency. Most people have some sleep-hygiene habits dialed in and others less so.',
      whatItDoesNotMean: 'This quiz measures habits, not sleep quality or how rested you feel — it’s possible to have decent habits and still sleep poorly for other reasons, or vice versa.',
      strongestPatterns: ['Likely inconsistent on at least one or two of: schedule consistency, wind-down routine, or environment.'],
      areasToWatch: ['Identify your one or two lowest-scoring items — those are usually the highest-leverage places to focus.'],
      suggestedNextSteps: ['Strengthen one habit at a time rather than all ten — schedule consistency and a wind-down routine tend to have the broadest impact.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'Strong sleep hygiene habits',
      shortInterpretation: 'Your responses describe consistent use of habits that generally support good sleep.',
      whatItMeans: 'You reported frequent use of a consistent schedule, sleep-friendly environment, and healthy wind-down habits. These are the habits general sleep guidance most consistently recommends.',
      whatItDoesNotMean: 'Strong habits don’t guarantee perfect sleep — sleep can still be disrupted by stress, health conditions, or circumstances outside your control. If you have good habits but still struggle to sleep well, that’s worth discussing with a healthcare professional.',
      strongestPatterns: ['Consistent schedule and environment.', 'A routine that supports winding down before bed.'],
      areasToWatch: ['Even strong habits are worth revisiting after a schedule change (new job, travel, time zone shifts).'],
      suggestedNextSteps: ['If you’re curious about accumulated short sleep rather than habits specifically, the Sleep Debt Check looks at that directly.'],
    },
  ],
  whatItMeasures: 'This quiz measures how consistently you use habits generally recommended for good sleep — schedule regularity, environment, wind-down routine, and daytime habits like light exposure and napping.',
  whoItIsFor: 'Anyone who wants a structured check-in on their sleep habits. It is a self-reflection tool on habits, not a sleep-quality or sleep-disorder assessment.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Never") to 5 ("Very Often") and summed for a total between 10 and 50. Unlike most other tests on this platform, items are phrased as healthy habits, so a higher score here means more consistent sleep-supporting habits, not a warning sign — this is stated clearly on the results page to avoid confusion.',
  scientificBasis: 'Item content was written for this platform, informed by general sleep-hygiene guidance widely published by sleep-medicine and public-health sources (consistent schedule, environment, caffeine/alcohol timing, light exposure, and pre-sleep wind-down), without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Measures habits, not sleep quality, sleep duration, or symptoms of a sleep disorder.',
    'Persistent sleep difficulty despite good habits is worth discussing with a healthcare professional — this quiz cannot rule out an underlying sleep or health condition.',
  ],
  relatedTestSlugs: ['sleep-debt-check', 'caffeine-timing-habits', 'digital-wellbeing-check', 'chronotype-preference'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
