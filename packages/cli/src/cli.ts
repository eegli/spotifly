import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import commands from './commands';
import { invokePackage } from './invoke';

export const run = async (): Promise<unknown> => {
  const cmd = process.argv[2];
  const args = process.argv.slice(3);

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
        pkg: authCli.pkg,
      });
    case 'library':
      // Library expects the token as a flag
      return invokePackage(args, '--token', {
        callback: libraryCli.callback,
        help: libraryCli.help,
        pkg: libraryCli.pkg,
      });
    default:
      console.info(commands.fallback(cmd));
  }
};
