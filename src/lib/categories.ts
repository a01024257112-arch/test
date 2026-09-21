import type { AssessmentCategory } from './types';

export interface CategoryConfig {
  id: AssessmentCategory;
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  whatYouCanLearn: string[];
  limitations: string;
}

export const categories: CategoryConfig[] = [
  {
    id: 'mental-wellbeing', slug: 'mental-wellbeing', name: 'Mental Wellbeing',
    shortDescription: 'Screening and reflection tools for anxiety, mood, stress, and related patterns.',
    intro:
      'This category brings together validated screening instruments and evidence-informed reflection tools related to mental wellbeing — including anxiety, mood, stress, and habits like alcohol use. Some tests here are built from published, peer-reviewed clinical screening instruments; others are broader self-reflection tools. Each test page states its evidence level clearly so you always know which kind you are taking.',
    whatYouCanLearn: [
      'Whether your recent symptoms fall in a range that research associates with a higher likelihood of a diagnosable condition (for validated screening tools only).',
      'General patterns in your stress, mood, or habits worth paying attention to.',
      'Whether a conversation with a healthcare professional may be a useful next step.',
    ],
    limitations:
      'No test in this category can diagnose a medical or mental-health condition. Validated screening tools flag patterns worth a professional conversation; they do not replace one. If you are in crisis, please see the emergency resources linked on every screening result page.',
  },
  {
    id: 'personality', slug: 'personality', name: 'Personality',
    shortDescription: 'Public-domain trait measures and facet-level personality reflection tools.',
    intro:
      'This category is built primarily around the Big Five framework — the most widely replicated model of personality structure in psychological research — using public-domain items from the International Personality Item Pool (IPIP). Facet-level tests break individual traits (like assertiveness or orderliness) into more specific, focused reflections.',
    whatYouCanLearn: [
      'How you describe your own tendencies across five broad trait dimensions: Extraversion, Agreeableness, Conscientiousness, Emotional Stability, and Openness.',
      'More specific facets within a single trait, for a finer-grained picture.',
      'How your self-described traits compare across different areas of your life.',
    ],
    limitations:
      'These are self-report trait measures, not clinical personality assessments. They are not validated or appropriate for employment screening, clinical diagnosis, or other high-stakes decisions.',
  },
  {
    id: 'productivity', slug: 'productivity', name: 'Work & Productivity',
    shortDescription: 'Evidence-informed reflections on focus, work habits, and collaboration style.',
    intro:
      'These tools help you reflect on how you work: focus habits, meeting load, collaboration preferences, and decision-making style. They are original, evidence-informed self-reflection tools written with reference to published productivity and organizational-behavior research — not standardized psychometric instruments.',
    whatYouCanLearn: [
      'Patterns in how and when you tend to procrastinate or lose focus.',
      'How your work environment supports or undermines deep, focused work.',
      'Your general tendencies around feedback, leadership, and collaboration.',
    ],
    limitations:
      'These are self-reflection tools, not performance evaluations or validated occupational assessments. They describe self-reported tendencies, not objective output or skill.',
  },
  {
    id: 'relationships', slug: 'relationships', name: 'Relationships',
    shortDescription: 'Reflection tools on communication, conflict, trust, and connection.',
    intro:
      'This category covers how you tend to communicate, handle conflict, build trust, and connect with others — in romantic relationships, friendships, and beyond. These are evidence-informed self-reflection tools, written with reference to published relationship-science concepts, not standardized clinical instruments.',
    whatYouCanLearn: [
      'Your self-described communication and conflict-response tendencies.',
      'Patterns in trust, boundaries, and emotional availability.',
      'How your relationship habits differ across different relationship types.',
    ],
    limitations:
      'These tools reflect self-reported tendencies in the moment you take them, not a fixed relationship style, and are not a substitute for couples or individual therapy.',
  },
  {
    id: 'lifestyle', slug: 'lifestyle', name: 'Lifestyle',
    shortDescription: 'Sleep, digital habits, energy, and everyday routines.',
    intro:
      'This category focuses on the daily-life habits that shape how you feel: sleep, screen time, notifications, caffeine, and recovery. Most tools here are original, evidence-informed reflections; where a validated instrument exists (such as chronotype questionnaires), we only publish it once licensing and translation rights are fully verified — see the evidence label on each test.',
    whatYouCanLearn: [
      'Patterns in your sleep habits and how they compare to general sleep-hygiene guidance.',
      'How your digital habits (notifications, social media, smartphone use) may be affecting your attention and stress.',
      'General trends in your recovery and exercise consistency.',
    ],
    limitations:
      'These are self-reflection tools based on self-reported habits, not clinical sleep or health assessments. Persistent sleep or health concerns are worth discussing with a healthcare professional.',
  },
  {
    id: 'career', slug: 'career', name: 'Career & Values',
    shortDescription: 'Reflection tools on career values, motivation, and decision confidence.',
    intro:
      'These tools help you reflect on what you value in work, how satisfied and motivated you currently feel, and how confident you are in career decisions. They are evidence-informed self-reflection tools, not career-counseling assessments or aptitude tests.',
    whatYouCanLearn: [
      'What you say you value most in work right now.',
      'Your self-reported satisfaction, motivation, and readiness for change.',
      'General patterns in how you approach career decisions.',
    ],
    limitations:
      'These tools reflect self-reported preferences at one point in time, not aptitude, skill, or a guarantee of career fit. They are not a substitute for career counseling.',
  },
];

export function getCategory(id: AssessmentCategory): CategoryConfig {
  return categories.find((c) => c.id === id)!;
}
