import { Parser, ValidationError } from '@eegli/tinyparse';
import { AuthProvider } from '@spotifly/core/provider';
import log from '@spotifly/utils/log';
import { tryCredentialsFromConfig } from '@spotifly/utils/profile';

export const options = new Parser()
  .setMeta({
    command: 'spotifly library',
    help: {
      command: 'help',
      longFlag: '--help',
      shortFlag: '-h',
    },
  })
  .option('token', {
    defaultValue: '',
    longFlag: '--token',
    description:
      'A Spotify user access token. Requires at least the scope "user-library-read"',
  })
  .option('type', {
    defaultValue: 'light',
    longFlag: '--type',
    oneOf: ['full'],
    description:
      "Output type per track. Either 'full' or 'light'. Default: 'light'",
  })
  .option('genres', {
    defaultValue: false,
    longFlag: '--genres',
    description: 'Include artist genres for each track. Default: false',
  })
  .option('features', {
    defaultValue: false,
    longFlag: '--features',
    description: 'Include audio features for each track. Default: false',
  })
  .option('since', {
    defaultValue: new Date(0),
    longFlag: '--since',
    description:
      'Only include tracks added after this date. The date string must be formatted according to the ECMAScript Date Time String Format, e.g.: "YYYY-MM-DD". Default: All tracks',
  })
  .option('last', {
    defaultValue: Infinity,
    longFlag: '--last',
    description:
      'Only include the last n (most recent) tracks. Default: All tracks',
  })
  .option('compact', {
    defaultValue: false,
    longFlag: '--compact',
    description:
      'Output more compact/minified JSON and save disk space. Default: false',
  })
  .option('outDir', {
    defaultValue: '',
    longFlag: '--out-dir',
    description: 'Custom relative output directory. Default: Current directory',
  })
  .option('profile', {
    defaultValue: '',
    longFlag: '--profile',
    description:
      'The Spotifly profile to use for the Spotify API. Default: None',
  })
  .setGlobals(async options => {
    let token = options.token; // Might be ""
    if (!token && options.profile) {
      try {
        const credentials = tryCredentialsFromConfig(options.profile);
        const { access_token } = await AuthProvider.getAccessToken(credentials);
        token = access_token;
      } catch (err) {
        if (err instanceof Error) {
          throw new ValidationError(err.message);
        }
      }
    }
    if (!token) {
      throw new ValidationError(
        'No access token provided. Either provide an access token via the --token option or via a Spotifly profile',
      );
    }
    return { token };
  })
  .onError(({ error, usage }) => {
    log.error('Error: ' + error.message);
    log.log(usage);
  });

export type Options = typeof options;
