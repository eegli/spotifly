import * as authCli from '@spotifly/auth-token/cli';
import * as libraryCli from '@spotifly/library/cli';
import { colors } from '@spotifly/utils';
import {
  credentialsFromConfig,
  getAccessToken,
  logError,
  profileFromArgv,
  readConfig,
} from './credentials';

export type Invoke = {
  callback: (args: string[]) => unknown;
  help: () => string;
  packageName: string;
  packageHomepage: string;
  packageVersion: string;
};

const invoke = async (
  argv: string[],
  tokenFlag: string | null,
  { callback, help, packageName, packageVersion, packageHomepage }: Invoke
): Promise<unknown> => {
  if (argv.includes('--help') || argv.includes('-h')) {
    console.info(`${colors.bold(
      colors.cyan(`${packageName} v${packageVersion}`)
    )}

${help()}
      
For docs & help, visit ${packageHomepage}
`);
    return;
  }

  if (!tokenFlag || argv.includes(tokenFlag)) return callback(argv);

  const spotiflyConfig = readConfig();
  if (!spotiflyConfig) return callback(argv);

  const profile = profileFromArgv(argv);
  try {
    const credentials = credentialsFromConfig(spotiflyConfig, profile);
    const { access_token } = await getAccessToken(credentials);

    return callback([...argv, tokenFlag, access_token]);
  } catch (err) {
    logError(err);
  }
};

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

Available subcommands: ${colors.green(`
* auth
* library
`)}

Optional flags:
${colors.yellow('* --profile')} [string]
  The profile in your Spotifly config file to use for authentication.
  Defaults to 'default'.

For docs & help, visit ${ownPackage.homepage}`);
      return;
    case 'auth':
      return invoke(args, null, {
        callback: authCli.callback,
        help: authCli.help,
        packageName: authCli.packageName,
        packageHomepage: authCli.packageHomepage,
        packageVersion: authCli.packageVersion,
      });
    case 'library':
      // Library expects the token as a flag
      return invoke(args, '--token', {
        callback: libraryCli.callback,
        help: libraryCli.help,
        packageName: authCli.packageName,
        packageHomepage: authCli.packageHomepage,
        packageVersion: authCli.packageVersion,
      });
    default:
      console.info(
        colors.yellow(
          `Unknown argument '${cmd}'.\nRun 'spotifly --help' for available commands`
        )
      );
  }
};
