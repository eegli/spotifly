declare namespace NodeJS {
    export interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string | undefined;
      SPOTIFY_CLIENT_SECRET: string | undefined;
      SPOTIFY_REFRESH_TOKEN: string | undefined;
 
    }
  }