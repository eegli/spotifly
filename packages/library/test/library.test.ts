import * as Spotifly from '@spotifly/core';
import * as fs from '@spotifly/utils/fs';
import { mockDeep } from 'jest-mock-extended';
import { libraryHandler } from '../src/handler';
import {
  RES_MULTIPLE_ARTISTS,
  RES_MULTIPLE_AUDIO_FEATURES,
  RES_USER_SAVED_TRACKS,
  TRACK_COUNT,
} from './fixtures';

import { parser } from '../src/cli';
import { LibraryGlobals } from '../src/types';

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);

mockSpotify.Tracks.getUsersSavedTracks.mockImplementation(() => {
  return Promise.resolve(RES_USER_SAVED_TRACKS);
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
  .spyOn(fs, 'writeJSON')
  .mockImplementation(opts => Promise.resolve(opts.path));

jest.useFakeTimers({ now: new Date(0) });

beforeEach(() => {
  jest.clearAllMocks();
});

const options = parser.options;
const globals: LibraryGlobals['globals'] = {
  token: 'mytoken',
};

describe('Library', () => {
  it('gets light library', async () => {
    const res = await libraryHandler({ globals, options });
    expect(res?.library).toHaveLength(TRACK_COUNT);
    // Light library has no album release date
    expect(res?.library[0].track.album).not.toHaveProperty('release_date');
    expect(res?.library[0].track.genres).toBeUndefined();
    expect(res?.library[0].track.features).toBeUndefined();
    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(res).toMatchSnapshot();
  });
  it('gets full library with genres and features', async () => {
    const res = await libraryHandler({
      globals,
      options: {
        ...options,
        token: 'mytoken',
        type: 'full',
        genres: true,
        features: true,
      },
    });
    expect(res?.library).toHaveLength(TRACK_COUNT);
    // Full library has album release date
    expect(res?.library[0].track.album).toHaveProperty('release_date');
    expect(res?.library[0].track.genres).toBeTruthy();
    expect(res?.library[0].track.features).toBeTruthy();
    expect(res?.library).toStrictEqual(RES_USER_SAVED_TRACKS.data.items);
  });
  it('gets n most recent items', async () => {
    const res = await libraryHandler({
      globals,
      options: {
        ...options,
        last: 2,
      },
    });
    expect(res?.library).toHaveLength(2);
    expect(res).toMatchSnapshot();
  });
  it('gets items since date', async () => {
    const res = await libraryHandler({
      globals,
      options: {
        ...options,
        since: new Date('2021-12-06T17:17:50Z'),
      },
    });
    expect(res?.library).toHaveLength(1);
    expect(res).toMatchSnapshot();
  });
});
