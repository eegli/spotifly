import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import { colors } from '@spotifly/utils';
import commands from './commands';
import { invokePackage } from './invoke';

export const run = async (): Promise<unknown> => {
  const cmd = process.argv[2];
  const args = process.argv.slice(3);

  // Package.json cannot be imported as a module, see
  // https://github.com/preconstruct/preconstruct/issues/582
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ownPackage = require('../package.json');
  if (!ownPackage) {
    console.info(colors.red('Could not find root package.json'));
    return;
  }

  switch (cmd) {
    case '--version':
    case '-v':
      console.info(commands.version());
      return;
    case '--help':
    case '-h':
    case undefined:
      console.info(commands.mainHelp());
      return;
    case 'profiles':
      console.info(commands.profiles());
      return;
    case 'auth':
      return invokePackage(args, null, {
        callback: authCli.callback,
        help: authCli.help,
        packageName: authCli.packageName,
        packageVersion: authCli.packageVersion,
      });
    case 'library':
      // Library expects the token as a flag
      return invokePackage(args, '--token', {
        callback: libraryCli.callback,
        help: libraryCli.help,
        packageName: authCli.packageName,
        packageVersion: authCli.packageVersion,
      });
    default:
      console.info(commands.fallback(cmd));
  }
};
