export enum CacheEntity {
  Artist = 'artist',
  Track = 'track',
}

type CacheableConfig = {
  entity: CacheEntity;
  debug?: boolean;
  enabled?: boolean;
};

export function Cacheable({
  entity,

  enabled = true,
  debug = false,
}: CacheableConfig) {
  return function (
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (!enabled) return;
    const log = debug ? console.log : () => {};
    const original = descriptor.value;
    descriptor.value = async function (...args: string[]) {
      if (!Array.isArray(args)) {
        throw new Error(
          `Decorator applied on uncacheable method ${propertyKey}`
        );
      }
      const { cached, uncached } = cache.filterCached(entity, args);

      if (uncached.length === 0) {
        log('Reading all items from cache');
        return Promise.resolve(cached);
      }

      log(
        `Found ${cached.length}/${args.length} entries in cache, optimizing query...`
      );
      args = uncached;

      const result: any[] = await original.call(this, ...args);

      log(`Putting ${result.length} new item(s) into cache`);
      for (let i = 0; i < result.length; i++) {
        cache.put(entity, [uncached[i], result[i]]);
      }
      log(`Appending ${cached.length} item(s) to result from cache`);
      result.push(...cached);
      return Promise.resolve(result);
    };
  };
}

type FilteredCache = {
  cached: any[];
  uncached: string[];
};

class Cache {
  #tracks = new Map<string, any>();
  #artists = new Map<string, any>();

  #findBin(entity: CacheEntity) {
    switch (entity) {
      case CacheEntity.Track:
        return this.#tracks;
      case CacheEntity.Artist:
        return this.#artists;
    }
  }

  public put(entity: CacheEntity, item: [string, any]): void {
    const bin = this.#findBin(entity);
    bin.set(item[0], item[1]);
  }

  public filterCached(entity: CacheEntity, ids: string[]): FilteredCache {
    const bin = this.#findBin(entity);
    return ids.reduce(
      (acc, curr) => {
        const item = bin.get(curr);
        if (item) {
          acc.cached.push(item);
        } else {
          acc.uncached.push(curr);
        }
        return acc;
      },
      {
        cached: [],
        uncached: [],
      } as FilteredCache
    );
  }
}

export const cache = new Cache();
