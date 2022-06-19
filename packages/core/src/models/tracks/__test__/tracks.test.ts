import { Tracks } from '..';
import { auth } from '../../../../test/setup';

const tracks = new Tracks(auth);

describe('Models, Artists', () => {
  it('getById', async () => {
    const res = await tracks.ids('1', '2', '3').get();
    expect(res).toHaveLength(3);
  });
  it('getById', async () => {
    const res = await tracks.userSavedTracks.getAll();
    expect(res).toMatchSnapshot();
  });
});
