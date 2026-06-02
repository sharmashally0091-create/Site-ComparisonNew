export function mapStagingToLiveUrl(
  stagingUrl: string
): string {

  /*
  |--------------------------------------------------------------------------
  | Exact Domain Mapping
  |--------------------------------------------------------------------------
  */

  const mappings: Record<string, string> = {

    /*
    |--------------------------------------------------------------------------
    | MOREHART
    |--------------------------------------------------------------------------
    */

    'https://morehartrdsstg.wpenginepowered.com':
      'https://www.morehartac.com',

    /*
    |--------------------------------------------------------------------------
    | ADD MORE SITES HERE
    |--------------------------------------------------------------------------
    */

    // 'https://staging-domain.com':
    //   'https://live-domain.com',
  };

  /*
  |--------------------------------------------------------------------------
  | Find Matching Domain
  |--------------------------------------------------------------------------
  */

  for (const stagingDomain in mappings) {

    if (
      stagingUrl.startsWith(
        stagingDomain
      )
    ) {

      return stagingUrl.replace(
        stagingDomain,
        mappings[stagingDomain]
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Fallback
  |--------------------------------------------------------------------------
  */

  return stagingUrl;
}