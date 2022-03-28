type OptionalConfig = {
  port: number;
  scopes: string;
  fileName: string;
  outDir: string;
  noEmit: boolean;
};

type RequiredConfig = {
  clientId: string;
  clientSecret: string;
};

export type Options = RequiredConfig & Partial<OptionalConfig>;
export type DefaultConfig = RequiredConfig & OptionalConfig;

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  refresh_token: string;
  scope: string;
  date_obtained: string;
};
