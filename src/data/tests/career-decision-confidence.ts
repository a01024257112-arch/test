import type { TestDefinition } from '../../lib/types';

/**
 * Career Decision Confidence — original, evidence-informed self-reflection
 * quiz. Positively framed: a HIGHER score means more self-reported
 * confidence — stated explicitly to avoid confusion.
 */
export const careerDecisionConfidence: TestDefinition = {
  id: 'ca-59',
  slug: 'career-decision-confidence',
  registryId: 'ca-59',
  title: 'Career Decision Confidence',
  oneLiner: 'An evidence-informed self-reflection quiz on how confident you feel making career decisions right now.',
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
    { id: 'q1', prompt: 'I have a reasonably clear sense of what I want from my career right now.' },
    { id: 'q2', prompt: 'I know what information I’d need to make a good decision about a career move.' },
    { id: 'q3', prompt: 'I trust myself to make a sound career decision, even without complete certainty.' },
    { id: 'q4', prompt: 'I can name specific factors (values, skills, constraints) that matter most in my decision.' },
    { id: 'q5', prompt: 'I don’t feel paralyzed by the number of possible directions I could take.' },
    { id: 'q6', prompt: 'I’ve sought out relevant information or people’s perspectives when facing a career decision.' },
    { id: 'q7', prompt: 'I feel okay making a decision without guaranteed certainty about the outcome.' },
    { id: 'q8', prompt: 'I can imagine committing to a direction without it feeling like a permanent, irreversible choice.' },
    { id: 'q9', prompt: 'I’ve thought concretely about what a next step would actually look like.' },
    { id: 'q10', prompt: 'I feel supported by people I can talk to about career decisions.' },
  ],
  scoring: { method: 'sum', minPossible: 10, maxPossible: 50 },
  resultBands: [
    {
      id: 'lower', minScore: 10, maxScore: 23, label: 'Lower current confidence',
      shortInterpretation: 'Your responses describe lower confidence in making career decisions right now.',
      whatItMeans: 'You reported lower agreement across clarity, information-gathering, and comfort with uncertainty. This is a very common feeling, especially during a transition or after a setback.',
      whatItDoesNotMean: 'This is not a measure of your capability or potential — decision confidence is a skill and a state, not a fixed trait, and it’s especially low when genuinely facing a hard, high-stakes choice.',
      strongestPatterns: ['Uncertainty about direction (item 1) or information (item 2) may be the bigger driver, more than fear of the decision itself.'],
      areasToWatch: ['Notice whether your lowest-scoring item is about clarity (what you want) or about process (how to decide) — they call for different next steps.'],
      suggestedNextSteps: ['The Career Values and Job Satisfaction Check tests can help build the clarity piece before tackling the decision itself.', 'Talking through the decision with someone you trust (item 10) is one of the most consistently helpful steps, even before you have full clarity.'],
    },
    {
      id: 'moderate', minScore: 24, maxScore: 36, label: 'Mixed confidence',
      shortInterpretation: 'Your responses describe a mixed picture — confident in some parts of the decision process, less so in others.',
      whatItMeans: 'You reported a middle range overall. Many people feel clear about some pieces (like their values) but uncertain about others (like the actual next step).',
      whatItDoesNotMean: 'A moderate score doesn’t mean you’re indecisive — most real career decisions involve genuine uncertainty that no amount of confidence fully resolves.',
      strongestPatterns: ['Confidence likely varies across the clarity, information, and action-taking pieces of decision-making.'],
      areasToWatch: ['Identify your lowest-scoring item — that’s usually the most specific, actionable thing to address.'],
      suggestedNextSteps: ['Consider whether your uncertainty is really about the decision, or about taking the first concrete step (item 9) — those often feel similar but need different responses.'],
    },
    {
      id: 'higher', minScore: 37, maxScore: 50, label: 'Higher current confidence',
      shortInterpretation: 'Your responses describe strong, self-reported confidence in your current career decision-making.',
      whatItMeans: 'You reported high agreement across clarity, information-gathering, comfort with uncertainty, and concrete next steps.',
      whatItDoesNotMean: 'High confidence doesn’t guarantee a particular outcome — it reflects your current sense of clarity and process, not a prediction of how things will turn out.',
      strongestPatterns: ['You appear to have both clarity about what matters and comfort taking action without full certainty.'],
      areasToWatch: ['Even high confidence is worth revisiting periodically as circumstances or priorities shift.'],
      suggestedNextSteps: ['The Job Change Readiness test can help translate this confidence into a concrete assessment of timing.'],
    },
  ],
  whatItMeasures: 'This quiz measures your self-reported confidence across several pieces of career decision-making: clarity about what you want, information-gathering, comfort with uncertainty, and readiness to take a concrete next step.',
  whoItIsFor: 'Anyone currently facing or thinking about a career decision. It is a self-reflection tool, not career counseling or a validated decision-making instrument.',
  howScoringWorks: 'Each of the 10 items is rated from 1 ("Strongly Disagree") to 5 ("Strongly Agree") and summed for a total between 10 and 50. A higher score means more self-reported confidence — stated explicitly since some other tests on this platform use the reverse framing.',
  scientificBasis: 'Item content was written for this platform, informed by general career-development research on decision-making self-efficacy and its components (clarity, information, comfort with uncertainty, action-orientation), without reproducing any specific copyrighted instrument.',
  limitations: [
    'An original tool, not a peer-reviewed or independently validated psychometric instrument.',
    'Reflects a snapshot in time; confidence can shift significantly as a decision unfolds.',
    'Does not assess the quality or suitability of any specific career option — only self-reported confidence in the decision process.',
  ],
  relatedTestSlugs: ['job-change-readiness', 'career-values', 'work-motivation', 'job-satisfaction-check'],
  relatedGuideSlugs: ['how-online-self-assessments-work'],
  crisisNoteRequired: false,
};
