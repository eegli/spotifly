import { createParser } from '@eegli/tinyparse';
import { Options } from './types';

export const defaultConfig: Required<Options> = {
  token: '',
  type: 'light',
  genres: false,
  features: false,
  compact: false,
  outDir: '',
};

export const { parse, help } = createParser(defaultConfig, {
  options: {
    token: {
      required: true,
      description:
        'A Spotify user access token. Requires at least the scope "user-library-read"',
    },
    type: {
      description:
        "Output type per track. Either 'full' or 'light'. Default: 'light'",
      customValidator: {
        isValid(value) {
          return value === 'light' || value === 'full';
        },
        errorMessage(value) {
          return `Invalid value '${value}' for option 'type'. Allowed options are 'full' and 'light'`;
        },
      },
    },
    genres: {
      description: 'Include artist genres for each track. Default: false',
    },
    features: {
      description: 'Include audio features for each track. Default: false',
    },
    compact: {
      description:
        'Output more compact/minified JSON and save disk space. Default: false',
    },
    outDir: {
      description:
        'Custom relative output directory. Default: Current directory',
    },
  },
});
