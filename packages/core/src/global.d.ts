declare namespace NodeJS {
    export interface ProcessEnv {
        SPT_CLIENT_ID: string |undefined;
        SPT_CLIENT_SECRET: string | undefined;
        SPT_REFRESH_TOKEN: string | undefined;
        SPT_ACCESS_TOKEN: string | undefined;
    }
  }