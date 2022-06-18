import { Artists } from '..';
import { AuthProvider } from '../../../request';

const auth = new AuthProvider({ accessToken: '' });
const artists = new Artists(auth);

describe('Models, Artists', () => {
  it('works', async () => {
    const res = await artists.ids('1', '2', '3').get();
    expect(res).toHaveLength(3);
  });
});
