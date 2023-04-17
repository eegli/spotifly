import { AuthProvider, RefreshTokenConfig } from '@spotifly/core/provider';
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

export function readConfig(): string | null {
  const curDirConf = join(process.cwd(), configFileName);
  if (existsSync(curDirConf)) return readFileSync(curDirConf, 'utf-8');

  // Fallback dir is home
  const homeDirConf = join(os.homedir(), configFileName);
  if (existsSync(homeDirConf)) return readFileSync(homeDirConf, 'utf-8');

  return null;
}

export function credentialsFromConfig(
  config: string,
  profile: string
): RefreshTokenConfig {
  const parsedConfig = ini.parse(config);
  if (!parsedConfig[profile]) {
    throw new Error(`Profile "${profile}" not found in config`);
  }
  const { spt_client_id, spt_client_secret, spt_refresh_token } =
    parsedConfig[profile];
  if (!spt_client_id || !spt_client_secret || !spt_refresh_token) {
    throw new Error('Missing Spotify credentials');
  }
  return {
    clientId: spt_client_id,
    clientSecret: spt_client_secret,
    refreshToken: spt_refresh_token,
  };
}

export async function getAccessToken(credentials: RefreshTokenConfig) {
  return (await AuthProvider.getAccessToken(credentials)).access_token;
}
