import { Plugin } from 'pretty-format';
import { initialize } from '../src/index';

// TODO Write better function serializer
const functionSerializer: Plugin = {
  serialize(val) {
    return val.toString();
  },
  test(val) {
    return typeof val === 'function';
  },
};

describe('Lib', () => {
  test('matches snapshot', () => {
    expect(initialize({ accessToken: '' })).toMatchSnapshot();
  });
});
