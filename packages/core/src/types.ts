import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type DataResponse<Data = unknown> = {
  data: Data;
  headers: Record<string, string>;
  statusCode: number;
};

export type DataPromise<Data = unknown> = Promise<DataResponse<Data>>;

export type AsyncProvider = {
  request(req: AxiosRequestConfig): Promise<AxiosResponse>;
};

export type SpotifyError = {
  error: {
    status: number;
    message: string;
  };
};

export type AsyncFn<
  ReturnValue,
  Param1 = undefined,
  Param2 = undefined,
  Param3 = undefined,
  Response = DataPromise<ReturnValue>
> = [Param1] extends [undefined]
  ? () => Response
  : [Param2] extends [undefined]
  ? (required: Param1) => Response
  : [Param3] extends [undefined]
  ? [Param2] extends [AnyObject]
    ? (required: Param1, optional?: Partial<Param2>) => Response
    : (required1: Param1, required2: Param2) => Response
  : [Param3] extends [AnyObject]
  ? (
      required1: Param1,
      required2: Param2,
      optional?: Partial<Param3>
    ) => Response
  : never;

export type AsyncFnWithProvider<
  ReturnValue,
  Param1 = undefined,
  Param2 = undefined,
  Param3 = undefined
> = (provider: AsyncProvider) => AsyncFn<ReturnValue, Param1, Param2, Param3>;

export type AnyObject = Record<string, unknown>;

export type EmptyObject = Record<never, never>;

export type LiteralUnion<T extends string> = T | (string & EmptyObject);

export type AnyFunc = (...args: any[]) => unknown;

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<Type, Key> = {
  [P in keyof Type as Exclude<P, Key>]: Type[P];
};

export type KeysMatching<Type, Value> = {
  [Key in keyof Type]-?: Type[Key] extends Value ? Key : never;
}[keyof Type];

export type OmitFromAsyncFnParams<
  Func extends AnyFunc,
  Obj extends AnyObject
> = Func extends (arg1: infer FirstArg, arg2: infer SecondArg) => unknown
  ? [FirstArg, BetterOmit<SecondArg, keyof Obj>?]
  : never;

export type ReadOnlyParams<Func extends AnyFunc> = Func extends (
  ...args: infer Params
) => unknown
  ? Readonly<Params>
  : never;
