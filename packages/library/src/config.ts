import { createParser } from '@eegli/tinyparse';
import { DefaultConfig } from './types';

export const defaultConfig: DefaultConfig = {
  token: '',
  type: 'light',
  genres: false,
  features: false,
  compact: false,
  outDir: '',
};

export const { parse, help } = createParser(defaultConfig, [
  {
    name: 'token',
    required: true,
    description:
      'A Spotify user access token. Requires at least the scope "user-library-read"',
  },
  {
    name: 'type',
    description:
      "Output type per track. Either 'full' or 'light'. Default: 'light'",
  },
  {
    name: 'genres',
    description: 'Include artist genres for each track. Default: false',
  },
  {
    name: 'features',
    description: 'Include audio features for each track. Default: false',
  },
  {
    name: 'compact',
    description:
      'Output more compact/minified JSON and save disk space. Default: false',
  },
  {
    name: 'outDir',
    description: 'Custom relative output directory. Default: Current directory',
  },
]);
