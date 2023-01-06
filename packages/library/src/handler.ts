import { initialize, isError } from '@spotifly/core';
import { writeJSON } from '@spotifly/utils';
import { defaultConfig } from './config';
import {
  enrichLibraryWithFeatures,
  enrichLibraryWithGenres,
  getUserSavedPlaylists,
  getUserSavedTracks,
  reduceLibraryToLight,
} from './library';
import type { Config, LibraryExport, LibraryHandler } from './types';
import { createProgressBar } from './utils';

export const libraryHandler: LibraryHandler = async userConfig => {
  try {
    const config: Config = { ...defaultConfig, ...userConfig };
    const spotifyClient = initialize({ accessToken: config.token });

    let savedTracks = await getUserSavedTracks(spotifyClient, {
      last: config.last,
      since: config.since,
      progressBar: createProgressBar("user's saved tracks"),
    });

    // Reduce saved tracks if necessary
    if (config.type === 'light') {
      savedTracks = reduceLibraryToLight(savedTracks);
    }

    // Add genres if specified
    if (config.genres) {
      savedTracks = await enrichLibraryWithGenres(spotifyClient, savedTracks, {
        progressBar: createProgressBar('artists'),
      });
    }

    // Add audio features if specified
    if (config.features) {
      savedTracks = await enrichLibraryWithFeatures(
        spotifyClient,
        savedTracks,
        {
          progressBar: createProgressBar('audio features'),
        }
      );
    }

    const libExport: LibraryExport = {
      meta: {
        date_generated: new Date().toISOString(),
        saved_tracks_output_type: config.type,
      },
      tracks: savedTracks,
    };

    if (config.playlists) {
      console.log(config);
      libExport.playlists = await getUserSavedPlaylists(spotifyClient, {
        allPlaylists: config.all_playlists,
        progressBar: createProgressBar("user's playlists"),
      });
    }

    const outDir = await writeJSON({
      fileName: 'spotify-library',
      path: config.outDir,
      data: libExport,
      compact: config.compact,
    });

    console.info("Success! Library written to '%s'", outDir);

    return libExport;
  } catch (error) {
    if (isError(error)) {
      const { status, message } = error.response!.data.error;
      throw new Error(`Status ${status}, ${message}`);
    } else {
      throw new Error('Something went wrong');
    }
  }
};
