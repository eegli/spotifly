import { SpotifyClient } from '@spotifly/core';
import { SingleBar } from 'cli-progress';
import { Config, Playlist, SavedTrackItem, TrackLight } from './types';
import { isBeforeDate } from './utils';

type ProgressOption = { progressBar?: SingleBar };

type SavedTracksOptions = Pick<Config, 'last' | 'since'> & ProgressOption;

export async function getUserSavedTracks(
  client: SpotifyClient,
  options: SavedTracksOptions
): Promise<SavedTrackItem[]> {
  const library: SavedTrackItem[] = [];

  const progressBar = options?.progressBar;

  progressBar?.start(0, 0);

  let nextPage: string | null = null;
  let offset = 0;

  fetchLoop: do {
    const { data } = await client.Tracks.getUsersSavedTracks({
      limit: 50,
      offset,
    });
    progressBar?.setTotal(data.total);
    progressBar?.increment(data.items.length);

    for (let i = 0; i < data.items.length; i++) {
      const track = data.items[i];
      if (library.length === options?.last) {
        break fetchLoop;
      }
      if (isBeforeDate(track.added_at, options.since)) {
        break fetchLoop;
      }
      library.push(track);
    }
    nextPage = data.next;
    offset += 50;
  } while (nextPage);

  progressBar?.stop();
  return library;
}

type SavedPlaylistOptions = { allPlaylists: boolean } & ProgressOption;

export async function getUserSavedPlaylists(
  client: SpotifyClient,
  options: SavedPlaylistOptions
): Promise<Playlist[]> {
  const progressBar = options?.progressBar;

  progressBar?.start(0, 0);
  let spotifyUserId: string | undefined;

  // If we have a user id, only keep playlists from that user
  if (!options.allPlaylists) {
    spotifyUserId = (await client.Users.getCurrentUsersProfile()).data.id;
  }

  const playlists = await client.Playlists.getAllCurrentUsersPlaylists()(
    ({ data }) => {
      progressBar?.setTotal(data.total);
      progressBar?.increment(data.items.length);
    }
  ).then(responses =>
    responses
      .map(({ data }) => {
        if (spotifyUserId) {
          return data.items.filter(p => p.owner.id === spotifyUserId);
        } else {
          return data.items;
        }
      })
      .flat()
  );

  progressBar?.stop();

  return playlists;
}

export async function enrichLibraryWithGenres(
  client: SpotifyClient,
  library: SavedTrackItem[],
  options: ProgressOption
): Promise<SavedTrackItem[]> {
  const artists = library.map(t => t.track.artists.map(a => a.id)).flat();
  const artistIds = [...new Set<string>(artists)];
  const genres: Record<string, string[]> = {};

  const progressBar = options?.progressBar;

  progressBar?.start(artistIds.length, 0);

  await client.Artists.getAllArtists(artistIds)(({ data }) => {
    data.artists.forEach(artist => {
      genres[artist.id] = artist.genres;
    });
    progressBar?.increment(data.artists.length);
  });

  progressBar?.stop();
  library.forEach(({ track }) => {
    track.genres = track.artists.map(({ id }) => genres[id]);
  });

  return library;
}

export async function enrichLibraryWithFeatures(
  client: SpotifyClient,
  library: SavedTrackItem[],
  options: ProgressOption
): Promise<SavedTrackItem[]> {
  const progressBar = options?.progressBar;

  const trackIds = library.map(t => t.track.id);
  const features: Record<string, SpotifyApi.AudioFeaturesObject> = {};

  progressBar?.start(trackIds.length, 0);

  await client.Tracks.getAllAudioFeatures(trackIds)(({ data }) => {
    data.audio_features.forEach(f => {
      features[f.id] = f;
    });
    progressBar?.increment(data.audio_features.length);
  });

  progressBar?.stop();
  library.forEach(({ track }) => {
    track.features = features[track.id];
  });

  return library;
}

export function reduceLibraryToLight(
  library: SavedTrackItem[]
): SavedTrackItem<TrackLight>[] {
  return library.reduce((acc, curr) => {
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
  }, <SavedTrackItem<TrackLight>[]>[]);
}
