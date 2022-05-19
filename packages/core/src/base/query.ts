type RequestParameters = {
  limit: number;
  offset: number;
  market: string;
};

export type ReqUrl = {
  url: string;
};

export type ReqLimit = {
  limit: number;
};

export type ReqOffset = {
  offset: number;
};

export type ReqId = {
  id: string;
};

export type ReqIds = {
  ids: string[];
};

export type ReqMarket = {
  market: string;
};

export type ReqGetAll = {
  getAll: boolean;
};

type GenericQuery<T extends keyof RequestParameters> = {
  [K in Extract<keyof RequestParameters, T>]: RequestParameters[K];
};

export const endpointsv1 = {
  getSeveralArtists: {
    url: 'artists',
    limit: 50,
  },
  getSeveralTracks: {
    limit: 2,
    url: 'tracks',
  },
  getUsersSavedTracks: {
    limit: 50,
    url: 'me/tracks',
  },
};
