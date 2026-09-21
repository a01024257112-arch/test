import { defineConfig } from 'astro/config';

// Update `site` to your production domain before deploying — it drives
// canonical URLs, hreflang alternates, sitemap entries, and OG tags.
export default defineConfig({
  site: 'https://www.clarityassessments.example',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  prefetch: false,
});
