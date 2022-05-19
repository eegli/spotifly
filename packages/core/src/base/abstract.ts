import axios, { AxiosInstance } from 'axios';
import { cache } from '../cache';
import { endpointsv1 } from './query';

export type RequestConfig = {
  accessToken: string;
};

const reqInterceptor: Parameters<typeof axios.interceptors.request.use> = [
  // Do something before request is sent
  config => config,
  // Do something with request error
  // Apparently, the error handler is used if the interceptor throws:
  // https://github.com/axios/axios/issues/2509
  error => Promise.reject(error),
];

const resInterceptor: Parameters<typeof axios.interceptors.response.use> = [
  response => response,
  async error => Promise.reject(error),
];

export abstract class SpotifyKind {
  protected config: Required<RequestConfig> = {
    accessToken: '',
  };
  protected request: AxiosInstance;
  protected cache = cache;
  protected endpoints = endpointsv1;

  constructor(config: RequestConfig) {
    this.config = { ...this.config, ...config };
    const request = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      headers: { Authorization: `Bearer ${this.config.accessToken}` },
    });

    request.interceptors.request.use(...reqInterceptor);
    request.interceptors.response.use(...resInterceptor);
    this.request = request;
  }
}
