import { profilesFromConfig } from '@spotifly/utils/profile';
import type { Result } from '@spotifly/utils/types';

export const readProfiles = (): Result<string> => {
  const result = profilesFromConfig();
  if (!result.success) {
    return result;
  }
  const { profiles: rawProfiles, configPath } = result.value;
  if (rawProfiles.length === 0) {
    return {
      success: false,
      error: 'Found no valid profiles in ' + configPath,
    };
  }
  const profiles = rawProfiles.map(p => '* ' + p).join('\n');
  const toLog =
    'Available profiles:' +
    '\n\n' +
    profiles +
    '\n\n' +
    'Config file: ' +
    configPath;

  return {
    success: true,
    value: toLog,
  };
};
