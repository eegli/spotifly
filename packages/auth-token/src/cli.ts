import { authorize } from './authorize';
import { parse } from './config';

export const callback = async (): Promise<void> => {
  const config = await parse(process.argv);
  await authorize(config);
};

export { default as pkg } from '../package.json';
export { help } from './config';
