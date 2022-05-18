import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { cache } from '../cache';
import { MapCollection } from '../types';
import { endpointsv1, ReqLimit, ReqUrl } from './query';

export type RequestConfig = {
  accessToken: string;
};

export class Pagination {
  limit: number;
  offset: number = 0;
  hasNextPage: boolean = true;

  constructor(requestLimit = 0) {
    this.limit = requestLimit;
  }

  next(maybeNextPage: unknown) {
    this.offset += this.limit;
    this.hasNextPage = !!maybeNextPage;
  }
}

export class Collectible<T> {
  constructor(private readonly collection: MapCollection<T>) {}
  clear(): void {
    this.collection.clear();
  }
  size(): number {
    return this.collection.size;
  }
  toList(): T[] {
    return structuredClone([...this.collection.values()]);
  }
  toMap(): MapCollection<T> {
    return structuredClone(this.collection);
  }
}

function beforeRequest<T extends AxiosRequestConfig>(config: T): T {
  return config;
}

function beforeResponse<T extends AxiosResponse>(response: T): T {
  return response;
}

const reqInterceptor: Parameters<typeof axios.interceptors.request.use> = [
  // Do something before request is sent
  config => beforeRequest(config),
  // Do something with request error
  // Apparently, the error handler is used if the interceptor throws:
  // https://github.com/axios/axios/issues/2509
  error => Promise.reject(error),
];

const resInterceptor: Parameters<typeof axios.interceptors.response.use> = [
  response => beforeResponse(response),
  async error => Promise.reject(error),
];

export abstract class SpotifyKind<E = Record<string, ReqUrl & ReqLimit>> {
  protected config: Required<RequestConfig> = {
    accessToken: '',
  };
  protected request: AxiosInstance;
  protected cache = cache;
  protected endpoints = endpointsv1;
  public abstract get collection(): Record<string, Collectible<unknown>>;

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
