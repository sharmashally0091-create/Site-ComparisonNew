# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\comparison\compare.spec.ts >> Compare Staging vs Live
- Location: tests\comparison\compare.spec.ts:19:5

# Error details

```
Error: page.content: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import { Page } from '@playwright/test';
  2   | import { IGNORE_SELECTORS } from '../config/selectors';
  3   | 
  4   | export async function stabilizePage(page: Page) {
  5   | 
  6   |   // DOM ready
  7   |   await page.waitForLoadState('domcontentloaded');
  8   | 
  9   |   // Smart stability wait
  10  |   await waitForPageStable(page);
  11  | 
  12  |   // Disable animations
  13  |   await disableAnimations(page);
  14  | 
  15  |   // Hide ignored elements
  16  |   await hideIgnoredElements(page);
  17  | 
  18  |   // Stop sliders/videos
  19  |   await stopAnimationsAndSliders(page);
  20  | 
  21  |   // Scroll page
  22  |   await autoScroll(page);
  23  | 
  24  |   // Trigger lazy loading
  25  |   await triggerLazyLoad(page);
  26  | 
  27  |   // Wait images
  28  |   await waitForImages(page);
  29  | 
  30  |   // Wait fonts
  31  |   await waitForFonts(page);
  32  | 
  33  |   // Scroll top before screenshot
  34  |   await page.evaluate(() => {
  35  |     window.scrollTo(0, 0);
  36  |   });
  37  | 
  38  |   // Final settle
  39  |   await page.waitForTimeout(2000);
  40  | }
  41  | 
  42  | async function waitForPageStable(page: Page) {
  43  | 
  44  |   let previousHTMLSize = 0;
  45  | 
  46  |   let stableCounter = 0;
  47  | 
  48  |   const maxChecks = 10;
  49  | 
  50  |   for (let i = 0; i < maxChecks; i++) {
  51  | 
> 52  |     const currentHTML = await page.content();
      |                                    ^ Error: page.content: Target page, context or browser has been closed
  53  | 
  54  |     const currentHTMLSize = currentHTML.length;
  55  | 
  56  |     if (currentHTMLSize === previousHTMLSize) {
  57  | 
  58  |       stableCounter++;
  59  | 
  60  |     } else {
  61  | 
  62  |       stableCounter = 0;
  63  |     }
  64  | 
  65  |     previousHTMLSize = currentHTMLSize;
  66  | 
  67  |     // Stable 3 consecutive times
  68  |     if (stableCounter >= 3) {
  69  |       break;
  70  |     }
  71  | 
  72  |     await page.waitForTimeout(1000);
  73  |   }
  74  | }
  75  | 
  76  | async function disableAnimations(page: Page) {
  77  | 
  78  |   await page.addStyleTag({
  79  |     content: `
  80  |       *,
  81  |       *::before,
  82  |       *::after {
  83  |         animation: none !important;
  84  |         transition: none !important;
  85  |         caret-color: transparent !important;
  86  |       }
  87  | 
  88  |       html {
  89  |         scroll-behavior: auto !important;
  90  |       }
  91  |     `,
  92  |   });
  93  | }
  94  | 
  95  | async function hideIgnoredElements(page: Page) {
  96  | 
  97  |   await page.evaluate((selectors) => {
  98  | 
  99  |     selectors.forEach((selector) => {
  100 | 
  101 |       document.querySelectorAll(selector).forEach((el) => {
  102 | 
  103 |         (el as HTMLElement).style.display = 'none';
  104 | 
  105 |       });
  106 | 
  107 |     });
  108 | 
  109 |   }, IGNORE_SELECTORS);
  110 | }
  111 | 
  112 | async function stopAnimationsAndSliders(page: Page) {
  113 | 
  114 |   await page.evaluate(() => {
  115 | 
  116 |     // Swiper
  117 |     document.querySelectorAll('.swiper').forEach((el: any) => {
  118 |       el.swiper?.autoplay?.stop?.();
  119 |     });
  120 | 
  121 |     // Slick
  122 |     document.querySelectorAll('.slick-slider').forEach((el: any) => {
  123 |       el.slick?.pause?.();
  124 |     });
  125 | 
  126 |     // Videos
  127 |     document.querySelectorAll('video').forEach((video: any) => {
  128 |       video.pause();
  129 |     });
  130 | 
  131 |   });
  132 | }
  133 | 
  134 | async function autoScroll(page: Page) {
  135 | 
  136 |   await page.evaluate(async () => {
  137 | 
  138 |     await new Promise<void>((resolve) => {
  139 | 
  140 |       let totalHeight = 0;
  141 | 
  142 |       const distance = 500;
  143 | 
  144 |       const timer = setInterval(() => {
  145 | 
  146 |         window.scrollBy(0, distance);
  147 | 
  148 |         totalHeight += distance;
  149 | 
  150 |         if (totalHeight >= document.body.scrollHeight) {
  151 | 
  152 |           clearInterval(timer);
```