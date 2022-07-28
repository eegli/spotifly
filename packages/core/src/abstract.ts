import { AxiosResponse } from 'axios';
import { AuthProvider, AuthProviderCtrArgs } from './provider';

type Params = Record<string, unknown>;
type MaybeParams = Params | undefined;
type SomeCallback<T = unknown> = (params: T) => unknown;
export type DataResponse<T = unknown> = {
  data: T;
  headers: Record<string, string | number | boolean>;
  statusCode: number;
};
export type DataPromise<T = unknown> = Promise<DataResponse<T>>;

// https://github.com/microsoft/TypeScript/issues/39556
type BetterOmit<T, E> = {
  [P in keyof T as Exclude<P, E>]: T[P];
};

export type AuthInitOptions = BetterOmit<AuthProviderCtrArgs, 'requestConfig'>;

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
export abstract class BaseEndpoint {
  protected provider: AuthProvider;
  constructor(protected ctrArgs: AuthInitOptions) {
    this.provider = new AuthProvider({
      ...ctrArgs,
      requestConfig: { baseURL: 'https://api.spotify.com/v1' },
    });
  }
}

export abstract class GetEndpoint extends BaseEndpoint {
  abstract get(params: MaybeParams): DataPromise;
}

export abstract class LimitedGetEndpoint extends GetEndpoint {
  abstract limit: number;
}

export abstract class PutEndpoint extends BaseEndpoint {
  abstract put(params: Params): DataPromise;
}

export abstract class PostEndpoint extends BaseEndpoint {
  abstract post(params: Params): DataPromise;
}

export abstract class DeleteEndpoint extends BaseEndpoint {
  abstract delete(params: Params): DataPromise;
}

export function transformResponse<T>(res: AxiosResponse<T>): DataResponse<T> {
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status,
  };
}
