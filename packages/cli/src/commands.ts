import { colors as c } from '@spotifly/utils';
import ini from 'ini';
import pkg from '../package.json';
import { readConfigWithPath } from './credentials';

const lb = '\n';
const lblb = '\n\n';

const versionHeader = (name: string, version: string) => {
  return c.bold(c.cyan(`${name} v${version}`));
};
const helpFooter = (homepage: string) => {
  return `For docs & help, visit ${homepage}`;
};
const profiles = () => {
  try {
    const spotiflyConfigAndPath = readConfigWithPath();
    if (!spotiflyConfigAndPath) throw new Error();
    const [config, configPath] = spotiflyConfigAndPath;
    const parsedConfig = ini.parse(config);
    const profiles = Object.keys(parsedConfig)
      .map(p => '* ' + p)
      .join('\n');
    return `Available profiles:
      
${c.green(profiles)}
      
Config file: ${configPath}`;
  } catch (err) {
    return 'No profiles found, does your config file exist?';
  }
};
const fallback = (cmd: string) => {
  return (
    c.yellow(`Unknown argument '${cmd}'`) +
    lblb +
    "Run 'spotifly --help' for available commands"
  );
};
const subCommands = `Available subcommands: ${c.green(`
* auth 
* library
* profiles
`)}
Optional global flags:
${c.yellow('* --profile')} [string]
The profile in your Spotifly config file to use for authentication.
Defaults to 'default'.

- In order to get help for a specific subcommand, run ${c.green(
  'spotifly <subcommand> --help',
)}
- In order to see a list of available profiles, run ${c.green(
  'spotifly profiles',
)}`;

export default {
  packageHelp(
    packageName: string,
    packageVersion: string,
    packageSpecificHelp: () => string,
  ) {
    return (
      versionHeader(packageName, packageVersion) +
      lblb +
      packageSpecificHelp() +
      lblb +
      helpFooter(pkg.homepage)
    );
  },
  mainHelp() {
    return (
      versionHeader(pkg.name, pkg.version) +
      lb +
      `- ${pkg.description}` +
      lblb +
      subCommands +
      lblb +
      helpFooter(pkg.homepage)
    );
  },
  profiles,
  version() {
    return versionHeader(pkg.name, pkg.version);
  },
  fallback(cmd: string) {
    return fallback(cmd);
  },
};
