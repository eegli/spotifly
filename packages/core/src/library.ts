import { RequestAble, SpotifyKind } from './abstract';
import { Artists } from './artists';
import { Constants } from './constants';
import { MapCollection, SavedTrack, UsersSavedTracks } from './types';

export class Library extends SpotifyKind<SavedTrack[]> {
  private collection: MapCollection<SavedTrack> = new Map();

  private readonly limit = 50;
  private pagination = {
    nextUrl: <string | null>Constants.UserSavedTracks,
    start: 0,
    end: this.limit,
  };

  private artists: Artists;

  constructor(opts: RequestAble) {
    super(opts);
    this.artists = new Artists(opts);
  }

  get items() {
    return Array.from(this.collection.values());
  }

  public async get(): Promise<this> {
    this.collection.clear();
    while (this.pagination.nextUrl) {
      const { data }: UsersSavedTracks = await this.request.get(
        this.pagination.nextUrl,
        {
          params: {
            limit: this.limit,
          },
        }
      );
      data.items.forEach(savedTrack => {
        this.collection.set(savedTrack.track.id, savedTrack);
        savedTrack.track.artists.forEach(({ id }) => {
          this.artists.add(id);
        });
      });
      this.pagination.nextUrl = data.next;
      this.pagination.start = this.pagination.end;
      this.pagination.end += data.limit;
    }

    return this;
  }

  public collect(type: 'light' | 'full') {
    if (type === 'full') {
      return Array.from(this.collection.values()).map(track => {
        return track;
      });
    }
    return [];
  }
}
