import { WithOptions } from '@eegli/tinyparse';
import { authorize as internalAuthorize } from './authorize';
import { parser } from './cli';
import type { options } from './config';
import { SpotifyTokenResponse } from './types';

type InternalOptions = WithOptions<typeof options>['options'];
type OptionalOptions = Partial<InternalOptions>;
type RequiredOptions = Pick<InternalOptions, 'clientId' | 'clientSecret'>;

export type Options = OptionalOptions & RequiredOptions;

export async function authorize(
  authOptions: Options,
): Promise<SpotifyTokenResponse> {
  const result = await internalAuthorize({
    options: { ...parser.options, ...authOptions },
  });
  if (!result.success) {
    throw new Error('Error: ' + result.error);
  }
  return result.value;
}
