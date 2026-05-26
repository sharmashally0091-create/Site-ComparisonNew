import { ENV }
  from '../config/environments';

export function mapStagingToLiveUrl(
  stagingUrl: string
) {

  const path =
    stagingUrl.replace(
      ENV.staging,
      ''
    );

  return `${ENV.live}${path}`;
}