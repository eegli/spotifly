import type { WithOptions } from '@eegli/tinyparse';
import { writeJSON } from '@spotifly/utils/fs';
import log from '@spotifly/utils/log';
import fetch from 'node-fetch';
import type { Options } from './config';
import { localhostUrl } from './server';
import type { SpotifyTokenResponse } from './types';
import { randomState } from './utils';

export type AuthorizeParams = WithOptions<Options>;

export const authorize = async ({
  options,
}: AuthorizeParams): Promise<SpotifyTokenResponse | undefined> => {
  const config = options;
  const redirectUri = `http://localhost:${config.port}`;
  const state = randomState();

  const spotifyUrl =
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      show_dialog: 'true',
      state,
      client_id: config.clientId,
      redirect_uri: redirectUri,
      scope: config.scopes,
    }).toString();

  log.log('Please click the link to login to Spotify in the browser\n');
  log.log(spotifyUrl + '\n');

  const authUrl = await localhostUrl(config.port);
  const params = new URLSearchParams(authUrl);
  const receivedCode = params.get('code');
  const receivedState = params.get('state');

  if (receivedState !== state) {
    log.error('Error: Received and original state do not match');
    return;
  }

  if (!receivedCode) {
    log.error(
      'Error: No code received from Spotify, did you cancel the login?',
    );
    return;
  }

  log.log('Login successfull! Cleaning up...\n');

  const tokenRequestBody = new URLSearchParams({
    grant_type: 'authorization_code',
    code: receivedCode,
    redirect_uri: redirectUri,
  });

  const token: SpotifyTokenResponse = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(config.clientId + ':' + config.clientSecret).toString(
            'base64',
          ),
      },
      body: tokenRequestBody.toString(),
    },
  ).then(res => res.json());

  token.date_obtained = new Date().toUTCString();

  if (!config.noEmit) {
    const outDir = await writeJSON({
      path: config.outDir,
      fileName: config.fileName,
      data: token,
    });
    log.info(`Success! Saved Spotify access token to "${outDir}"`);
  } else {
    log.info(`Token:\n${JSON.stringify(token, null, 2)}`);
  }
  return token;
};
