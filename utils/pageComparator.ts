import { Browser } from '@playwright/test';

import { stabilizePage }
  from './stabilizer';

import { validateImages }
  from './images';

import { getCleanDOM }
  from './dom';

import { extractSections }
  from './sections';

import { compareSections }
  from './compare';

import { capturePageScreenshot }
  from './screenshot';

import { mapStagingToLiveUrl }
  from './mapper';

import { ComparisonResult }
  from '../types/comparison';

import { retry }
  from './retry';

import { compareScreenshots }
  from './visual';

export async function comparePage(
  browser: Browser,
  stagingUrl: string
): Promise<ComparisonResult> {

  /*
  |--------------------------------------------------------------------------
  | Map URLs
  |--------------------------------------------------------------------------
  */

  const liveUrl =
    mapStagingToLiveUrl(stagingUrl);

  /*
  |--------------------------------------------------------------------------
  | Create Browser Contexts
  |--------------------------------------------------------------------------
  */

  const stagingContext =
    await browser.newContext({

      viewport: {
        width: 1440,
        height: 900,
      },

      deviceScaleFactor: 1,

      ignoreHTTPSErrors: true,
    });

  const liveContext =
    await browser.newContext({

      viewport: {
        width: 1440,
        height: 900,
      },

      deviceScaleFactor: 1,

      ignoreHTTPSErrors: true,
    });

  /*
  |--------------------------------------------------------------------------
  | Create Pages
  |--------------------------------------------------------------------------
  */

  const staging =
    await stagingContext.newPage();

  const live =
    await liveContext.newPage();

  /*
  |--------------------------------------------------------------------------
  | Set Timeouts
  |--------------------------------------------------------------------------
  */

  staging.setDefaultTimeout(60000);

  live.setDefaultTimeout(60000);

  try {

    console.log(`

Comparing Pages:
STAGING: ${stagingUrl}
LIVE: ${liveUrl}

`);

    /*
    |--------------------------------------------------------------------------
    | Open Staging
    |--------------------------------------------------------------------------
    */

    await retry(() =>

      staging.goto(stagingUrl, {

        waitUntil: 'domcontentloaded',

        timeout: 60000,
      })
    );

    /*
    |--------------------------------------------------------------------------
    | Open Live
    |--------------------------------------------------------------------------
    */

    await retry(() =>

      live.goto(liveUrl, {

        waitUntil: 'domcontentloaded',

        timeout: 60000,
      })
    );

    /*
    |--------------------------------------------------------------------------
    | Stabilize Pages
    |--------------------------------------------------------------------------
    */

    await stabilizePage(staging);

    await stabilizePage(live);

    /*
    |--------------------------------------------------------------------------
    | Validate Images
    |--------------------------------------------------------------------------
    */

    const stagingBrokenImages =
      await validateImages(staging);

    const liveBrokenImages =
      await validateImages(live);

    /*
    |--------------------------------------------------------------------------
    | Extract DOM
    |--------------------------------------------------------------------------
    */

    const stagingDOM =
      await getCleanDOM(staging);

    const liveDOM =
      await getCleanDOM(live);

    /*
    |--------------------------------------------------------------------------
    | Extract Sections
    |--------------------------------------------------------------------------
    */

    const stagingSections =
      extractSections(stagingDOM);

    const liveSections =
      extractSections(liveDOM);

    /*
    |--------------------------------------------------------------------------
    | Compare Sections
    |--------------------------------------------------------------------------
    */

    const missingSections =
      compareSections(
        stagingSections,
        liveSections
      );

    /*
    |--------------------------------------------------------------------------
    | Screenshot File Names
    |--------------------------------------------------------------------------
    */

    const safeName =
      createSafeFileName(stagingUrl);

    /*
    |--------------------------------------------------------------------------
    | Screenshot Paths
    |--------------------------------------------------------------------------
    */

    const stagingPath =
      `snapshots/staging/${safeName}.png`;

    const livePath =
      `snapshots/live/${safeName}.png`;

    const diffPath =
      `snapshots/diff/${safeName}.png`;

    /*
    |--------------------------------------------------------------------------
    | Capture Screenshots
    |--------------------------------------------------------------------------
    */

    await capturePageScreenshot(
      staging,
      stagingPath
    );

    await capturePageScreenshot(
      live,
      livePath
    );

    /*
    |--------------------------------------------------------------------------
    | Visual Comparison
    |--------------------------------------------------------------------------
    */

    const visualResult =
      await compareScreenshots(
        stagingPath,
        livePath,
        diffPath
      );

    /*
    |--------------------------------------------------------------------------
    | Final Pass/Fail
    |--------------------------------------------------------------------------
    */

    const passed =

      missingSections.length === 0 &&

      stagingBrokenImages.length === 0 &&

      liveBrokenImages.length === 0 &&

      visualResult.passed;

    /*
    |--------------------------------------------------------------------------
    | Logging
    |--------------------------------------------------------------------------
    */

    console.log(`

RESULT:
URL: ${stagingUrl}

Missing Sections:
${missingSections.length}

Broken Staging Images:
${stagingBrokenImages.length}

Broken Live Images:
${liveBrokenImages.length}

Visual Mismatch:
${visualResult.mismatchPercentage.toFixed(2)}%

STATUS:
${passed ? 'PASSED' : 'FAILED'}

`);

    /*
    |--------------------------------------------------------------------------
    | Return Result
    |--------------------------------------------------------------------------
    */

    return {

      url: stagingUrl,

      passed,

      visualMismatch:
        visualResult.mismatchPercentage,

      diffPath,

      missingSections,

      brokenImages: [
        ...stagingBrokenImages,
        ...liveBrokenImages,
      ],

      screenshotPathStaging:
        stagingPath,

      screenshotPathLive:
        livePath,

      screenshotPathDiff:
        diffPath,
    };

  } catch (error: any) {

    console.log(`

ERROR COMPARING PAGE:
${stagingUrl}

ERROR:
${error.message}

`);

    return {

      url: stagingUrl,

      passed: false,

      visualMismatch: 100,

      diffPath: '',

      missingSections: [],

      brokenImages: [],

      screenshotPathStaging: '',

      screenshotPathLive: '',

      screenshotPathDiff: '',

      error: error.message,
    };

  } finally {

    /*
    |--------------------------------------------------------------------------
    | Cleanup
    |--------------------------------------------------------------------------
    */

    await staging.close();

    await live.close();

    await stagingContext.close();

    await liveContext.close();
  }
}

/*
|--------------------------------------------------------------------------
| Safe Screenshot File Name
|--------------------------------------------------------------------------
*/

function createSafeFileName(
  url: string
) {

  return url

    .replace(/^https?:\/\//, '')

    .replace(/[^\w]/g, '_')

    .replace(/_+/g, '_');
}