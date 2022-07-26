import { AuthProvider } from './provider';

type MaybeParams = Record<string, unknown> | undefined;
type SomeCallback<T = unknown> = (params: T) => unknown;
type SomePromise = Promise<unknown>;

export abstract class BaseEndpoint {
  constructor(protected provider: AuthProvider) {}
}

export abstract class GetEndpoint extends BaseEndpoint {
  abstract get(args: MaybeParams): SomePromise;
}

export abstract class PaginatedGetEndpoint extends GetEndpoint {
  abstract all(pageCallback?: SomeCallback): SomePromise;
}
