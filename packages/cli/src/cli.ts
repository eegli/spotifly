import { Parser } from '@eegli/tinyparse';
import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import log from '@spotifly/utils/log';
import { readProfiles } from './profiles';

// Package.json cannot be imported as a module, see
// https://github.com/preconstruct/preconstruct/issues/582
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { description, version } = require('../package.json');

const options = new Parser().setMeta({
  command: 'spotifly',
  summary: description,
  version: {
    version: version,
    longFlag: '--version',
    shortFlag: '-V',
  },
  help: {
    command: 'help',
    longFlag: '--help',
    shortFlag: '-h',
  },
});

const parser = options
  .subcommand('profiles', {
    description: 'List available profiles',
    args: [] as const,
    handler: () => {
      const [profiles, error] = readProfiles();
      if (error) log.error(error);
      else log.info(profiles!);
    },
  })
  .subparser('auth', {
    description: 'Authenticate with Spotify',
    parser: authCli.parser,
  })
  .subparser('library', {
    description: 'Manage your Spotify library',
    parser: libraryCli.parser,
  })
  .onError(({ error, usage }) => {
    log.error('Error: ' + error.message);
    log.log(usage);
  })
  .defaultHandler(() => {
    log.error("Please provide a valid command, or use 'spotifly help'");
  });

export const run = async (args: string[]): Promise<unknown> => {
  return parser.parse(args).call();
};
