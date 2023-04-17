import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import { colors } from '@spotifly/utils';
import ownPackage from '../package.json';
import {
  credentialsFromConfig,
  getAccessToken,
  profileFromArgv,
  readConfig,
} from './credentials';

export type Invoke = {
  callback: (args: string[]) => unknown;
  help: () => string;
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
  if (argv.includes('--help') || argv.includes('-h')) {
    console.info(`${colors.bold(colors.cyan(`${pkg.name} v${pkg.version}`))}

${help()}
      
For docs & help, visit ${pkg.homepage}
`);
    return;
  }

  const spotiflyConfig = readConfig();
  if (!spotiflyConfig) return callback(argv);
  const profile = profileFromArgv(argv);

  try {
    const credentials = credentialsFromConfig(spotiflyConfig, profile);
    const accessToken = await getAccessToken(credentials);
    // Packages that requrie authentication will have a --token argument
    return callback([...argv, '--token', accessToken]);
  } catch (err) {
    console.error(err);
  }
};

export const run = async (): Promise<unknown> => {
  const cmd = process.argv[2];
  const args = process.argv.slice(3);

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
    case 'auth':
      return invoke(args, {
        callback: authCli.callback,
        help: authCli.help,
        pkg: authCli.pkg,
      });
    case 'library':
      return invoke(args, {
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
