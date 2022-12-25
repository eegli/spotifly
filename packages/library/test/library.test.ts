import * as Spotifly from '@spotifly/core';
import * as utils from '@spotifly/utils';
import { mockDeep } from 'jest-mock-extended';
import { libraryHandler } from '../src/handler';
import {
  RES_MULTIPLE_ARTISTS,
  RES_MULTIPLE_AUDIO_FEATURES,
  RES_USER_SAVED_TRACKS,
} from './fixtures';

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);

mockSpotify.Tracks.getAllUsersSavedTracks.mockImplementation(() => {
  return cb => {
    if (cb) cb(RES_USER_SAVED_TRACKS);
    return Promise.resolve([RES_USER_SAVED_TRACKS]);
  };
});

mockSpotify.Tracks.getAllAudioFeatures.mockImplementation(() => {
  return cb => {
    if (cb) cb(RES_MULTIPLE_AUDIO_FEATURES);
    return Promise.resolve([RES_MULTIPLE_AUDIO_FEATURES]);
  };
});

mockSpotify.Tracks.getSeveralAudioFeatures.mockImplementation(() => {
  return Promise.resolve(RES_MULTIPLE_AUDIO_FEATURES);
});

mockSpotify.Artists.getAllArtists.mockImplementation(() => {
  return cb => {
    if (cb) cb(RES_MULTIPLE_ARTISTS);
    return Promise.resolve([RES_MULTIPLE_ARTISTS]);
  };
});

const writeSpy = jest
  .spyOn(utils, 'writeJSON')
  .mockImplementation(opts => Promise.resolve(opts.path));

jest.useFakeTimers({ now: new Date(0) });

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Library', () => {
  it('gets light library', async () => {
    const res = await libraryHandler({ token: 'mytoken' });
    expect(res.meta.output_type).toBe('light');
    expect(res.library).toHaveLength(RES_USER_SAVED_TRACKS.data.items.length);
    expect(res.library[0].track.genres).toBeUndefined();
    expect(res.library[0].track.features).toBeUndefined();
    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(res).toMatchSnapshot();
  });
  it('gets full library with genres and features', async () => {
    const res = await libraryHandler({
      token: 'mytoken',
      type: 'full',
      genres: true,
      features: true,
    });
    expect(res.meta.output_type).toBe('full');
    expect(res.library).toHaveLength(RES_USER_SAVED_TRACKS.data.items.length);
    expect(res.library[0].track.genres).toBeTruthy();
    expect(res.library[0].track.features).toBeTruthy();
    expect(res).toMatchSnapshot();
  });
  it('gets n most recent items', async () => {
    const res = await libraryHandler({
      token: 'mytoken',
      last: 2,
    });
    expect(res.library).toHaveLength(2);
    expect(res).toMatchSnapshot();
  });
  it('gets items since date', async () => {
    const res = await libraryHandler({
      token: 'mytoken',
      since: '2021-12-06T17:17:50Z',
    });
    expect(res.library).toHaveLength(1);
    expect(res).toMatchSnapshot();
  });
});
