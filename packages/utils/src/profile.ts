import { existsSync, readFileSync } from 'fs';
import ini from 'ini';
import os from 'os';
import { join } from 'path';

const configFileName = '.spotifly';

// Wrap in a helper object for testing
export const helpers = {
  readConfigWithPath(): [string, string] | null {
    let configPath = join(process.cwd(), configFileName);
    if (!existsSync(configPath)) {
      configPath = join(os.homedir(), configFileName);
    }
    if (existsSync(configPath)) {
      return [readFileSync(configPath, 'utf-8'), configPath];
    }
    return null;
  },
};

type ProfileEntry = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
};

type ProfileMap = Map<string, ProfileEntry>;
type Error = string;

function collectProfiles(profiles: Record<string, unknown>): ProfileMap {
  return Object.entries(profiles).reduce((acc, [key, value]) => {
    if (
      typeof value === 'object' &&
      value !== null &&
      'spt_client_id' in value &&
      'spt_client_secret' in value &&
      'spt_refresh_token' in value &&
      typeof value.spt_client_id === 'string' &&
      typeof value.spt_client_secret === 'string' &&
      typeof value.spt_refresh_token === 'string'
    ) {
      acc.set(key, {
        clientId: value.spt_client_id,
        clientSecret: value.spt_client_secret,
        refreshToken: value.spt_refresh_token,
      });
    }
    return acc;
  }, new Map<string, ProfileEntry>());
}

function readConfig():
  | {
      profiles: ProfileMap;
      configPath: string;
    }
  | Error {
  const configWithPath = helpers.readConfigWithPath();
  if (!configWithPath) {
    return 'Config file not found';
  }
  const [config, configPath] = configWithPath;
  const profiles = collectProfiles(ini.parse(config));
  return {
    profiles,
    configPath,
  };
}

export function profilesFromConfig(): [string[], string] | Error {
  const configOrError = readConfig();
  if (typeof configOrError === 'string') {
    return configOrError;
  }
  const { profiles, configPath } = configOrError;
  return [[...profiles.keys()], configPath];
}

export function credentialsFromConfig(profile: string): ProfileEntry | Error {
  const configOrError = readConfig();
  if (typeof configOrError === 'string') {
    return configOrError;
  }
  const profileEntry = configOrError.profiles.get(profile);
  if (!profileEntry) {
    return `Profile "${profile}" does not exist or is missing credentials`;
  }
  return profileEntry;
}
