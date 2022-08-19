import { expectType } from 'tsd-lite';
import { AsyncFn, DataPromise } from '../../src/types';

declare function func1(arg1: string): DataPromise<unknown>;

expectType<AsyncFn<unknown, string>>(func1);

declare function func2(
  arg1: string,
  arg2?: { market?: string }
): DataPromise<unknown>;

expectType<AsyncFn<unknown, string, { market: string }>>(func2);
