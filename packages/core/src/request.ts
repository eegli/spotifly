import { AxiosResponse } from 'axios';
import { AuthProvider } from './provider';

export type DataResponse<T = unknown> = {
  data: T;
  headers: Record<string, string | number | boolean>;
  statusCode: number;
};
export type DataPromise<T = unknown> = Promise<DataResponse<T>>;

export type WithProvider<P, R> = (
  provider: AuthProvider
) => (params: P) => DataPromise<R>;

export type WithProviderOptional<P, R> = (
  provider: AuthProvider
) => (params?: P) => DataPromise<R>;

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export function transformResponse<T>(res: AxiosResponse<T>): DataResponse<T> {
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status,
  };
}
