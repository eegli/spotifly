import * as utils from '@spotifly/utils';
import axios from 'axios';
import { getLibrary } from '../src/library';
import {
  RES_MULTIPLE_ARTISTS,
  RES_MULTIPLE_AUDIO_FEATURES,
  RES_USER_SAVED_TRACKS,
} from './fixtures';

jest.mock('axios');

const writeSpy = jest
  .spyOn(utils, 'writeJSON')
  .mockImplementation(opts => Promise.resolve(opts.path));
const mockAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Library', () => {
  it('gets light library', async () => {
    mockAxios.get.mockResolvedValueOnce(RES_USER_SAVED_TRACKS);
    const res = await getLibrary({ token: '123x' });
    expect(res.meta.output_type).toBe('light');
    expect(res.meta.date_generated).toEqual(expect.any(String));
    expect(res.library[0]).toMatchSnapshot('light track');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
  it('gets full library', async () => {
    mockAxios.get.mockResolvedValueOnce(RES_USER_SAVED_TRACKS);
    const res = await getLibrary({
      token: '123x',
      type: 'full',
    });
    expect(res.meta.output_type).toBe('full');
    expect(res.meta.date_generated).toEqual(expect.any(String));
    expect(res.library[0]).toMatchObject(RES_USER_SAVED_TRACKS.data.items[0]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
  it('with genres', async () => {
    mockAxios.get
      .mockResolvedValueOnce(RES_USER_SAVED_TRACKS)
      .mockResolvedValueOnce(RES_MULTIPLE_ARTISTS);
    const res = await getLibrary({
      token: '123x',
      genres: true,
    });
    expect(res.library[0].track.genres).toBeTruthy();
    expect(res.library[0].track.genres).toMatchSnapshot('genres');
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
  it('with audio features', async () => {
    mockAxios.get
      .mockResolvedValueOnce(RES_USER_SAVED_TRACKS)
      .mockResolvedValueOnce(RES_MULTIPLE_AUDIO_FEATURES);
    const res = await getLibrary({
      token: '123x',
      features: true,
    });
    expect(res.library[0].track.features).toBeTruthy();
    expect(res.library[0].track.features).toMatchSnapshot('features');
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
  it('writes library', async () => {
    mockAxios.get.mockResolvedValueOnce(RES_USER_SAVED_TRACKS);
    await getLibrary({
      token: '123x',
    });
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });
});
