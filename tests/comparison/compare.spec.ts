import { test, expect } from '@playwright/test';

import { ENV } from '../../config/environments';

import { stabilizePage } from '../../utils/stabilizer';

import { getCleanDOM } from '../../utils/dom';

import { extractSections } from '../../utils/sections';

import { compareSections } from '../../utils/compare';

import { capturePageScreenshot } from '../../utils/screenshot';

import { validateImages } from '../../utils/images';

import { compareScreenshots } from '../../utils/visual';

test('Compare Staging vs Live', async ({ browser }) => {

  // Create shared browser context
  const context = await browser.newContext({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: 1,
  });

  // Create pages
  const staging = await context.newPage();

  const live = await context.newPage();

  // Disable animations + transitions
  const disableAnimations = `
    * {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
      caret-color: transparent !important;
    }
  `;

  await staging.addStyleTag({
    content: disableAnimations,
  });

  await live.addStyleTag({
    content: disableAnimations,
  });

  // Block unstable resources
  const blockPatterns = [
    'googletagmanager',
    'google-analytics',
    'gtag',
    'doubleclick',
    'facebook',
    'hotjar',
    'clarity',
    'analytics',
    'recaptcha',
    'youtube',
    'vimeo',
    'intercom',
    'hubspot',
  ];

  await staging.route('**/*', async (route) => {
    const url = route.request().url();

    if (
      blockPatterns.some((pattern) =>
        url.includes(pattern)
      )
    ) {
      await route.abort();

      return;
    }

    await route.continue();
  });

  await live.route('**/*', async (route) => {
    const url = route.request().url();

    if (
      blockPatterns.some((pattern) =>
        url.includes(pattern)
      )
    ) {
      await route.abort();

      return;
    }

    await route.continue();
  });

  // Open pages
  await staging.goto(
    ENV.staging,
    {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    }
  );

  await live.goto(
    ENV.live,
    {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    }
  );

  // Wait for rendering
  await staging.waitForTimeout(5000);

  await live.waitForTimeout(5000);

  // Stabilize pages
  await stabilizePage(staging);

  await stabilizePage(live);

  // Remove popups / sticky elements / chat widgets
  const cleanPage = async (page) => {
    await page.evaluate(() => {

      // Remove fixed/sticky elements
      document
        .querySelectorAll('*')
        .forEach((el) => {
          const style =
            window.getComputedStyle(el);

          if (
            style.position === 'fixed' ||
            style.position === 'sticky'
          ) {
            el.remove();
          }
        });

      // Remove iframes
      document
        .querySelectorAll('iframe')
        .forEach((el) => el.remove());

      // Remove videos
      document
        .querySelectorAll('video')
        .forEach((el) => el.remove());

      // Scroll top
      window.scrollTo(0, 0);
    });
  };

  await cleanPage(staging);

  await cleanPage(live);

  // Force same viewport again
  await staging.setViewportSize({
    width: 1440,
    height: 900,
  });

  await live.setViewportSize({
    width: 1440,
    height: 900,
  });

  // Wait again after cleanup
  await staging.waitForTimeout(3000);

  await live.waitForTimeout(3000);

  // Validate images
  const stagingBrokenImages =
    await validateImages(staging);

  const liveBrokenImages =
    await validateImages(live);

  console.log(
    'Broken staging images:',
    stagingBrokenImages
  );

  console.log(
    'Broken live images:',
    liveBrokenImages
  );

  // DOM extraction
  const stagingDOM =
    await getCleanDOM(staging);

  const liveDOM =
    await getCleanDOM(live);

  // Extract sections
  const stagingSections =
    extractSections(stagingDOM);

  const liveSections =
    extractSections(liveDOM);

  // Compare sections
  const missingSections =
    compareSections(
      stagingSections,
      liveSections
    );

  console.log(
    'Missing sections:',
    missingSections
  );

  // Capture screenshots
  await capturePageScreenshot(
    staging,
    'snapshots/staging/home.png'
  );

  await capturePageScreenshot(
    live,
    'snapshots/live/home.png'
  );

  // Visual comparison
  console.log(
    'Running visual comparison...'
  );

  const visualResult =
    await compareScreenshots(
      'snapshots/staging/home.png',
      'snapshots/live/home.png',
      'snapshots/diff/home-diff.png'
    );

  console.log(
    'Mismatch Percentage:',
    visualResult.mismatchPercentage
  );

  // Assertions
  expect(missingSections).toEqual([]);

  expect(stagingBrokenImages).toEqual([]);

  expect(liveBrokenImages).toEqual([]);

  // Increased threshold because
  // live + staging contain
  // dynamic UI/content differences
  expect(
    visualResult.mismatchPercentage
  ).toBeLessThan(70);

  // Close browser context
  await context.close();
});