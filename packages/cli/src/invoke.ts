import commands from './commands';
import {
  credentialsFromConfig,
  getAccessToken,
  logError,
  profileFromArgv,
  readConfig,
} from './credentials';

export type InvokePackageArgs = {
  callback: (args: string[]) => unknown;
  help: () => string;
  packageName: string;
  packageVersion: string;
};

export const invokePackage = async (
  argv: string[],
  tokenFlag: string | null,
  { callback, help, packageName, packageVersion }: InvokePackageArgs,
): Promise<unknown> => {
  // Invoke package-specific help
  if (argv.includes('--help') || argv.includes('-h')) {
    console.info(commands.packageHelp(packageName, packageVersion, help));
    return;
  }
  // If the package doesn't need a token, just invoke it
  if (!tokenFlag || argv.includes(tokenFlag)) return callback(argv);

  const spotiflyConfig = readConfig();
  if (!spotiflyConfig) return callback(argv);

  const profile = profileFromArgv(argv);
  console.info(`Using profile "${profile}"`);
  try {
    const credentials = credentialsFromConfig(spotiflyConfig, profile);
    const { access_token } = await getAccessToken(credentials);

    return callback([...argv, tokenFlag, access_token]);
  } catch (err) {
    logError(err);
  }
};
