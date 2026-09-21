import type { APIRoute } from 'astro';
import { siteName } from '../i18n/config';
import { testDefinitions } from '../data/tests/index';
import { categories } from '../lib/categories';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';

  const body = `# ${siteName}

> Evidence-informed self-assessment tools that help people understand themselves better. Tests are self-scored in the browser; individual answers are never sent to a server.

## Evidence levels
- A — Validated screening tool: built from a named, published instrument with verified reproduction rights.
- B — Public-domain psychological scale: built from an established public-domain research instrument (e.g. IPIP).
- C — Evidence-informed self-assessment: original questions informed by published research, not a validated instrument.
- D — Entertainment quiz: no evidence claim.

No test on this site diagnoses a medical or mental-health condition, including Level A tests. See ${base}/en/medical-disclaimer/ and ${base}/en/evidence-policy/.

## Categories
${categories.map((c) => `- ${c.name}: ${base}/en/${c.slug}/`).join('\n')}

## Published assessments
${testDefinitions.map((t) => `- ${t.title} (Level ${t.evidenceLevel}): ${base}/en/tests/${t.slug}/`).join('\n')}

## Key pages
- Evidence policy: ${base}/en/evidence-policy/
- Methodology: ${base}/en/methodology/
- Editorial policy: ${base}/en/editorial-policy/
- Privacy policy: ${base}/en/privacy-policy/
- Medical disclaimer: ${base}/en/medical-disclaimer/

This file is informational documentation for AI assistants and is not used as a search-ranking signal.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
