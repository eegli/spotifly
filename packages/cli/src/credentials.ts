import { AuthProvider, RefreshTokenConfig } from '@spotifly/core/provider';
import { existsSync, readFileSync } from 'fs';
import ini from 'ini';
import os from 'os';
import { join } from 'path';

enum ConfigLocation {
  Home,
  Current,
  None,
}

const configFileName = '.spotifly';

export function profileFromArgv(argv: string[]): string {
  const withProfile = argv.indexOf('--profile');
  if (withProfile === -1) return 'default';
  return argv[withProfile + 1];
}

function configLocaton(): ConfigLocation {
  return existsSync(join(process.cwd(), configFileName))
    ? ConfigLocation.Current
    : existsSync(join(os.homedir(), configFileName))
    ? ConfigLocation.Home
    : ConfigLocation.None;
}

export function readConfig(): string | null {
  const configLoc = configLocaton();

  if (configLoc === ConfigLocation.None) return null;

  // Fallback dir is home
  let path = join(os.homedir(), configFileName);
  // Current directory overrides
  if (configLoc === ConfigLocation.Current) {
    path = join(process.cwd(), configFileName);
  }
  return readFileSync(path, 'utf-8');
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
