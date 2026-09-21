import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const body = `# Clarity — robots.txt
# Search crawling is welcome. See /llms.txt for supplementary documentation
# for AI assistants (informational only, not a ranking or training signal).

User-agent: *
Allow: /
Disallow: /*/tests/*/take/
Disallow: /*/tests/*/results/
Disallow: /*/search/

# Search-visibility crawlers — explicitly allowed. Search visibility is a
# different concern from model-training data collection; we do not conflate
# the two here.
User-agent: OAI-SearchBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${base}/sitemap.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
