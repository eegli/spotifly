import { createParser } from '@eegli/tinyparse';
import { DefaultConfig } from './types';

export const defaultConfig: DefaultConfig = {
  clientId: '',
  clientSecret: '',
  port: 3000,
  noEmit: false,
  outDir: '',
  fileName: 'spotify-token',
  scopes: 'user-read-email',
};

export const { parse, help } = createParser(defaultConfig, [
  {
    name: 'clientId',
    required: true,
    description: 'The client id of your Spotify application',
    shortFlag: '-ci',
  },
  {
    name: 'clientSecret',
    required: true,
    description: 'The client secret of your Spotify application',
    shortFlag: '-cs',
  },
  {
    name: 'scopes',
    shortFlag: '-s',
    description:
      'Spotify authorization scopes. Multiple scopes need to be separated by a space. Default: "user-read-email"',
  },
  {
    name: 'port',
    shortFlag: '-p',
    description: 'Port for the localhost redirect URL. Default: 3000',
  },
  {
    name: 'outDir',
    shortFlag: '-o',
    description: 'Custom relative output directory. Default: Current directory',
  },
  {
    name: 'fileName',
    shortFlag: '-f',
    description:
      'Custom name for the output JSON file. Default: "spotify-token"',
  },
  {
    name: 'noEmit',
    description:
      'When set to true, does not save the token to the file system. Default: false',
  },
]);
