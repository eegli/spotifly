import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type { AxiosResponse } from 'axios';

export type DataResponse<T = unknown> = {
  data: T;
  headers: Record<string, string>;
  statusCode: number;
};
export type DataPromise<T = unknown> = Promise<DataResponse<T>>;

export type AsyncProvider = {
  request<T>(req: AxiosRequestConfig<T>): Promise<AxiosResponse<T>>;
};

export type AsyncFn<
  Return extends unknown,
  Required extends unknown,
  Optional extends AnyObject | undefined = undefined
> = Optional extends undefined
  ? (required: Required) => DataPromise<Return>
  : (required: Required, optional?: Partial<Optional>) => DataPromise<Return>;

export type AnyObject = Record<never, never>;

export type AsyncFnWithProvider<
  Return extends unknown,
  Required extends unknown,
  Optional extends AnyObject | undefined = undefined
> = (provider: AsyncProvider) => AsyncFn<Return, Required, Optional>;

export type Permutations<
  T extends string,
  U extends string = T
> = T extends unknown ? T | `${T},${Permutations<Exclude<U, T>>}` : never;

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<T, E> = {
  [P in keyof T as Exclude<P, E>]: T[P];
};

export type OmitFromAsyncFnParams<
  F extends (...args: any[]) => unknown,
  O extends AnyObject
> = F extends (arg1: infer A, arg2: infer B) => unknown
  ? [A, BetterOmit<B, keyof O>?]
  : never;

export type ReadOnlyParams<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer P
) => unknown
  ? Readonly<P>
  : never;

export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;
