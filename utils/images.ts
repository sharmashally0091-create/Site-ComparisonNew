import { Page } from '@playwright/test';

export async function validateImages(
  page: Page
): Promise<string[]> {

  try {

    const brokenImages =
      await page.evaluate(() => {

        const images =
          Array.from(document.images);

        return images

          .filter((img) => {

            return (
              !img.complete ||
              img.naturalWidth === 0
            );
          })

          .map((img) => img.src);
      });

    return brokenImages;

  } catch {

    return [];
  }
}