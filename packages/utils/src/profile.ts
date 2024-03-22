import { existsSync, readFileSync } from 'fs';
import ini from 'ini';
import os from 'os';
import { join } from 'path';
import type { Result } from './types';

const configFileName = '.spotifly';

type ProfileEntry = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
};

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

function collectProfiles(
  profiles: Record<string, unknown>,
): Map<string, ProfileEntry> {
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

function readConfig(): Result<{
  profiles: Map<string, ProfileEntry>;
  configPath: string;
}> {
  const configWithPath = helpers.readConfigWithPath();
  if (!configWithPath) {
    return {
      success: false,
      error: 'Config file not found',
    };
  }
  const [config, configPath] = configWithPath;
  const profiles = collectProfiles(ini.parse(config));
  return {
    success: true,
    value: {
      profiles,
      configPath,
    },
  };
}

export function profilesFromConfig(): Result<[string[], string]> {
  const valueOrError = readConfig();
  if (!valueOrError.success) {
    return valueOrError;
  }
  const { configPath, profiles } = valueOrError.value;
  return {
    success: true,
    value: [[...profiles.keys()], configPath],
  };
}

export function credentialsFromConfig(profile: string): Result<ProfileEntry> {
  const valueOrError = readConfig();
  if (!valueOrError.success) {
    return valueOrError;
  }
  const profileEntry = valueOrError.value.profiles.get(profile);
  if (!profileEntry) {
    return {
      success: false,
      error: `Profile "${profile}" does not exist or is missing credentials`,
    };
  }
  return { success: true, value: profileEntry };
}
