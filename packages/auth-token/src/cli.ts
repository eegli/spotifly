import { authorize } from './authorize';
import { parse } from './config';

export const callback = async (argv: string[]): Promise<void> => {
  const config = await parse(argv);
  await authorize(config);
};

export { default as pkg } from '../package.json';
export { help } from './config';
