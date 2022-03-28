import { chunkify } from '../src/utils';

describe('Utils', () => {
  it('chunkify with arr', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(chunkify(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  it('chunkify with set', () => {
    const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(chunkify(set, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
});
