import { createInfiniteGetRunner } from '@/test/mocks/runners';
import { authProvider, authProvider_WILL_HIT_API } from '@/test/setup';
import { Tracks } from '..';
import { TrackObjectFull } from './payloads';

const tracks = new Tracks(authProvider);
const tracks_WILL_HIT_API = new Tracks(authProvider_WILL_HIT_API);

describe('Models, Tracks', () => {
  describe('ids', () => {
    test('get', async () => {
      createInfiniteGetRunner({
        url: 'https://api.spotify.com/v1/artists',
        responseItem: TrackObjectFull,
        splitToken: 'ids',
        expectedQuery: {
          limit: '30',
        },
      });
      const res = await tracks.ids('1', '2', '3').get();
      expect(res).toHaveLength(3);
    });
  });
  describe('user', () => {
    test('getAll', async () => {
      const r1 = await tracks_WILL_HIT_API.userSavedTracks.getAll();
      expect(r1).toHaveLength(70);
      expect(r1).toMatchSnapshot();
    });
    test('get', async () => {
      const r1 = await tracks_WILL_HIT_API.userSavedTracks.get({ limit: 8 });
      expect(r1.items).toHaveLength(8);
      const r2 = await tracks_WILL_HIT_API.userSavedTracks.get({
        offset: 10000,
      });
      expect(r2.items).toHaveLength(0);
    });
  });
});
