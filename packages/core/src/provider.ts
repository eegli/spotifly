import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AsyncProvider } from './types';

export type AccessTokenConfig = {
  accessToken: string;
};

export type RefreshTokenConfig = {
  refreshToken: string;
  clientId: string;
  clientSecret: string;
};

export type AuthProviderOptions = AccessTokenConfig | RefreshTokenConfig;

export class AuthProvider implements AsyncProvider {
  // Must be smaller than 60 minutes
  private REFRESH_AFTER_SECONDS = 59 * 60;

  private axios: AxiosInstance;

  private auth: {
    type: 'access_token' | 'refresh_token';
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    accessToken: string;
    expiresAt: Date;
  };

  constructor(ctrArgs: AuthProviderOptions) {
    this.axios = axios.create({
      baseURL: 'https://api.spotify.com/v1',
    });

    this.auth = {
      type: 'accessToken' in ctrArgs ? 'access_token' : 'refresh_token',
      accessToken: '',
      expiresAt: new Date(),
      clientId: '',
      clientSecret: '',
      refreshToken: '',
      ...ctrArgs,
    };
  }

  public async request<T>(
    req: AxiosRequestConfig<T>
  ): Promise<AxiosResponse<T>> {
    if (this.needsNewToken) {
      await this.refreshAccessToken();
    }
    return this.axios({
      ...req,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${this.auth.accessToken}`,
      },
    });
  }

  private get needsNewToken() {
    if (this.auth.type === 'access_token') return false;
    return !this.auth.accessToken || this.auth.expiresAt < new Date();
  }

  private async refreshAccessToken() {
    const { access_token } = await AuthProvider.getAccessToken({
      clientId: this.auth.clientId,
      clientSecret: this.auth.clientSecret,
      refreshToken: this.auth.refreshToken,
    });

    // Access tokens expire after 1 hour.
    this.auth.accessToken = access_token;
    this.auth.expiresAt = new Date();

    // Set to expire after 59 minutes 30 seconds so we have time to
    // refresh
    this.auth.expiresAt.setTime(
      this.auth.expiresAt.getTime() + this.REFRESH_AFTER_SECONDS * 1000
    );
  }

  public static getAccessToken({
    clientId,
    clientSecret,
    refreshToken,
  }: RefreshTokenConfig) {
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
