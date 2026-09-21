export interface LocaleConfig {
  code: string;
  label: string;
  /** BCP-47 tag used in html lang and hreflang. */
  hreflang: string;
  dir: 'ltr' | 'rtl';
  live: boolean;
}

/**
 * Locale architecture for the whole site. `live: true` locales have real,
 * human-reviewed content and are built + routed + included in the sitemap
 * and hreflang set. `live: false` locales are reserved slugs (so the URL
 * structure and hreflang plumbing are already correct) but are not built or
 * linked yet — see docs/adding-a-language.md.
 */
export const locales: LocaleConfig[] = [
  { code: 'en', label: 'English', hreflang: 'en', dir: 'ltr', live: true },
  { code: 'ko', label: '한국어', hreflang: 'ko', dir: 'ltr', live: false },
  { code: 'ja', label: '日本語', hreflang: 'ja', dir: 'ltr', live: false },
  { code: 'es', label: 'Español', hreflang: 'es', dir: 'ltr', live: false },
  { code: 'de', label: 'Deutsch', hreflang: 'de', dir: 'ltr', live: false },
  { code: 'fr', label: 'Français', hreflang: 'fr', dir: 'ltr', live: false },
  { code: 'pt-br', label: 'Português (Brasil)', hreflang: 'pt-BR', dir: 'ltr', live: false },
];

export const defaultLocale = 'en';
export const liveLocales = locales.filter((l) => l.live);

export function getLocale(code: string): LocaleConfig {
  return locales.find((l) => l.code === code) ?? locales[0];
}

export const siteName = 'Clarity';
export const siteTagline = 'Understand yourself better.';
