import * as Spotify from '@spotifly/core';
import { writeJSON } from '@spotifly/utils';
import { defaultConfig } from './config';
import type { Library, LibraryHandler, TrackLight } from './types';
import { createProgressBar } from './utils';

export const libraryHandler: LibraryHandler = async options => {
  const config = { ...defaultConfig, ...options };

  const spotifyClient = Spotify.initialize({ accessToken: config.token });

  let library: Library = [];

  let progress = createProgressBar('user library');

  progress.start(0, 0);

  await spotifyClient.Tracks.UsersSaved.getAll()(({ data }) => {
    progress.setTotal(data.total);
    progress.increment(data.items.length);

    data.items.forEach(el => {
      library.push(el);
    });
  });

  progress.stop();

  // Reduce library if necessary
  if (config.type === 'light') {
    library = library.reduce((acc, curr) => {
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
    const artists = library.map(t => t.track.artists.map(a => a.id)).flat();
    const artistIds = [...new Set<string>(artists)];
    const genres: Record<string, string[]> = {};

    progress = createProgressBar('artists');
    progress.start(artistIds.length, 0);

    await spotifyClient.Artists.Artist.getAll(artistIds)(({ data }) => {
      data.artists.forEach(artist => {
        genres[artist.id] = artist.genres;
      });
      progress.increment(data.artists.length);
    });

    progress.stop();
    library.forEach(({ track }) => {
      track.genres = track.artists.map(({ id }) => genres[id]);
    });
  }

  // Add audio features if specified
  if (config.features) {
    const trackIds = library.map(t => t.track.id);
    const features: Record<string, SpotifyApi.AudioFeaturesObject> = {};

    progress = createProgressBar('audio features');

    progress.start(trackIds.length, 0);

    await spotifyClient.Tracks.AudioFeatures.getAll(trackIds)(({ data }) => {
      data.audio_features.forEach(f => {
        features[f.id] = f;
      });
      progress.increment(data.audio_features.length);
    });

    progress.stop();
    library.forEach(({ track }) => {
      track.features = features[track.id];
    });
  }

  const libExport = {
    meta: {
      date_generated: new Date().toISOString(),
      output_type: config.type,
    },
    library,
  };

  const outDir = await writeJSON({
    fileName: 'spotify-library',
    path: config.outDir,
    data: libExport,
    compact: config.compact,
  });
  console.info("Success! Library written to '%s'", outDir);
  return libExport;
};
