import { AuthProvider, AuthProviderCtrArgs } from './provider';

type Params = Record<string, unknown>;
type MaybeParams = Params | undefined;
type SomeCallback<T = unknown> = (params: T) => unknown;
type SomePromise = Promise<unknown>;

// https://github.com/microsoft/TypeScript/issues/39556
type BetterOmit<T, E> = {
  [P in keyof T as Exclude<P, E>]: T[P];
};

export type AuthInitOptions = BetterOmit<AuthProviderCtrArgs, 'requestConfig'>;

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
  abstract get(params: MaybeParams): SomePromise;
}

export abstract class PaginatedGetEndpoint extends GetEndpoint {
  abstract getAll(pageCallback?: SomeCallback): SomePromise;
}

export abstract class PutEndpoint extends BaseEndpoint {
  abstract put(params: Params): SomePromise;
}

export abstract class PostEndpoint extends BaseEndpoint {
  abstract post(params: Params): SomePromise;
}

export abstract class DeleteEndpoint extends BaseEndpoint {
  abstract delete(params: Params): SomePromise;
}
