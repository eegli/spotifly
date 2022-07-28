import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import { colors } from '@spotifly/utils';
import ownPackage from '../package.json';

type Invoke = {
  callback: (args: string[]) => unknown;
  help: (title: string) => string;
  pkg: {
    name: string;
    version: string;
    homepage: string;
  };
};

export const invoke = async (
  argv: string[],
  { callback, help, pkg }: Invoke
): Promise<unknown> => {
  if (argv.length < 3) {
    console.info(`${colors.bold(colors.cyan(`${pkg.name} v${pkg.version}`))}

${help('Command-line usage')}
      
  For docs & help, visit ${pkg.homepage}
      `);
    return;
  }
  return callback(argv);
};

export const run = async (): Promise<unknown> => {
  const argv = process.argv.slice(2);
  const cmd = argv[0];

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
- auth-token
- library 
`)}
For docs & help, visit ${ownPackage.homepage}`);
      return;
    case 'auth-token':
      return invoke(argv, {
        callback: authCli.callback,
        help: authCli.help,
        pkg: authCli.pkg,
      });
    case 'library':
      return invoke(argv, {
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
