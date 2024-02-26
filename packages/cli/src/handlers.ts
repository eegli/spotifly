import { CommandHandler } from '@eegli/tinyparse';
import log from '@spotifly/utils/log';
import { getConfigProfiles } from '@spotifly/utils/profile';
import type { Options } from './cli';

export const profilesHandler: CommandHandler<Options> = () => {
  const profilesAndPath = getConfigProfiles();
  if (!profilesAndPath) {
    log.error('No profiles found, does your config file exist?');
    return;
  }
  const [rawProfiles, configPath] = profilesAndPath;
  const profiles = rawProfiles.map(p => '* ' + p).join('\n');
  const toLog =
    'Available profiles:' +
    '\n\n' +
    profiles +
    '\n\n' +
    'Config file: ' +
    configPath;

  log.log(toLog);
};
