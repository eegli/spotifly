import {
  AuthProvider,
  RefreshTokenConfig,
  RequestError,
} from '@spotifly/core/provider';
import { colors } from '@spotifly/utils';
import { existsSync, readFileSync } from 'fs';
import ini from 'ini';
import os from 'os';
import { join } from 'path';

const configFileName = '.spotifly';

export function profileFromArgv(argv: string[]): string {
  const withProfile = argv.indexOf('--profile');
  if (withProfile === -1) return 'default';
  return argv[withProfile + 1];
}

export function readConfigWithPath(): [string, string] | null {
  let configPath = join(process.cwd(), configFileName);
  if (!existsSync(configPath)) {
    configPath = join(os.homedir(), configFileName);
  }
  if (existsSync(configPath)) {
    const parsed = readFileSync(configPath, 'utf-8');
    return [parsed, configPath];
  }
  return null;
}

export function readConfig() {
  const configAndPath = readConfigWithPath();
  if (!configAndPath) return null;
  return configAndPath[0];
}

export function credentialsFromConfig(
  config: string,
  profile: string,
): RefreshTokenConfig {
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

export async function getAccessToken(credentials: RefreshTokenConfig) {
  return AuthProvider.getAccessToken(credentials);
}

export function logError(error: unknown) {
  if (error instanceof RequestError) {
    console.error(colors.red(`Error: ${error.message}`));
    console.error(error.response?.data);
  } else if (error instanceof Error) {
    console.error(colors.red(`Error: ${error.message}`));
  }
}
