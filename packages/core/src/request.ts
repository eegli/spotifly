import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type AccessTokenConfig = {
  accessToken: string;
};

type RefreshTokenConfig = {
  refreshToken: string;
  clientId: string;
  clientSecret: string;
};

export type AuthProviderConfig = AccessTokenConfig | RefreshTokenConfig;

export class AuthProvider {
  // Must be smaller than 60 minutes
  private REFRESH_AFTER_SECONDS = 59 * 60;
  private auth: {
    type: 'access_token' | 'refresh_token';
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    expiresAt: Date;
    accessToken: string;
  };

  constructor(config: AuthProviderConfig) {
    this.auth = {
      type: 'accessToken' in config ? 'access_token' : 'refresh_token',
      clientId: '',
      clientSecret: '',
      refreshToken: '',
      expiresAt: new Date(),
      accessToken: '',
      ...config,
    };
  }

  public async request<T>(
    config: AxiosRequestConfig<T>
  ): Promise<AxiosResponse<T>> {
    if (this.needsNewToken) {
      await this.refreshAccessToken();
    }
    return axios({
      baseURL: 'https://api.spotify.com/v1',
      headers: { Authorization: `Bearer ${this.auth.accessToken}` },
      ...config,
    });
  }

  private get needsNewToken() {
    return (
      this.auth.type === 'refresh_token' &&
      this.auth.expiresAt &&
      this.auth.expiresAt < new Date()
    );
  }

  private async refreshAccessToken() {
    const { access_token } = await this.getAccessToken(
      this.auth.clientId,
      this.auth.clientSecret,
      this.auth.refreshToken
    );

    // Access tokens expire after 1 hour.
    this.auth.accessToken = access_token;
    this.auth.expiresAt = new Date();

    // Set to expire after 59 minutes 30 seconds so we have time to
    // refresh
    this.auth.expiresAt.setTime(
      this.auth.expiresAt.getTime() + this.REFRESH_AFTER_SECONDS * 1000
    );
  }

  private async getAccessToken(
    clientId: string,
    clientSecret: string,
    refreshToken: string
  ) {
    return axios
      .post<{
        access_token: string;
        token_type: 'Bearer';
        scope: string;
        expires_in: number;
      }>(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }).toString(),
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            Authorization:
              'Basic ' +
              Buffer.from(clientId + ':' + clientSecret).toString('base64'),
          },
        }
      )
      .then(res => res.data);
  }
}
