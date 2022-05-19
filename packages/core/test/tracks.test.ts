import { Tracks } from '../src/';

afterEach(() => {
  jest.clearAllMocks();
});

const token =
  'BQALkgWC7T-pLi8gnSjAF8VeueiwNPT0w3Z65BHCh04YRRfB-94JAqpKhirA6mlutdYW6geN7hC_QmNe3sFrxeli-t67xqgkTXjfa6ecEyVPo6bKz8pan1LyKJHkuoRsTO3WRe0oM28poujHsgEHxi8j603nxfAOnjwkyzRFPE7TV-FX2MjIGeiuwlJpRrhXnqGVkhMj_IF1VTVj2MnkAw3IokxsjyvLXhuN1r5P5ndZaq_dMBB-f1J5_WGcZh2HrlO62nEqTnP1WjJyCE03HSMn6YsAOpo6ggRFqEscy8nCOig';

const TEST_TRACKS = [
  '4y8xXLG9O3Rbl6e1KaNRTG',
  '5r2kpjTJlJouxpESA1xEEY',
  '3F7fvCqnP7DyPIxYvGycb8',
  '5lIlwCysofF8YMbHAuF7hp',
  '62jEKykYY6stn1kYGAWVAH',
];

function firstAndRest() {
  return [TEST_TRACKS[0], ...TEST_TRACKS.slice(1)] as const;
}

const SAVED_TRACKS_ON_SPOTIFY = 10;

describe('Tracks', () => {
  const tracks1 = new Tracks({
    accessToken: token,
  });

  describe('# get multiple tracks', () => {
    const getSeveralTracksSpy = jest.spyOn(
      Tracks.prototype as any,
      '_getSeveralTracks'
    );
    test('iter', async () => {
      const iter = tracks1.tracks(...firstAndRest()).iter({ chunkSize: 1 });

      for await (const _ of iter);
      expect(getSeveralTracksSpy).toHaveBeenCalledTimes(5);
    });
    test('getall', async () => {});
  });

  describe('# user saved tracks', () => {
    const getUserSavedTracks = jest.spyOn(
      Tracks.prototype as any,
      '_getUserSavedTracks'
    );
    test('iter', async () => {
      const iter = tracks1.userSavedTracks.iter({ chunkSize: 3 });
      for await (const _ of iter);
      expect(getUserSavedTracks).toHaveBeenCalledTimes(
        Math.ceil(SAVED_TRACKS_ON_SPOTIFY / 3)
      );
    });
    test('getall', async () => {
      const res = await tracks1.userSavedTracks.getAll();
      expect(res).toHaveLength(SAVED_TRACKS_ON_SPOTIFY);
      expect(getUserSavedTracks).toHaveBeenCalledTimes(1);
    });
  });
});
