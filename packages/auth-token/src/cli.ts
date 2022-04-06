import { ValidationError } from '@eegli/tinyparse';
import { colors } from '@spotifly/utils';
import pkg from '../package.json';
import { authorize } from './authorize';
import { help, parse } from './config';

export const execute = async (): Promise<void> => {
  try {
    const config = await parse(process.argv.slice(2));
    await authorize(config);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.error(colors.red('Error: ' + err.message));
    } else {
      throw err;
    }
  }
};

export const cli = async (): Promise<void> => {
  if (process.argv.length < 3) {
    console.info(
      `
${colors.yellow(`${pkg.name} v${pkg.version}`)}

${help('CLI Usage')}

For docs & help, visit ${pkg.homepage}.
`
    );
    return;
  }

  return execute();
};
