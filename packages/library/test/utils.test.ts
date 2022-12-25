import { isBeforeDate } from '../src/utils';

describe('Utils', () => {
  it('compares dates', () => {
    expect(isBeforeDate('2020-01-01', '2020-01-01')).toBe(false);
    expect(isBeforeDate('2020-01-01', '2020-01-02')).toBe(true);
    expect(isBeforeDate('2020-01-01', '2020-02-01')).toBe(true);
  });
});
