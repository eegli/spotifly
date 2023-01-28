import { authorize } from './authorize';
import { help as defaultHelp, parse } from './config';

export const callback = async (argv: string[]): Promise<void> => {
  const config = await parse(argv);
  await authorize(config);
};

export const help = defaultHelp({
  title: 'Command-line usage:',
  base: 'token <refresh|access>',
});

export { default as pkg } from '../package.json';
