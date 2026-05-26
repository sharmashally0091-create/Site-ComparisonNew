import { Page } from '@playwright/test';

export async function getCleanDOM(
  page: Page
): Promise<string> {

  try {

    await page.waitForTimeout(2000);

    const html =
      await page.content();

    return html
      .replace(/id=".*?"/g, '')
      .replace(/data-.*?=".*?"/g, '')
      .replace(/\s+/g, ' ');

  } catch {

    return '';
  }
}