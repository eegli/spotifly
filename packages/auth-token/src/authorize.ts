import type { CommandHandler } from '@eegli/tinyparse';
import { writeJSON } from '@spotifly/utils/fs';
import log from '@spotifly/utils/log';
import fetch from 'node-fetch';
import type { Options } from './config';
import { localhostUrl } from './server';
import type { SpotifyTokenResponse } from './types';
import { id } from './utils';

export const authorize: CommandHandler<Options> = async ({
  options,
}): Promise<void> => {
  const config = options;
  const redirectUri = `http://localhost:${config.port}`;
  const state = id();

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
    throw new Error('Received and original state do not match');
  }

  if (!receivedCode) {
    throw new Error('No code received');
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
};
