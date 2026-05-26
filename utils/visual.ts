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
    |--------------------------------------------------------------------------
    | Check Files
    |--------------------------------------------------------------------------
    */

    if (
      !fs.existsSync(stagingPath) ||
      !fs.existsSync(livePath)
    ) {

      console.log(`
VISUAL ERROR:
Screenshot files missing
`);

      return {
        mismatchPercentage: 100,
        passed: false,
      };
    }

    /*
    |--------------------------------------------------------------------------
    | Read PNG Files
    |--------------------------------------------------------------------------
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
    |--------------------------------------------------------------------------
    | Normalize Dimensions
    |--------------------------------------------------------------------------
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
VISUAL COMPARISON:

WIDTH: ${width}
HEIGHT: ${height}
`);

    /*
    |--------------------------------------------------------------------------
    | Create New Cropped PNGs
    |--------------------------------------------------------------------------
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
    |--------------------------------------------------------------------------
    | Create Diff Image
    |--------------------------------------------------------------------------
    */

    const diff =
      new PNG({
        width,
        height,
      });

    /*
    |--------------------------------------------------------------------------
    | Pixel Match
    |--------------------------------------------------------------------------
    */

    const mismatchedPixels =
      pixelmatch(
        staging.data,
        live.data,
        diff.data,
        width,
        height,
        {

          threshold: 0.15,

          includeAA: false,
        }
      );

    /*
    |--------------------------------------------------------------------------
    | Calculate %
    |--------------------------------------------------------------------------
    */

    const totalPixels =
      width * height;

    const mismatchPercentage =
      (
        mismatchedPixels /
        totalPixels
      ) * 100;

    /*
    |--------------------------------------------------------------------------
    | Ensure Diff Folder
    |--------------------------------------------------------------------------
    */

    const diffDir =
      path.dirname(diffPath);

    if (
      !fs.existsSync(diffDir)
    ) {

      fs.mkdirSync(diffDir, {
        recursive: true,
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Save Diff
    |--------------------------------------------------------------------------
    */

    const diffBuffer =
      PNG.sync.write(diff);

    fs.writeFileSync(
      diffPath,
      diffBuffer
    );

    console.log(`
DIFF GENERATED:
${diffPath}

Mismatch:
${mismatchPercentage.toFixed(2)}%
`);

    /*
    |--------------------------------------------------------------------------
    | Final Result
    |--------------------------------------------------------------------------
    */

    return {

      mismatchPercentage,

      passed:
        mismatchPercentage < 2,
    };

  } catch (error: any) {

    console.log(`
VISUAL ENGINE ERROR:

${error.message}
`);

    return {

      mismatchPercentage: 100,

      passed: false,
    };
  }
}