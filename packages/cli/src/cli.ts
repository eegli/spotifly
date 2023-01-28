import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';

import { colors } from '@spotifly/utils';
import ownPackage from '../package.json';

export type Invoke = {
  callback: (args: string[]) => unknown;
  help: string;
  pkg: {
    name: string;
    version: string;
    homepage: string;
  };
};

const invoke = async (
  argv: string[],
  { callback, help, pkg }: Invoke
): Promise<unknown> => {
  if (argv.length <= 3) {
    console.info(`${colors.bold(colors.cyan(`${pkg.name} v${pkg.version}`))}

${help}
      
For docs & help, visit ${pkg.homepage}
`);
    return;
  }
  return callback(argv);
};

export const run = async (): Promise<unknown> => {
  const cmd = process.argv[2];

  switch (cmd) {
    case '--version':
    case '-v':
      console.info(
        `${colors.bold(
          colors.cyan(`${ownPackage.name} v${ownPackage.version}`)
        )}`
      );
      return;
    case '--help':
    case '-h':
    case undefined:
      console.info(`${colors.bold(
        colors.cyan(`${ownPackage.name} v${ownPackage.version}`)
      )}
- ${ownPackage.description}

Available commands: ${colors.green(`
- auth
- library
`)}
For docs & help, visit ${ownPackage.homepage}`);
      return;
    case 'auth-token': // Legacy
    case 'auth':
      return invoke(process.argv, {
        callback: authCli.callback,
        help: authCli.help,
        pkg: authCli.pkg,
      });
    case 'library':
      return invoke(process.argv, {
        callback: libraryCli.callback,
        help: libraryCli.help,
        pkg: libraryCli.pkg,
      });
    default:
      console.info(
        colors.yellow(
          `Unknown argument '${cmd}'.\nRun 'spotifly --help' for available commands`
        )
      );
  }
};
