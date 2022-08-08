import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type { AxiosResponse } from 'axios';

export type DataResponse<T = unknown> = {
  data: T;
  headers: Record<string, string | number | boolean>;
  statusCode: number;
};
export type DataPromise<T = unknown> = Promise<DataResponse<T>>;

export type AsyncProvider = {
  request<T>(req: AxiosRequestConfig<T>): Promise<AxiosResponse<T>>;
};

export type AsyncFn<Return, Required, Optional = unknown> = (
  required: Required,
  optional?: Partial<Optional>
) => DataPromise<Return>;

export type AsyncFnWithProvider<Return, Required, Optional = unknown> = (
  provider: AsyncProvider
) => AsyncFn<Return, Required, Optional>;

export type Permutations<
  T extends string,
  U extends string = T
> = T extends unknown ? T | `${T},${Permutations<Exclude<U, T>>}` : never;

export type AnyObject = Record<never, never>;
export type AnyArr = readonly unknown[];

export type OmitFromIterable<
  T extends readonly unknown[],
  K extends string
> = T extends [infer First, ...infer Rest]
  ? AnyObject extends First
    ? [Omit<First, K>, ...OmitFromIterable<Rest, K>]
    : [First, ...OmitFromIterable<Rest, K>]
  : T;

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<T, E> = {
  [P in keyof T as Exclude<P, E>]: T[P];
};

export type ReadOnlyParams<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer P
) => unknown
  ? Readonly<P>
  : never;
