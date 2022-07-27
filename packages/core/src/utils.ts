// Avoid using the spread syntax, it has its quirks:
// https://github.com/microsoft/TypeScript/issues/13148#issuecomment-270191398

export function merge<T1, T2, T3, T4, T5, T6>(
  c1: T1,
  c2: T2,
  c3?: T3,
  c4?: T4,
  c5?: T5,
  c6?: T6
): T1 & T2 & T3 & T4 & T5 & T6 {
  return Object.assign(Object.create(null), c1, c2, c3, c4, c5, c6);
}
