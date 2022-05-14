import axios, { AxiosInstance } from 'axios';

export interface RequestAble {
  accessToken: string;
}

export class Requester {
  protected request: AxiosInstance;
  protected readonly BASE_URL_V1 = 'https://api.spotify.com/v1';

  constructor(token: string) {
    this.request = axios.create({
      baseURL: this.BASE_URL_V1,
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

/* export class Configurable<T> {
  private config: T;

  constructor(config: T) {
    this.config = config;
  }

  public update(config: Partial<T>) {
    this.config = { ...this.config, ...config };
  }

  public get get() {
    return this.config;
  }
}
 */
export abstract class SpotifyKind<C> extends Requester {
  protected options: RequestAble;
  public abstract get items(): C;

  // public abstract collect(...args: unknown[]): K;

  constructor(options: RequestAble) {
    super(options.accessToken);
    this.options = options;
  }
}
