import { Page } from '@playwright/test';

import { normalizeUrl } from './url';

export async function extractNavigationLinks(
  page: Page,
  baseUrl: string
) {

  const links = await page.$$eval('a', (anchors) => {

    return anchors.map((a) => a.href);

  });

  const cleaned = links
    .filter(Boolean)
    .map(normalizeUrlInternal)
    .filter((url) => {

      return (
        url.startsWith(baseUrl) &&
        !url.includes('#') &&
        !url.includes('mailto:') &&
        !url.includes('tel:')
      );
    });

  return [...new Set(cleaned)];
}

function normalizeUrlInternal(url: string) {

  try {

    const parsed = new URL(url);

    parsed.hash = '';
    parsed.search = '';

    let clean = parsed.toString();

    if (clean.endsWith('/')) {
      clean = clean.slice(0, -1);
    }

    return clean;

  } catch {

    return '';
  }
}