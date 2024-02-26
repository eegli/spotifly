import { existsSync, readFileSync } from 'fs';
import ini from 'ini';
import os from 'os';
import { join } from 'path';

const configFileName = '.spotifly';

function readConfigWithPath(): [string, string] | null {
  let configPath = join(process.cwd(), configFileName);
  if (!existsSync(configPath)) {
    configPath = join(os.homedir(), configFileName);
  }
  if (existsSync(configPath)) {
    return [readFileSync(configPath, 'utf-8'), configPath];
  }
  return null;
}

export function getConfigProfiles(): [string[], string] | null {
  const configWithPath = readConfigWithPath();
  if (!configWithPath) {
    return null;
  }
  const [config, fileLocation] = configWithPath;
  const parsedConfig = ini.parse(config);
  return [Object.keys(parsedConfig), fileLocation];
}

export function tryCredentialsFromConfig(profile: string): {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
} {
  const configWithPath = readConfigWithPath();
  if (!configWithPath) {
    throw new Error('Config file not found');
  }
  const [config] = configWithPath;
  const parsedConfig = ini.parse(config);
  if (!parsedConfig[profile]) {
    throw new Error(`Profile "${profile}" does not exist`);
  }
  const { spt_client_id, spt_client_secret, spt_refresh_token } =
    parsedConfig[profile];
  if (!spt_client_id || !spt_client_secret || !spt_refresh_token) {
    throw new Error('Missing or invalid Spotify credentials');
  }
  return {
    clientId: spt_client_id,
    clientSecret: spt_client_secret,
    refreshToken: spt_refresh_token,
  };
}
