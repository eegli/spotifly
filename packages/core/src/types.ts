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

// Prevent distributivity on conditional generic types: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
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

export type AnyFunc = (...args: any[]) => unknown;

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<Type, Key> = {
  [P in keyof Type as Exclude<P, Key>]: Type[P];
};

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

// Branded types - T = T & {} - improve IntelliSense experience
// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377
type _ = Record<never, never>;
export type UserId = string & _;
export type ArtistId = string & _;
export type TrackId = string & _;
export type AlbumId = string & _;
export type EpisodeId = string & _;
export type ShowId = string & _;

export type PlaylistId = string & _;
export type CategoryId = string & _;
export type DeviceId = string & _;
export type Uri = string & _;
export type State = boolean & _;

export type PositionMS = number & _;
export type VolumePercent = number & _;

export type Params = {
  market: string;
  locale: string;
  country: string;
  timestamp: string;
  additional_types: string;
  snapshot_id: string;
  device_id: string;
  fields: string;
  time_range: 'long_term ' | 'medium_term' | 'short_term';
  include_groups: string;
  context_uri: string;
  name: string;
  description: string;
  public: boolean;
  collaborative: boolean;
  play: boolean;
  state: boolean;
  uris: Uri[];
  after: string;
  range_start: number;
  insert_before: number;
  range_length: number;
  include_external: 'audio';
  limit: number;
  offset: number;
  position: number;
  position_ms: number;
};

type SinglePropertyResponse<Key extends string> = {
  [Property in Key]: string[];
};

// TODO Types

export type AvailableMarketsResponse = SinglePropertyResponse<'markets'>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UsersQueueResponse = any;
export type BooleanResponse = boolean[];
export type VoidResponse = SpotifyApi.VoidResponse;
