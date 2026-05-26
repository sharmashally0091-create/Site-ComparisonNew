import fs from 'fs';

import path from 'path';

import { Page } from '@playwright/test';

export async function capturePageScreenshot(
  page: Page,
  filePath: string
) {

  /*
  |--------------------------------------------------------------------------
  | Ensure Directory Exists
  |--------------------------------------------------------------------------
  */

  const dir =
    path.dirname(filePath);

  if (!fs.existsSync(dir)) {

    fs.mkdirSync(dir, {
      recursive: true,
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Scroll Entire Page
  |--------------------------------------------------------------------------
  */

  await scrollFullPage(page);

  /*
  |--------------------------------------------------------------------------
  | Return To Top
  |--------------------------------------------------------------------------
  */

  await page.evaluate(() => {

    window.scrollTo(0, 0);

  });

  /*
  |--------------------------------------------------------------------------
  | Wait For Final Render
  |--------------------------------------------------------------------------
  */

  await page.waitForTimeout(3000);

  /*
  |--------------------------------------------------------------------------
  | Capture Full Page
  |--------------------------------------------------------------------------
  */

  await page.screenshot({

    path: filePath,

    fullPage: true,

    type: 'png',

    animations: 'disabled',

    caret: 'hide',

    scale: 'device',
  });
}

/*
|--------------------------------------------------------------------------
| Smart Full Page Scroll
|--------------------------------------------------------------------------
*/

async function scrollFullPage(
  page: Page
) {

  await page.evaluate(async () => {

    await new Promise<void>((resolve) => {

      let totalHeight = 0;

      const distance = 800;

      const delay = 300;

      const timer = setInterval(() => {

        const scrollHeight =
          document.body.scrollHeight;

        window.scrollBy(0, distance);

        totalHeight += distance;

        /*
        |--------------------------------------------------------------------------
        | Trigger Lazy Loading
        |--------------------------------------------------------------------------
        */

        document
          .querySelectorAll('img')
          .forEach((img: any) => {

            if (img.dataset.src) {
              img.src = img.dataset.src;
            }

            if (img.dataset.lazySrc) {
              img.src = img.dataset.lazySrc;
            }

            img.loading = 'eager';
          });

        /*
        |--------------------------------------------------------------------------
        | Stop At Bottom
        |--------------------------------------------------------------------------
        */

        if (
          totalHeight >= scrollHeight
        ) {

          clearInterval(timer);

          resolve();
        }

      }, delay);
    });
  });

  /*
  |--------------------------------------------------------------------------
  | Wait After Scroll
  |--------------------------------------------------------------------------
  */

  await page.waitForTimeout(3000);

  /*
  |--------------------------------------------------------------------------
  | Wait For Images
  |--------------------------------------------------------------------------
  */

  await waitForImages(page);
}

/*
|--------------------------------------------------------------------------
| Wait For Images
|--------------------------------------------------------------------------
*/

async function waitForImages(
  page: Page
) {

  await page.evaluate(async () => {

    const images =
      Array.from(document.images);

    await Promise.all(

      images.map(async (img) => {

        if (
          img.complete &&
          img.naturalWidth > 0
        ) {

          return;
        }

        await new Promise((resolve) => {

          const timeout =
            setTimeout(resolve, 10000);

          img.onload = () => {

            clearTimeout(timeout);

            resolve(true);
          };

          img.onerror = () => {

            clearTimeout(timeout);

            resolve(true);
          };
        });

        if ('decode' in img) {

          try {

            await img.decode();

          } catch {}
        }
      })
    );
  });
}