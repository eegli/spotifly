import * as colors from './colors';

export default {
  error: (message: string) => {
    console.error(colors.red(message));
  },
  info: (message: string) => {
    console.info(colors.green(message));
  },
  log: (...messages: string[]) => {
    console.log(...messages);
  },
};
