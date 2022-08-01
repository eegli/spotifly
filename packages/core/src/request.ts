import { AxiosResponse } from 'axios';
import { AuthProvider } from './provider';

export type DataResponse<T = unknown> = {
  data: T;
  headers: Record<string, string | number | boolean>;
  statusCode: number;
};
export type DataPromise<T = unknown> = Promise<DataResponse<T>>;

export type AsyncFn<Return, Required, Optional = unknown> = (
  required: Required,
  optional?: Partial<Optional>
) => DataPromise<Return>;

export type AsyncFnWithProvider<Return, Required, Optional = unknown> = (
  provider: AuthProvider
) => AsyncFn<Return, Required, Optional>;

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
