export type Permutations<T extends string, U extends string = T> = T extends any
  ? T | `${T},${Permutations<Exclude<U, T>>}`
  : never;

export type AnyObject = Record<never, never>;
export type AnyArr = readonly unknown[];

export type OmitFromIterable<
  T extends readonly unknown[],
  K extends string
> = T extends [infer First, ...infer Rest]
  ? AnyObject extends First
    ? [Omit<First, K>, ...OmitFromIterable<Rest, K>]
    : [First, ...OmitFromIterable<Rest, K>]
  : [`wtf`];

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<T, E> = {
  [P in keyof T as Exclude<P, E>]: T[P];
};
