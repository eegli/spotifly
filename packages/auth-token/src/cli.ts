import { authorize } from './authorize';
import { help as defaultHelp, parse } from './config';

export const callback = async (argv: string[]): Promise<void> => {
  const config = await parse(argv);
  await authorize(config);
};

export const help = () =>
  defaultHelp({
    title: 'Command-line usage:',
  });

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');

export const packageName = pkg.name;
export const packageVersion = pkg.version;
