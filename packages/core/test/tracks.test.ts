import { AxiosInstance } from 'axios';
import Spotifly from '../src/';
import { getTestTracks, TEST_TRACKS } from './payloads/data';

afterEach(() => {
  jest.clearAllMocks();
});

Spotifly.cache.disable();

const tracks = new Spotifly.Tracks({
  clientId: process.env.SPT_CLIENT_ID,
  clientSecret: process.env.SPT_CLIENT_SECRET,
  refreshToken: process.env.SPT_REFRESH_TOKEN,
});

type WithRequest = {
  request: AxiosInstance;
};

const instanceReqSpy = jest.spyOn(tracks as unknown as WithRequest, 'request');

describe('Tracks', () => {
  describe('# get several tracks', () => {
    const getSeveralTracksSpy = jest.spyOn(
      Spotifly.Tracks.prototype as any,
      '_getSeveralTracks'
    );

    test('iter 1', async () => {
      const perIter = 3;
      const requestedItems = 51;
      const expected = Math.floor(requestedItems / perIter);
      const testTrackIds = getTestTracks(requestedItems);

      const iter = tracks.tracks(...testTrackIds).iter(perIter);
      for await (const _ of iter);
      expect(instanceReqSpy).toHaveBeenCalledTimes(expected);
    });
    test('get', async () => {
      const requestedItems = 51;
      const testTrackIds = getTestTracks(requestedItems);
      await tracks.tracks(...testTrackIds).get();
      expect(instanceReqSpy).toHaveBeenCalledTimes(2);
      expect(getSeveralTracksSpy).toHaveBeenCalledTimes(2);
    });

    test('getall', async () => {
      await tracks.tracks(...TEST_TRACKS).getAll();
      expect(getSeveralTracksSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe('# user saved tracks', () => {
    const getUserSavedTracks = jest.spyOn(
      Spotifly.Tracks.prototype as any,
      '_getUserSavedTracks'
    );
    test('get', async () => {
      const res = await tracks.userSavedTracks.get();
      expect(res).toMatchSnapshot();
    });
    test('iter', async () => {
      const iter = tracks.userSavedTracks.iter(3);
      for await (const _ of iter);
    });
    test('getall', async () => {
      await tracks.userSavedTracks.getAll();
      expect(getUserSavedTracks).toHaveBeenCalledTimes(1);
    });
  });
});
