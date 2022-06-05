import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { reqInterceptor, resInterceptor } from './request';

type AuthConfig = {
  type: 'access_token' | 'refresh_token';
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  expiresAt: Date;
  accessToken: string;
};

export type RequestConfig =
  | {
      accessToken: string;
    }
  | {
      refreshToken: string;
      clientId: string;
      clientSecret: string;
    };

export let axiosInstance = axios.create();

export abstract class SpotifyKind {
  protected abstract endpoints: Record<string, Record<string, string | number>>;
  protected axiosInstance: AxiosInstance;
  private auth: AuthConfig;

  constructor(config: RequestConfig) {
    this.auth = {
      type: 'accessToken' in config ? 'access_token' : 'refresh_token',
      clientId: '',
      clientSecret: '',
      refreshToken: '',
      expiresAt: new Date(),
      accessToken: '',
      ...config,
    };

    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.request.use(...reqInterceptor);
    this.axiosInstance.interceptors.response.use(...resInterceptor);

    // Point the internal instance to the external that can be
    // exported and spied on during tests
    axiosInstance = this.axiosInstance;
  }

  protected async request<T>(config: AxiosRequestConfig<T>) {
    if (this.needsNewToken) {
      await this.refreshAccessToken();
    }
    return this.axiosInstance({
      baseURL: 'https://api.spotify.com/v1',
      headers: { Authorization: `Bearer ${this.auth.accessToken}` },
      ...config,
    }) as AxiosPromise<T>;
  }

  private get needsNewToken() {
    return (
      this.auth.type === 'refresh_token' &&
      this.auth.expiresAt &&
      this.auth.expiresAt < new Date()
    );
  }

  private async refreshAccessToken() {
    const { access_token } = await SpotifyKind.getAccessToken(
      this.auth.clientId,
      this.auth.clientSecret,
      this.auth.refreshToken
    );

    // Access tokens expire after 1 hour.
    this.auth.accessToken = access_token;
    this.auth.expiresAt = new Date();

    // Set to expire after 59 minutes 30 seconds so we have time to
    // refresh
    this.auth.expiresAt.setTime(this.auth.expiresAt.getTime() + 59 * 60 * 1000);
  }

  static async getAccessToken(
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
