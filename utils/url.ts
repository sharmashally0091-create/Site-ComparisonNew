export function normalizeUrl(url: string) {

  try {

    const parsed = new URL(url);

    // Remove hash
    parsed.hash = '';

    // Remove query params
    parsed.search = '';

    // Remove trailing slash
    let clean = parsed.toString();

    if (clean.endsWith('/')) {
      clean = clean.slice(0, -1);
    }

    return clean;

  } catch {

    return '';
  }
}