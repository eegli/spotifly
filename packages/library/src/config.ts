import { createParser } from '@eegli/tinyparse';
import { Options } from './types';

const ZERO_DATE = new Date(0);

export const defaultConfig: Required<Options> = {
  token: '',
  type: 'light',
  genres: false,
  features: false,
  compact: false,
  outDir: '',
  since: ZERO_DATE.toISOString(),
  last: Infinity,
};

export const { parse, help } = createParser(defaultConfig, {
  decamelize: true,
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
        isValid(value): value is 'light' | 'full' {
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
    since: {
      description:
        'Only include tracks added after this date. The date string must be formatted according to the ECMAScript Date Time String Format, e.g.: "YYYY-MM-DD". Default: All tracks',
      customValidator: {
        isValid(value): value is string {
          if (typeof value !== 'string') return false;
          return !isNaN(new Date(value).getTime());
        },
        errorMessage(value) {
          return `Invalid value '${value}' for option 'since'. Expected a valid date string`;
        },
      },
    },
    last: {
      description:
        'Only include the last n (most recent) tracks. Default: All tracks',
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
