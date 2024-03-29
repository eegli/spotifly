import { WithOptions } from '@eegli/tinyparse';
import type { Options } from './config';

export type AuthorizeParams = WithOptions<Options>;

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  refresh_token: string;
  scope: string;
  date_obtained: string;
};
