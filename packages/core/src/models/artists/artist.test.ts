import { authProvider_WILL_HIT_API } from '@/test/setup';
import { Artists } from '.';

describe('Artists', () => {
  test('works', async () => {
    const artists = new Artists(authProvider_WILL_HIT_API);

    const artInfo = artists.info('0oSGxfWSnnOXhD2fKuz2Gy');
    const a1 = await artInfo.get({ market: 'US' });
  });
});
