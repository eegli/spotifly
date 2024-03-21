import { profilesFromConfig } from '@spotifly/utils/profile';

export const readProfiles = (): [null, string] | [string, null] => {
  const maybeProfiles = profilesFromConfig();
  if (typeof maybeProfiles === 'string') {
    return [null, maybeProfiles];
  }
  const [rawProfiles, configPath] = maybeProfiles;
  if (rawProfiles.length === 0) {
    return [null, 'No profiles found, does your config file exist?'];
  }
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
