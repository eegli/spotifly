import { parse } from './config';
import { libraryHandler } from './handler';

export const callback = async (argv: string[]): Promise<void> => {
  const config = await parse(argv);
  await libraryHandler(config);
};

export { default as pkg } from '../package.json';
export { help } from './config';
