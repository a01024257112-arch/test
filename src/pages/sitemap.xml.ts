import type { APIRoute } from 'astro';
import { liveLocales } from '../i18n/config';
import { categories } from '../lib/categories';
import { testDefinitions } from '../data/tests/index';
import { getRegistryBySlug } from '../data/registry';
import { guides } from '../data/guides';

const staticPaths = [
  '', 'about/', 'editorial-policy/', 'evidence-policy/', 'methodology/',
  'corrections-policy/', 'privacy-policy/', 'terms-of-use/', 'medical-disclaimer/',
  'cookie-policy/', 'contact/', 'guides/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const buildDate = new Date().toISOString().slice(0, 10);

  type Entry = { path: string; lastmod: string };
  const entries: Entry[] = [];

  for (const locale of liveLocales) {
    for (const p of staticPaths) entries.push({ path: `/${locale.code}/${p}`, lastmod: buildDate });
    for (const c of categories) entries.push({ path: `/${locale.code}/${c.slug}/`, lastmod: buildDate });
    for (const g of guides) entries.push({ path: `/${locale.code}/guides/${g.slug}/`, lastmod: g.lastUpdated });
    for (const t of testDefinitions) {
      const reg = getRegistryBySlug(t.slug);
      entries.push({ path: `/${locale.code}/tests/${t.slug}/`, lastmod: reg?.lastReviewed ?? buildDate });
      // Deliberately excluded from the sitemap: /take/ (session flow) and
      // /results/ (personalized, noindex, client-rendered from localStorage).
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url>\n    <loc>${base}${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
