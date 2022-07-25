import { parse } from './config';
import { getLibrary } from './library';

export const callback = async (): Promise<void> => {
  const config = await parse(process.argv);
  await getLibrary(config);
};

export { default as pkg } from '../package.json';
export { help } from './config';
