import { Page } from '@playwright/test';

import { IGNORE_SELECTORS }
  from '../config/selectors';

export async function stabilizePage(
  page: Page
) {

  /*
  |--------------------------------------------------------------------------
  | Initial DOM Ready
  |--------------------------------------------------------------------------
  */

  await page.waitForLoadState(
    'domcontentloaded'
  );

  /*
  |--------------------------------------------------------------------------
  | Initial Stabilization
  |--------------------------------------------------------------------------
  */

  await page.waitForTimeout(3000);

  /*
  |--------------------------------------------------------------------------
  | Stop Infinite Loading
  |--------------------------------------------------------------------------
  */

  await stopPageLoading(page);

  /*
  |--------------------------------------------------------------------------
  | Disable UI Instability
  |--------------------------------------------------------------------------
  */

  await disableAnimations(page);

  /*
  |--------------------------------------------------------------------------
  | Hide Dynamic/Ignored Elements
  |--------------------------------------------------------------------------
  */

  await hideIgnoredElements(page);

  /*
  |--------------------------------------------------------------------------
  | Stop Sliders & Videos
  |--------------------------------------------------------------------------
  */

  await stopAnimationsAndSliders(page);

  /*
  |--------------------------------------------------------------------------
  | Trigger Lazy Loading
  |--------------------------------------------------------------------------
  */

  await triggerLazyLoad(page);

  /*
  |--------------------------------------------------------------------------
  | Full Page Scroll
  |--------------------------------------------------------------------------
  */

  await autoScroll(page);

  /*
  |--------------------------------------------------------------------------
  | Wait For Images
  |--------------------------------------------------------------------------
  */

  await waitForImages(page);

  /*
  |--------------------------------------------------------------------------
  | Wait For Fonts
  |--------------------------------------------------------------------------
  */

  await waitForFonts(page);

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
  | Final Settle
  |--------------------------------------------------------------------------
  */

  await page.waitForTimeout(3000);
}

/*
|--------------------------------------------------------------------------
| Stop Page Loading
|--------------------------------------------------------------------------
*/

async function stopPageLoading(
  page: Page
) {

  try {

    await page.evaluate(() => {

      window.stop();

    });

  } catch {}
}

/*
|--------------------------------------------------------------------------
| Disable Animations + Sticky Elements
|--------------------------------------------------------------------------
*/

async function disableAnimations(
  page: Page
) {

  await page.addStyleTag({

    content: `

      *,
      *::before,
      *::after {

        animation: none !important;

        transition: none !important;

        caret-color: transparent !important;
      }

      html {

        scroll-behavior: auto !important;
      }

      /*
      |--------------------------------------------------------------------------
      | Sticky Headers / Fixed Elements
      |--------------------------------------------------------------------------
      */

      .sticky,
      .fixed,
      .elementor-sticky,
      .sticky-header,
      .site-header,
      .header-wrapper,
      [style*="position:fixed"],
      [style*="position: sticky"] {

        position: static !important;
      }

      /*
      |--------------------------------------------------------------------------
      | Prevent Smooth Rendering Issues
      |--------------------------------------------------------------------------
      */

      body {

        transform: none !important;
      }
    `,
  });
}

/*
|--------------------------------------------------------------------------
| Hide Dynamic Elements
|--------------------------------------------------------------------------
*/

async function hideIgnoredElements(
  page: Page
) {

  await page.evaluate((selectors) => {

    selectors.forEach((selector) => {

      document
        .querySelectorAll(selector)
        .forEach((el) => {

          (
            el as HTMLElement
          ).style.display = 'none';
        });
    });

  }, IGNORE_SELECTORS);
}

/*
|--------------------------------------------------------------------------
| Stop Sliders/Videos
|--------------------------------------------------------------------------
*/

async function stopAnimationsAndSliders(
  page: Page
) {

  await page.evaluate(() => {

    /*
    |--------------------------------------------------------------------------
    | Swiper
    |--------------------------------------------------------------------------
    */

    document
      .querySelectorAll('.swiper')
      .forEach((el: any) => {

        el.swiper
          ?.autoplay
          ?.stop?.();
      });

    /*
    |--------------------------------------------------------------------------
    | Slick
    |--------------------------------------------------------------------------
    */

    document
      .querySelectorAll('.slick-slider')
      .forEach((el: any) => {

        el.slick
          ?.pause?.();
      });

    /*
    |--------------------------------------------------------------------------
    | Videos
    |--------------------------------------------------------------------------
    */

    document
      .querySelectorAll('video')
      .forEach((video: any) => {

        video.pause();

        video.currentTime = 0;
      });

    /*
    |--------------------------------------------------------------------------
    | GIF Freeze Attempt
    |--------------------------------------------------------------------------
    */

    document
      .querySelectorAll('img')
      .forEach((img: any) => {

        img.style.animation =
          'none';
      });
  });
}

/*
|--------------------------------------------------------------------------
| Smart Full Scroll
|--------------------------------------------------------------------------
*/

async function autoScroll(
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
        | Trigger Lazy Images
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
          totalHeight >=
          scrollHeight
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
}

/*
|--------------------------------------------------------------------------
| Trigger Lazy Loading
|--------------------------------------------------------------------------
*/

async function triggerLazyLoad(
  page: Page
) {

  await page.evaluate(() => {

    /*
    |--------------------------------------------------------------------------
    | Images
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

        if (img.dataset.original) {
          img.src = img.dataset.original;
        }

        img.loading = 'eager';
      });

    /*
    |--------------------------------------------------------------------------
    | Background Images
    |--------------------------------------------------------------------------
    */

    document
      .querySelectorAll('[data-bg]')
      .forEach((el: any) => {

        el.style.backgroundImage =
          `url(${el.dataset.bg})`;
      });
  });
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

        img.loading = 'eager';

        /*
        |--------------------------------------------------------------------------
        | Already Loaded
        |--------------------------------------------------------------------------
        */

        if (
          img.complete &&
          img.naturalWidth > 0
        ) {

          return;
        }

        /*
        |--------------------------------------------------------------------------
        | Wait Load
        |--------------------------------------------------------------------------
        */

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

        /*
        |--------------------------------------------------------------------------
        | Decode
        |--------------------------------------------------------------------------
        */

        if ('decode' in img) {

          try {

            await img.decode();

          } catch {}
        }
      })
    );
  });
}

/*
|--------------------------------------------------------------------------
| Wait For Fonts
|--------------------------------------------------------------------------
*/

async function waitForFonts(
  page: Page
) {

  try {

    await page.evaluate(async () => {

      await document.fonts.ready;

    });

  } catch {}
}