import { WithOptions } from '@eegli/tinyparse';
import { authorize as internalAuthorize } from './authorize';
import { parser } from './cli';
import type { options } from './config';

type InternalOptions = WithOptions<typeof options>['options'];
type OptionalOptions = Partial<InternalOptions>;
type RequiredOptions = Pick<InternalOptions, 'clientId' | 'clientSecret'>;

export type Options = OptionalOptions & RequiredOptions;

export async function authorize(authOptions: Options) {
  return internalAuthorize({ options: { ...parser.options, ...authOptions } });
}
