import { Parser, ValidationError } from '@eegli/tinyparse';
import { AuthProvider } from '@spotifly/core/provider';
import log from '@spotifly/utils/log';
import { credentialsFromConfig } from '@spotifly/utils/profile';

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
    defaultValue: 'default',
    longFlag: '--profile',
    description:
      'The Spotifly profile to use for the Spotify API. Default profile: "default"',
  })
  .setGlobals(async parsedOptions => {
    let token = parsedOptions.token; // Might be ""
    if (!token) {
      const result = credentialsFromConfig(parsedOptions.profile);
      if (!result.success) {
        throw new ValidationError(
          `Could not read credentials for profile ${parsedOptions.profile} from configuration file`,
        );
      }
      const { access_token } = await AuthProvider.getAccessToken(result.value);
      token = access_token;
    }
    return { token };
  })
  .onError(({ error, usage }) => {
    log.error('Error: ' + error.message);
    log.log(usage);
  });

export type Options = typeof options;
