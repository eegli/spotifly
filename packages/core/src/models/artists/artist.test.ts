import { authProvider_WILL_HIT_API } from '@/test/setup';
import { Artists } from '.';

describe('Artists', () => {
  test('works', async () => {
    const artists = new Artists(authProvider_WILL_HIT_API);
    const res = await artists.ids(['12Chz98pHFMPJEknJQMWvI']).get();
    expect(res).toMatchSnapshot();
  });
});
