import fs from 'fs';

import path from 'path';

import pixelmatch from 'pixelmatch';

import { PNG } from 'pngjs';

export async function compareScreenshots(
  stagingPath: string,
  livePath: string,
  diffPath: string
) {

  try {

    /*
    |------------------------------------------------------------------
    | Validate Files
    |------------------------------------------------------------------
    */

    if (
      !fs.existsSync(stagingPath) ||
      !fs.existsSync(livePath)
    ) {

      console.log(`
========================================
VISUAL ERROR
========================================

Screenshot files missing
`);

      return {

        mismatchPercentage: 100,

        passed: false,
      };
    }

    /*
    |------------------------------------------------------------------
    | Read Images
    |------------------------------------------------------------------
    */

    const stagingBuffer =
      fs.readFileSync(stagingPath);

    const liveBuffer =
      fs.readFileSync(livePath);

    const stagingImage =
      PNG.sync.read(stagingBuffer);

    const liveImage =
      PNG.sync.read(liveBuffer);

    /*
    |------------------------------------------------------------------
    | Normalize Dimensions
    |------------------------------------------------------------------
    */

    const width =
      Math.min(
        stagingImage.width,
        liveImage.width
      );

    const height =
      Math.min(
        stagingImage.height,
        liveImage.height
      );

    console.log(`
========================================
VISUAL COMPARISON
========================================

WIDTH:
${width}

HEIGHT:
${height}
`);

    /*
    |------------------------------------------------------------------
    | Create Normalized Images
    |------------------------------------------------------------------
    */

    const staging =
      new PNG({
        width,
        height,
      });

    const live =
      new PNG({
        width,
        height,
      });

    PNG.bitblt(
      stagingImage,
      staging,
      0,
      0,
      width,
      height,
      0,
      0
    );

    PNG.bitblt(
      liveImage,
      live,
      0,
      0,
      width,
      height,
      0,
      0
    );

    /*
    |------------------------------------------------------------------
    | Create Diff Canvas
    |------------------------------------------------------------------
    */

    const diff =
      new PNG({
        width,
        height,
      });

    /*
    |------------------------------------------------------------------
    | Pixel Comparison
    |------------------------------------------------------------------
    */

    const mismatchedPixels =
      pixelmatch(
        staging.data,
        live.data,
        diff.data,
        width,
        height,
        {

          /*
          |--------------------------------------------------------------
          | Better Threshold
          |--------------------------------------------------------------
          */

          threshold: 0.2,

          /*
          |--------------------------------------------------------------
          | Ignore Anti Aliasing
          |--------------------------------------------------------------
          */

          includeAA: false,

          /*
          |--------------------------------------------------------------
          | Better Diff Visibility
          |--------------------------------------------------------------
          */

          alpha: 0.7,
        }
      );

    /*
    |------------------------------------------------------------------
    | Calculate Difference %
    |------------------------------------------------------------------
    */

    const totalPixels =
      width * height;

    const mismatchPercentage =
      (
        mismatchedPixels /
        totalPixels
      ) * 100;

    /*
    |------------------------------------------------------------------
    | Ensure Diff Directory
    |------------------------------------------------------------------
    */

    const diffDir =
      path.dirname(diffPath);

    if (
      !fs.existsSync(diffDir)
    ) {

      fs.mkdirSync(
        diffDir,
        {
          recursive: true,
        }
      );
    }

    /*
    |------------------------------------------------------------------
    | Save Diff Image
    |------------------------------------------------------------------
    */

    const diffBuffer =
      PNG.sync.write(diff);

    fs.writeFileSync(
      diffPath,
      diffBuffer
    );

    /*
    |------------------------------------------------------------------
    | Visual Summary
    |------------------------------------------------------------------
    */

    console.log(`
========================================
DIFF GENERATED
========================================

${diffPath}

MISMATCH:
${mismatchPercentage.toFixed(2)}%
`);

    /*
    |------------------------------------------------------------------
    | Visual Threshold Logic
    |------------------------------------------------------------------
    */

    const passed =

      mismatchPercentage < 1;

    /*
    |------------------------------------------------------------------
    | Final Result
    |------------------------------------------------------------------
    */

    return {

      mismatchPercentage,

      passed,
    };

  } catch (error: any) {

    console.log(`
========================================
VISUAL ENGINE ERROR
========================================

${error.message}
`);

    return {

      mismatchPercentage: 100,

      passed: false,
    };
  }
}