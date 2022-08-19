import { initialize } from '../src/index';

describe('Lib', () => {
  test('matches snapshot', () => {
    expect(initialize({ accessToken: '' })).toMatchSnapshot();
  });
});
