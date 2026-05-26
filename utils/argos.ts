import fs from 'fs';

import path from 'path';

import { Page } from '@playwright/test';

import { argosScreenshot }
  from '@argos-ci/playwright';

export async function uploadToArgos(
  page: Page,
  snapshotName: string
) {

  await argosScreenshot(
    page,
    snapshotName,
    {
      fullPage: true,
    }
  );
}

/*
|--------------------------------------------------------------------------
| Upload Existing Image Files
|--------------------------------------------------------------------------
*/

export function getSnapshotFiles(
  dir: string
) {

  return fs
    .readdirSync(dir)
    .filter((file) =>

      file.endsWith('.png')
    )
    .map((file) =>

      path.join(dir, file)
    );
}