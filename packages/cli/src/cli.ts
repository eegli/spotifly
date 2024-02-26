import { Parser } from '@eegli/tinyparse';
import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import log from '@spotifly/utils/log';
import { profilesHandler } from './handlers';

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
    shortFlag: '-v',
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
    handler: profilesHandler,
  })
  .subparser('auth', {
    description: 'Authenticate with Spotify',
    parser: authCli.parser,
  })
  .subparser('library', {
    description: 'Manage your Spotify library',
    parser: libraryCli.parser,
  })
  .onError((err, usage) => {
    log.error('Error: ' + err.message);
    log.log(usage);
  })
  .defaultHandler(({ usage }) => {
    log.log(usage);
  });

export const run = async (): Promise<unknown> => {
  return parser.parse(process.argv.slice(2)).call();
};

export type Options = typeof options;
