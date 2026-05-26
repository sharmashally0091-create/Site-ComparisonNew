import { execSync } from 'child_process';

try {

  console.log(`
========================================
UPLOADING SNAPSHOTS TO ARGOS
========================================
`);

  /*
  |--------------------------------------------------------------------------
  | Upload Staging Screenshots
  |--------------------------------------------------------------------------
  */

  execSync(
    'npx argos upload snapshots/staging',
    {
      stdio: 'inherit',
    }
  );

  /*
  |--------------------------------------------------------------------------
  | Upload Live Screenshots
  |--------------------------------------------------------------------------
  */

  execSync(
    'npx argos upload snapshots/live',
    {
      stdio: 'inherit',
    }
  );

  /*
  |--------------------------------------------------------------------------
  | Upload Diff Screenshots
  |--------------------------------------------------------------------------
  */

  execSync(
    'npx argos upload snapshots/diff',
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

  console.error(`
========================================
ARGOS UPLOAD FAILED
========================================
`);

  console.error(error);
}