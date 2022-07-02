import { AuthProvider } from '@spotifly/core';
import { chunkify, writeJSON } from '@spotifly/utils';
import { defaultConfig } from './config';
import type {
  Library,
  LibraryExport,
  Options,
  TrackFull,
  TrackLight,
} from './types';
import { createProgressBar } from './utils';

export const getLibrary = async (
  options: Options
): Promise<LibraryExport<TrackLight | TrackFull>> => {
  const config = { ...defaultConfig, ...options };
  const asyncProvider = new AuthProvider({ accessToken: config.token });
  const lib: LibraryExport<TrackFull | TrackLight> = {
    meta: {
      date_generated: new Date().toISOString(),
      output_type: config.type,
    },
    library: [],
  };
  let progress = createProgressBar('user library');

  const pagination = {
    nextUrl: <string | null>'https://api.spotify.com/v1/me/tracks',
    start: 0,
    end: 50,
  };

  progress.start(0, 0);
  while (pagination.nextUrl) {
    const { data } =
      await asyncProvider.request<SpotifyApi.UsersSavedTracksResponse>({
        url: pagination.nextUrl,
        params: {
          limit: 50,
        },
      });

    progress.setTotal(data.total);
    progress.increment(data.items.length);

    data.items.forEach(el => {
      lib.library.push(el);
    });

    pagination.nextUrl = data.next;
    pagination.start = pagination.end;
    pagination.end += data.limit;
  }

  progress.stop();

  // Reduce library if necessary
  if (config.type === 'light') {
    lib.library = lib.library.reduce((acc, curr) => {
      acc.push({
        added_at: curr.added_at,
        track: {
          id: curr.track.id,
          name: curr.track.name,
          album: {
            id: curr.track.album.id,
            name: curr.track.album.name,
          },
          artists: curr.track.artists.map(a => ({
            id: a.id,
            name: a.name,
          })),
        },
      });
      return acc;
    }, <Library<TrackLight>>[]);
  }

  // Add genres if specified
  if (config.genres) {
    const artists = lib.library.map(t => t.track.artists.map(a => a.id)).flat();
    const artistIds = new Set<string>(artists);
    const genres: Record<string, string[]> = {};

    // Max 50 items per request to Spotify
    const chunkSize = 50;

    progress = createProgressBar('artists');
    progress.start(artistIds.size, 0);

    for await (const chunk of chunkify(artistIds, chunkSize)) {
      const { data } =
        await asyncProvider.request<SpotifyApi.MultipleArtistsResponse>({
          url: 'https://api.spotify.com/v1/artists',
          params: {
            ids: chunk.join(','),
          },
        });

      data.artists.forEach(artist => {
        genres[artist.id] = artist.genres;
      });
      progress.increment(chunkSize);
    }
    progress.stop();
    lib.library.forEach(({ track }) => {
      track.genres = track.artists.map(({ id }) => genres[id]);
    });
  }

  // Add audio features if specified
  if (config.features) {
    const songIds = lib.library.map(t => t.track.id);
    const features: Record<string, SpotifyApi.AudioFeaturesObject> = {};

    const chunkSize = 50;
    progress = createProgressBar('audio features');

    progress.start(songIds.length, 0);
    for await (const chunk of chunkify(songIds, 50)) {
      const { data } =
        await asyncProvider.request<SpotifyApi.MultipleAudioFeaturesResponse>({
          url: 'https://api.spotify.com/v1/audio-features',
          params: {
            ids: chunk.join(','),
          },
        });

      data.audio_features.forEach(f => {
        features[f.id] = f;
      });
      progress.increment(chunkSize);
    }
    progress.stop();
    lib.library.forEach(({ track }) => {
      track.features = features[track.id];
    });
  }

  const outDir = await writeJSON({
    fileName: 'spotify-library',
    path: config.outDir,
    data: lib,
    compact: config.compact,
  });
  console.info("Success! Library written to '%s'", outDir);
  return lib;
};
