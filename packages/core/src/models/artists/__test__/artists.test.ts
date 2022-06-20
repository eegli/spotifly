import { authProvider } from '@/test/setup';
import { Artists } from '..';

const artists = new Artists(authProvider);

describe('Models, Artists', () => {
  it('works', async () => {
    const res = await artists.ids('1', '2', '3').get();
    expect(res).toHaveLength(3);
  });
});
