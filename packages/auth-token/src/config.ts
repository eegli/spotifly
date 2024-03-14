import { Parser } from '@eegli/tinyparse';
import log from '@spotifly/utils/log';

export const options = new Parser()
  .setMeta({
    command: 'spotifly auth',
    help: {
      command: 'help',
      longFlag: '--help',
      shortFlag: '-h',
    },
  })
  .option('clientId', {
    required: true,
    longFlag: '--client-id',
    defaultValue: '',
    description: 'The client id of your Spotify application',
  })
  .option('clientSecret', {
    required: true,
    longFlag: '--client-secret',
    defaultValue: '',
    description: 'The client secret of your Spotify application',
  })
  .option('scopes', {
    longFlag: '--scopes',
    shortFlag: '-s',
    defaultValue: 'user-read-email',
    description:
      'Spotify authorization scopes. Multiple scopes need to be separated by a space',
  })
  .option('port', {
    longFlag: '--port',
    shortFlag: '-p',
    defaultValue: 3000,
    description: 'Port for the localhost redirect URL',
  })
  .option('outDir', {
    longFlag: '--out-dir',
    shortFlag: '-o',
    defaultValue: '',
    description: 'Custom relative output directory',
  })
  .option('fileName', {
    longFlag: '--file-name',
    shortFlag: '-f',
    defaultValue: 'spotify-token',
    description: 'Custom name for the output JSON file',
  })
  .option('noEmit', {
    longFlag: '--no-emit',
    defaultValue: false,
    description: 'When set to true, does not save the token to the file system',
  })
  .onError(({ error, usage }) => {
    log.error('Error: ' + error.message);
    log.log(usage);
  });

export type Options = typeof options;
