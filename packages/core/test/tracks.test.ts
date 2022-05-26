import { Tracks } from '../src/';
import { axiosInstance } from '../src/base/abstract';
import { getTestTracks, TEST_TRACKS } from './payloads/data';

afterEach(() => {
  jest.clearAllMocks();
});

const tracks = new Tracks({
  useCache: false,
  clientId: '',
  clientSecret: '',
  refreshToken: '',
});

describe('Tracks', () => {
  const instanceReqSpy = jest.spyOn(axiosInstance, 'get');
  describe('# get multiple tracks', () => {
    const getSeveralTracksSpy = jest.spyOn(
      Tracks.prototype as any,
      '_getSeveralTracks'
    );
    test('iter 1', async () => {
      const iter = tracks.tracks(...getTestTracks(10)).iter(3);
      for await (const x of iter) {
        console.log(x.map(t => t.id));
      }
      expect(instanceReqSpy).toHaveBeenCalledTimes(4);
    });
    test('get', async () => {
      await tracks.tracks(...getTestTracks(10)).get();
      expect(getSeveralTracksSpy).toHaveBeenCalledTimes(1);
    });

    test('getall', async () => {
      await tracks
        .tracks(...TEST_TRACKS, ...TEST_TRACKS, ...TEST_TRACKS)
        .getAll();
      expect(getSeveralTracksSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('# user saved tracks', () => {
    const getUserSavedTracks = jest.spyOn(
      Tracks.prototype as any,
      '_getUserSavedTracks'
    );
    test('iter', async () => {
      const iter = tracks.userSavedTracks.iter({ chunkSize: 3 });
      for await (const _ of iter);
    });
    test('getall', async () => {
      await tracks.userSavedTracks.getAll();

      expect(getUserSavedTracks).toHaveBeenCalledTimes(1);
    });
  });
});
