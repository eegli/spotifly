import { authorize } from './authorize';
import { options } from './config';

export const parser = options.defaultHandler(authorize);
