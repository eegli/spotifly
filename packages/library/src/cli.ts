import { options } from './config';
import { libraryHandler } from './handler';

export const parser = options.defaultHandler(libraryHandler);
