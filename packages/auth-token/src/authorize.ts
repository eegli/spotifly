import { writeJSON } from '@spotifly/utils/fs';
import log from '@spotifly/utils/log';
import { Result } from '@spotifly/utils/types';
import { localhostUrl } from './server';
import type { AuthorizeParams, SpotifyTokenResponse } from './types';
import { randomState } from './utils';

export const authorize = async ({
  options,
}: AuthorizeParams): Promise<Result<SpotifyTokenResponse>> => {
  const redirectUri = `http://localhost:${options.port}`;
  const state = randomState();

  const spotifyUrl =
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      show_dialog: 'true',
      state,
      client_id: options.clientId,
      redirect_uri: redirectUri,
      scope: options.scopes,
    }).toString();

  log.log('Please click the link to login to Spotify in the browser\n');
  log.log(spotifyUrl + '\n');

  const authUrl = await localhostUrl(options.port);
  const params = new URLSearchParams(authUrl);
  const receivedCode = params.get('code');
  const receivedState = params.get('state');

  if (receivedState !== state) {
    return {
      success: false,
      error: 'Received and original state do not match',
    };
  }

  if (!receivedCode) {
    return {
      success: false,
      error: 'No code received from Spotify, did you cancel the login?',
    };
  }

  log.log('Login successfull! Cleaning up...\n');

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: receivedCode,
    redirect_uri: redirectUri,
  }).toString();

  try {
    const token: SpotifyTokenResponse = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(options.clientId + ':' + options.clientSecret).toString(
              'base64',
            ),
        },
      },
    ).then(data => data.json() as Promise<SpotifyTokenResponse>);

    token.date_obtained = new Date().toUTCString();

    if (!options.noEmit) {
      const outFile = await writeJSON({
        path: options.outDir,
        fileName: options.fileName,
        data: token,
      });
      log.info(`Success! Saved Spotify access token to "${outFile}"`);
    } else {
      log.info(`Token:\n${JSON.stringify(token, null, 2)}`);
    }
    return {
      success: true,
      value: token,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Something went wrong';
    return {
      success: false,
      error: message,
    };
  }
};
