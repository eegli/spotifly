import { cli as authCli } from '@spotifly/auth-token/cli';
import { cli as libraryCli } from '@spotifly/library/cli';
import { colors } from '@spotifly/utils';
import pkg from '../package.json';

const info = (msg: string) => console.info(colors.yellow(msg));

const execute = async (cmd: string): Promise<void> => {
  process.argv.splice(2, 1);
  switch (cmd) {
    case 'auth-token':
      return authCli();
    case 'library':
      return libraryCli();
    default:
      info("Unknown command. Run 'spotifly --help' for available commands");
  }
};

export const cli = async (): Promise<void> => {
  const cmd = process.argv[2];

  switch (cmd) {
    case '--version':
    case '-v':
      info(`${pkg.name} v${pkg.version}`);
      break;
    case '--help':
    case '-h':
    case undefined:
      info(`
Spotifly v${pkg.version}
    
- ${pkg.description}

Available commands:
  - auth-token
  - library
    
For docs & help, visit ${pkg.homepage}
            `);
      break;
    default:
      return execute(cmd);
  }
};
