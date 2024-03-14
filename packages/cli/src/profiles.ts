import { getConfigProfiles } from '@spotifly/utils/profile';

export const readProfiles = (): [null, string] | [string, null] => {
  const profilesAndPath = getConfigProfiles();
  if (!profilesAndPath) {
    return [null, 'No profiles found, does your config file exist?'];
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

  return [toLog, null];
};
