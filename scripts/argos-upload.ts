import { execSync } from 'child_process';

console.log(`
========================================
ARGOS VISUAL UPLOAD STARTED
========================================
`);

try {

  /*
  |--------------------------------------------------------------------------
  | ENV VARIABLES
  |--------------------------------------------------------------------------
  */

  process.env.ARGOS_TOKEN =
    process.env.ARGOS_TOKEN ||
    'YOUR_ARGOS_TOKEN';

  process.env.ARGOS_BRANCH =
    process.env.ARGOS_BRANCH ||
    'visual-testing';

  process.env.ARGOS_COMMIT =
    process.env.ARGOS_COMMIT ||
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  /*
  |--------------------------------------------------------------------------
  | Upload Type
  |--------------------------------------------------------------------------
  */

  const uploadType =
    process.argv[2];

  if (!uploadType) {

    throw new Error(
      'Missing upload type'
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Folder Map
  |--------------------------------------------------------------------------
  */

  const folderMap: Record<string, string> = {

    staging:
      'snapshots/staging',

    live:
      'snapshots/live',

    diff:
      'snapshots/diff',
  };

  const uploadFolder =
    folderMap[uploadType];

  if (!uploadFolder) {

    throw new Error(
      `Invalid upload type: ${uploadType}`
    );
  }

  console.log(`
========================================
UPLOADING:
${uploadFolder}
========================================
`);

  /*
  |--------------------------------------------------------------------------
  | Upload Entire Folder
  |--------------------------------------------------------------------------
  */

  execSync(
    `npx argos upload ${uploadFolder}`,
    {
      stdio: 'inherit',
    }
  );

  console.log(`
========================================
ARGOS UPLOAD COMPLETED
========================================
`);

} catch (error) {

  console.log(`
========================================
ARGOS UPLOAD FAILED
========================================
`);

  console.error(error);
}