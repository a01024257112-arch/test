export function breadcrumbList(site: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site}${item.path}`,
    })),
  };
}

export function websiteAndOrg(site: string, siteName: string) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: site,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${site}/en/search/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: site,
      logo: `${site}/favicon.svg`,
    },
  ];
}

export function collectionPage(site: string, path: string, name: string, description: string, itemUrls: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${site}${path}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemUrls.map((url, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site}${url}` })),
    },
  };
}

export function webPage(site: string, path: string, name: string, description: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${site}${path}`,
    ...(dateModified ? { dateModified } : {}),
  };
}
