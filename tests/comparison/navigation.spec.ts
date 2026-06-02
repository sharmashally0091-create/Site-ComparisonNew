import { test } from '@playwright/test';

import pLimit from 'p-limit';

import { ENV } from '../../config/environments';

import {
  extractNavigationLinks
} from '../../utils/navigation';

import {
  comparePage
} from '../../utils/pageComparator';

import {
  generateHtmlReport
} from '../../utils/report';

test.describe.configure({
  mode: 'serial',
});

test(
  'Compare all navigation pages',

  async ({ browser }) => {

    /*
    |--------------------------------------------------------------------------
    | Global Timeout
    |--------------------------------------------------------------------------
    */

    test.setTimeout(1800000);

    /*
    |--------------------------------------------------------------------------
    | Discovery Context
    |--------------------------------------------------------------------------
    */

    const context =
      await browser.newContext({

        viewport: {
          width: 1440,
          height: 900,
        },

        deviceScaleFactor: 1,

        ignoreHTTPSErrors: true,
      });

    const page =
      await context.newPage();

    /*
    |--------------------------------------------------------------------------
    | Disable Cache
    |--------------------------------------------------------------------------
    */

    await page.route('**/*', async (route) => {

      const headers = {
        ...route.request().headers(),
        'Cache-Control': 'no-cache',
      };

      await route.continue({ headers });
    });

    /*
    |--------------------------------------------------------------------------
    | Open Homepage
    |--------------------------------------------------------------------------
    */

    console.log(`
========================================
OPENING STAGING HOMEPAGE
========================================
`);

    const snapshotEnv =
  process.env.SNAPSHOT_ENV ||
  'current';

const targetUrl =
  snapshotEnv === 'baseline'
    ? ENV.live
    : ENV.staging;

await page.goto(
  targetUrl,
      {
        waitUntil: 'domcontentloaded',
        timeout: 120000,
      }
    );

    /*
    |--------------------------------------------------------------------------
    | Homepage Stabilization
    |--------------------------------------------------------------------------
    */

    await page.waitForTimeout(5000);

    /*
    |--------------------------------------------------------------------------
    | Extract Links
    |--------------------------------------------------------------------------
    */

    let links: string[] = [];

    try {

      links =
        await extractNavigationLinks(
         page,
         targetUrl
        );

    } catch (error) {

      console.log(`
NAVIGATION EXTRACTION FAILED
`);

      console.log(error);
    }

    /*
    |--------------------------------------------------------------------------
    | Cleanup Links
    |--------------------------------------------------------------------------
    */

    links = [...new Set(links)];

    links = links.filter((link) => {

      return ![
        '/blog',
        '/feed',
        '/author',
        '/tag',
        '/category',
        '/wp-content',
        '.jpg',
        '.png',
        '.jpeg',
        '.svg',
        '.pdf',
      ].some((skip) =>

        link.includes(skip)
      );
    });

    /*
    |--------------------------------------------------------------------------
    | IMPORTANT:
    | Remove slice() later for full production run
    |--------------------------------------------------------------------------
    */

    const limitedLinks =
      links.slice(0, 10);

    /*
    |--------------------------------------------------------------------------
    | Close Discovery Resources
    |--------------------------------------------------------------------------
    */

    await page.close();

    await context.close();

    /*
    |--------------------------------------------------------------------------
    | Logs
    |--------------------------------------------------------------------------
    */

    console.log(`
========================================
TOTAL DISCOVERED LINKS
========================================
`);

    console.log(links);

    console.log(`
========================================
LIMITED TEST LINKS
========================================
`);

    console.log(limitedLinks);

    console.log(`
========================================
STARTING COMPARISON
========================================
`);

    /*
    |--------------------------------------------------------------------------
    | Concurrency Control
    |--------------------------------------------------------------------------
    */

    const limit = pLimit(1);

    /*
    |--------------------------------------------------------------------------
    | Compare Pages
    |--------------------------------------------------------------------------
    */

    const results =
      await Promise.all(

        limitedLinks.map((link) =>

          limit(async () => {

            console.log(`
========================================
COMPARING PAGE
========================================

${link}
`);

            /*
            |--------------------------------------------------------------------------
            | Prevent Server Overload
            |--------------------------------------------------------------------------
            */

            await delay(3000);

            try {

              const result =
                await comparePage(
                  browser,
                  link
                );

              /*
              |--------------------------------------------------------------------------
              | Memory Stabilization
              |--------------------------------------------------------------------------
              */

              await delay(2000);

              return result;

            } catch (error: any) {

              console.log(`
ERROR COMPARING PAGE:
${link}

ERROR:
${error.message}
`);

              return {

                url: link,

                passed: false,

                missingSections: [],

                brokenImages: [],

                screenshotPathStaging: '',

                screenshotPathLive: '',

                diffPath: '',

                error: error.message,
              };
            }
          })
        )
      );

    /*
    |--------------------------------------------------------------------------
    | Generate HTML Visual Report
    |--------------------------------------------------------------------------
    */

    await generateHtmlReport(results);

    /*
    |--------------------------------------------------------------------------
    | Results
    |--------------------------------------------------------------------------
    */

    const failedPages =
      results.filter(
        (r) => !r.passed
      );

    const passedPages =
      results.filter(
        (r) => r.passed
      );

    /*
    |--------------------------------------------------------------------------
    | Final Summary
    |--------------------------------------------------------------------------
    */

    console.log(`
========================================
FINAL SUMMARY
========================================

TOTAL:
${results.length}

PASSED:
${passedPages.length}

FAILED:
${failedPages.length}
`);

    /*
    |--------------------------------------------------------------------------
    | Failed Pages
    |--------------------------------------------------------------------------
    */

    if (failedPages.length > 0) {

      console.log(`
========================================
FAILED PAGES
========================================
`);

      console.log(
        JSON.stringify(
          failedPages,
          null,
          2
        )
      );
    }

    /*
    |--------------------------------------------------------------------------
    | HTML Report Location
    |--------------------------------------------------------------------------
    */

    console.log(`
========================================
HTML REPORT
========================================

reports/visual-report/index.html
`);

    /*
    |--------------------------------------------------------------------------
    | Test Complete
    |--------------------------------------------------------------------------
    */

    await generateHtmlReport(results);
    
    console.log(`
========================================
TEST EXECUTION COMPLETED
========================================
`);
  }
);

/*
|--------------------------------------------------------------------------
| Delay Utility
|--------------------------------------------------------------------------
*/

function delay(ms: number) {

  return new Promise((resolve) =>

    setTimeout(resolve, ms)
  );
}