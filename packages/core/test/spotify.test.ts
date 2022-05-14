import axios from 'axios';
import { Library } from '../src/library';
import multipleArtistsResponse from './payloads/multiple_artists.json';
import userSavedTracksRespone from './payloads/user_saved_tracks.json';
jest.mock('axios');

const mockAxios = axios as jest.Mocked<typeof axios>;
mockAxios.create.mockReturnThis();

describe('Spotify', () => {
  test('config update', async () => {
    const lib = new Library({ token: '123' });
    lib.config.update({ token: 'new' });
    mockAxios.get.mockResolvedValueOnce({
      data: userSavedTracksRespone as SpotifyApi.SaveTracksForUserResponse,
    });
    await lib.get();
    expect(lib.tracks.length).toBe(userSavedTracksRespone.items.length);
    expect(lib.artists.).toBe(7);
    expect(lib.artists).toMatchSnapshot();
    mockAxios.get.mockResolvedValueOnce({
      data: multipleArtistsResponse as SpotifyApi.MultipleArtistsResponse,
    });
    await lib.enrichGenres();
    
  });
});
