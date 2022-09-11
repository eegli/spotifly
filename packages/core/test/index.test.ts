import { initialize } from '../src/index';

describe('Lib', () => {
  test('client methods', () => {
    expect(initialize({ accessToken: '' })).toMatchSnapshot();
  });
  test('default and named exports', async () => {
    const Spotifly = await import('../src/index');
    const { initialize, isError } = await import('../src/index');
    expect(Spotifly.default.initialize).toBe(initialize);
    expect(Spotifly.default.isError).toBe(isError);
  });
});
