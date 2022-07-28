import { expectAssignable } from 'tsd-lite';
import { init } from '../src/index';

type Params = Parameters<typeof init>[0];

describe('Lib signature', () => {
  expectAssignable<Params>({ accessToken: '' });
  expectAssignable<Params>({
    refreshToken: '',
    clientId: '',
    clientSecret: '',
  });
});
