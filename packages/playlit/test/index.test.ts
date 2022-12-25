import { sortOnIndex, toBin } from '../src';

// For test data
// https://stackoverflow.com/a/49434653/12368194
function normalSample(): number {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return normalSample(); // resample between 0 and 1
  return num;
}

describe('Playlit, sorting index', () => {
  test('case 1', () => {
    expect(sortOnIndex([10, 0, -10])).toEqual([2, 1, 0]);
    expect(sortOnIndex([10, 0, -10], false)).toEqual([0, 1, 2]);
  });
});

describe('Playlit, feature array into bins', () => {
  const length = 100;

  test('N bins', () => {
    const arr = toBin(Array.from({ length: 100 }, normalSample), 0);
    expect(arr).toHaveLength(1);
    expect(arr.flat()).toHaveLength(100);
  });
  test('1 bin', () => {
    const arr = toBin(Array.from({ length: 100 }, normalSample), 1);
    expect(arr).toHaveLength(100);
    expect(arr.flat()).toHaveLength(100);
  });
  test('N/2 bins', () => {
    const arr = toBin(Array.from({ length: 100 }, normalSample), 0.5);
    expect(arr).toHaveLength(50);
  });
  test('N/3 bins', () => {
    const arr = toBin(Array.from({ length: 10 }, normalSample), 0.35);
    expect(arr).toHaveLength(4);
  });
});
