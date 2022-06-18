import { Tracks } from '..';
import { AuthProvider } from '../../../request';

const auth = new AuthProvider({ accessToken: '' });
const tracks = new Tracks(auth);

describe('Models, Artists', () => {
  it('getById', async () => {
    const res = await tracks.ids('1', '2', '3').get();
    expect(res).toHaveLength(3);
  });
  it('getById', async () => {
    const res = await tracks.ids('1', '2', '3').get();
    expect(res).toHaveLength(3);
  });
});
