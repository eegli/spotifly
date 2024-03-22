import * as Spotifly from '@spotifly/core';
import * as fs from '@spotifly/utils/fs';
import log from '@spotifly/utils/src/log';
import type { Ok } from '@spotifly/utils/types';
import { mockDeep } from 'jest-mock-extended';
import { parser } from '../src/cli';
import { libraryHandler } from '../src/handler';
import { LibraryExport, LibraryGlobals } from '../src/types';
import {
  RES_MULTIPLE_ARTISTS,
  RES_MULTIPLE_AUDIO_FEATURES,
  RES_USER_SAVED_TRACKS,
  TRACK_COUNT,
} from './fixtures';

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);
jest.spyOn(log, 'info').mockImplementation(() => {});

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
    expect(res.success).toBeTruthy();
    const {
      value: { library },
    } = res as Ok<LibraryExport>;
    expect(library).toHaveLength(TRACK_COUNT);
    // Light library has no album release date
    expect(library[0].track.album).not.toHaveProperty('release_date');
    expect(library[0].track.genres).toBeUndefined();
    expect(library[0].track.features).toBeUndefined();
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
    expect(res.success).toBeTruthy();
    const {
      value: { library },
    } = res as Ok<LibraryExport>;
    expect(library).toHaveLength(TRACK_COUNT);
    // Full library has album release date
    expect(library[0].track.album).toHaveProperty('release_date');
    expect(library[0].track.genres).toBeTruthy();
    expect(library[0].track.features).toBeTruthy();
    expect(library).toStrictEqual(RES_USER_SAVED_TRACKS.data.items);
  });
  it('gets n most recent items', async () => {
    const res = await libraryHandler({
      globals,
      options: {
        ...options,
        last: 2,
      },
    });
    expect(res.success).toBeTruthy();
    const {
      value: { library },
    } = res as Ok<LibraryExport>;
    expect(library).toHaveLength(2);
  });
  it('gets items since date', async () => {
    const res = await libraryHandler({
      globals,
      options: {
        ...options,
        since: new Date('2021-12-06T17:17:50Z'),
      },
    });
    expect(res.success).toBeTruthy();
    const {
      value: { library },
    } = res as Ok<LibraryExport>;
    expect(library).toHaveLength(1);
  });
});
