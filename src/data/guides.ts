export interface Guide {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  relatedTestSlugs: string[];
  answer: string;
  bodyHtml: string;
}

export const guides: Guide[] = [
  {
    slug: 'how-online-self-assessments-work',
    title: 'How Online Self-Assessments Work',
    description: 'A plain explanation of how self-report questionnaires are scored, what "evidence level" means, and what any online test can and cannot tell you.',
    lastUpdated: '2026-09-21',
    relatedTestSlugs: ['anxiety-symptom-screening', 'big-five-personality-short', 'procrastination-tendencies'],
    answer: 'An online self-assessment asks you a fixed set of questions, converts your answers to numbers using a defined scoring rule, and compares your total to descriptive ranges. It reflects how you described yourself at one point in time — it does not observe your behavior or diagnose anything on its own.',
    bodyHtml: `
      <h2>How scoring actually works</h2>
      <p>Almost every self-assessment on this site works the same basic way: each answer option is assigned a number (for example, "Never" = 1 through "Very Often" = 5), your numbers are summed or averaged, and the total is placed into a range that has a written description attached to it. That's the entire mechanism — there is no hidden analysis happening.</p>
      <p>What differs between tests is <strong>where those ranges and descriptions come from</strong>. That's exactly what our evidence-level labels communicate:</p>
      <ul>
        <li><strong>Validated screening tool</strong> — the questions, scoring, and score ranges come from a specific published, peer-reviewed instrument, validated against clinical outcomes.</li>
        <li><strong>Public-domain psychological scale</strong> — the questions come from an established, publicly available research instrument (like the IPIP personality item pool), though the descriptive ranges may be written editorially.</li>
        <li><strong>Evidence-informed self-assessment</strong> — original questions written with reference to published research concepts, but not themselves a peer-reviewed instrument.</li>
        <li><strong>Entertainment quiz</strong> — for fun, not evidence-based.</li>
      </ul>
      <h2>What a score can and can't tell you</h2>
      <p>A validated screening tool's score is a probability signal, not a verdict — it tells you how similar your recent self-reported symptoms are to those of people who, in a research study, were later found (via full clinical evaluation) to meet criteria for a condition. It is one data point, not a full picture.</p>
      <p>An evidence-informed or entertainment quiz's score is best read as a structured way to reflect on a pattern in your own words — useful for self-insight, not for any clinical or high-stakes decision.</p>
      <h2>Why we don't send your answers anywhere</h2>
      <p>Every test on this site scores your answers entirely in your browser. We do not see your individual answers, and we do not store your results on a server. This is a deliberate architectural choice, not just a policy promise — see our <a href="/en/privacy-policy/">privacy policy</a> for the technical details.</p>
    `,
  },
  {
    slug: 'screening-vs-diagnosis',
    title: 'Screening vs. Diagnosis: What’s the Difference?',
    description: 'Why a validated screening tool result is never the same thing as a clinical diagnosis, explained using the research those tools are built on.',
    lastUpdated: '2026-09-21',
    relatedTestSlugs: ['anxiety-symptom-screening'],
    answer: 'Screening identifies a pattern that is statistically associated with a condition and worth a closer look; diagnosis is a clinical determination made by a qualified professional using full evaluation, history, and judgment. A screening tool can suggest where to look — only a clinician can tell you what is actually there.',
    bodyHtml: `
      <h2>How a screening tool is built</h2>
      <p>Researchers develop a screening tool by giving a candidate questionnaire to a large sample of people who also undergo a full clinical evaluation (often a structured diagnostic interview). They then find the score cut point that best balances two kinds of error: missing real cases (false negatives) and flagging people who don't have the condition (false positives). That cut point becomes the "positive screen" threshold.</p>
      <p>For example, the GAD-7 anxiety screening tool used on this site was validated by comparing questionnaire scores against structured clinical interviews. At a cut point of 10, the original study found about 89% sensitivity and 82% specificity for generalized anxiety disorder in a primary-care sample.</p>
      <h2>What that precision actually means</h2>
      <p>Even a well-validated screening tool at a good cut point will be wrong sometimes in both directions. A "positive" screen means your responses fall in a range associated with higher likelihood of the condition in the population the tool was studied in — not that you definitely have it. A "negative" screen similarly doesn't guarantee its absence.</p>
      <h2>What only a clinician can add</h2>
      <p>A qualified healthcare professional doesn't just add more questions — they bring clinical judgment, a full history, an understanding of your specific context, and the ability to rule out other explanations for the same symptoms. That combination is what turns a probability signal into an actual diagnosis.</p>
      <p>This is why every clinical screening result on this site is written using language like "your responses show a pattern that may be consistent with..." rather than "you have..." — and why we always suggest a next step of talking to a professional rather than presenting a result as final.</p>
    `,
  },
  {
    slug: 'big-five-personality-explained',
    title: 'The Big Five Personality Model, Explained',
    description: 'What the Big Five (OCEAN) model actually measures, where it came from, and why it’s the most replicated framework in personality psychology.',
    lastUpdated: '2026-09-21',
    relatedTestSlugs: ['big-five-personality-short'],
    answer: 'The Big Five is a research model describing personality along five broad, statistically independent dimensions — Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional Stability (the inverse of Neuroticism) — derived from decades of factor-analytic research on how people describe themselves and others.',
    bodyHtml: `
      <h2>Where the model comes from</h2>
      <p>The Big Five did not originate from a single study or theory. It emerged from decades of "lexical" research: psychologists collected the thousands of trait-describing words in everyday language, had people rate themselves and others on them, and used a statistical technique called factor analysis to find the smallest number of underlying dimensions that explained most of the variation. Five dimensions kept emerging, across languages and cultures, which is why the model is considered unusually robust for personality research.</p>
      <h2>The five dimensions</h2>
      <ul>
        <li><strong>Openness to Experience</strong> — imagination, curiosity, and interest in novel or abstract ideas.</li>
        <li><strong>Conscientiousness</strong> — organization, dependability, and goal-directed persistence.</li>
        <li><strong>Extraversion</strong> — sociability, assertiveness, and energy drawn from external stimulation.</li>
        <li><strong>Agreeableness</strong> — warmth, empathy, and cooperative orientation toward others.</li>
        <li><strong>Emotional Stability</strong> (the inverse of Neuroticism) — steadiness and calm under stress versus emotional reactivity.</li>
      </ul>
      <h2>Why our test uses the Mini-IPIP</h2>
      <p>Our <a href="/en/tests/big-five-personality-short/">Big Five Personality Test — Short</a> uses the 20-item Mini-IPIP, a short form built from the public-domain International Personality Item Pool (Donnellan, Oswald, Baird, &amp; Lucas, 2006). We chose it because it's openly licensed, its item wording and scoring are documented in a peer-reviewed publication, and its brevity keeps the test to about four minutes without asking you to reproduce a commercial instrument we don't have rights to.</p>
      <h2>What it isn’t</h2>
      <p>The Big Five describes broad tendencies, not a fixed identity, a clinical diagnosis, or a hiring criterion. Scores can shift somewhat with context, mood, and life stage, and a short 4-item-per-trait form trades precision for speed relative to longer research instruments.</p>
    `,
  },
  {
    slug: 'how-personality-tests-are-scored',
    title: 'How Personality Tests Are Scored',
    description: 'A walkthrough of reverse-scoring, subscales, and why personality tests report multiple numbers instead of one overall score.',
    lastUpdated: '2026-09-21',
    relatedTestSlugs: ['big-five-personality-short'],
    answer: 'Personality tests typically score several independent trait dimensions rather than one overall number. Each dimension sums a handful of items, some of which are "reverse-scored" (flipped) because they’re worded in the opposite direction, so that agreeing with them lowers rather than raises the trait score.',
    bodyHtml: `
      <h2>Why there's no single "personality score"</h2>
      <p>Unlike a screening tool, which usually asks "how much of one thing," personality inventories like the Big Five measure several independent dimensions at once. Being high in one trait says nothing about where you'll land on another — that's the point of the model: the traits were chosen because they don't strongly correlate with each other.</p>
      <h2>What reverse-scoring is and why it exists</h2>
      <p>Good questionnaire design mixes positively and negatively worded items on purpose, so that someone can't answer well just by favoring one end of the scale ("acquiescence bias"). A negatively worded item — like "Don't talk a lot" for Extraversion — is reverse-scored: on a 1–5 scale, a response of 5 becomes a 1 and contributes toward <em>low</em> Extraversion, not high.</p>
      <h2>From items to a trait score</h2>
      <p>For our <a href="/en/tests/big-five-personality-short/">Big Five short test</a>, each of the five traits has exactly four items. After reverse-scoring the negatively worded ones, the four item scores (each 1–5) are summed, producing a trait total between 4 and 20. That's why our results page shows a bar and number per trait rather than one headline score.</p>
      <h2>Norm-referenced vs. self-referenced ranges</h2>
      <p>Some personality tools compare your score to population norms (percentiles against a large reference sample). Our short-form test does not — it describes your score relative to the 4–20 possible range on that trait, which is a self-referenced description, not a population comparison. We say so explicitly on the results page.</p>
    `,
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
