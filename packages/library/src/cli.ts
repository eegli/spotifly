import { help as defaultHelp, parse } from './config';
import { libraryHandler } from './handler';

export const callback = async (argv: string[]): Promise<void> => {
  const config = await parse(argv);
  await libraryHandler(config);
};

export const help = () =>
  defaultHelp({
    title: 'Command-line usage:',
  });

export { default as pkg } from '../package.json';
