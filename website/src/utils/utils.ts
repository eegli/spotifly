export type AllowedTypes = string | string[] | boolean;

export type FlagObjectParam = {
  base: string;
  obj: Record<string, AllowedTypes>;
  multiValueKeys?: string[];
};

export function flagsFromObject({
  base,
  obj,
  multiValueKeys = [],
}: FlagObjectParam): string {
  return (
    base.trim() +
    ' ' +
    Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (value === false || value === '') return acc;
        acc += `--${key} `;

        if (value === true) return acc;

        if (Array.isArray(value)) {
          const text = multiValueKeys.includes(key)
            ? `"${value.join(' ')}"`
            : value[0];
          acc += text + ' ';
          return acc;
        }

        // Wrap in quotes if string value contains spaces
        if (value.indexOf(' ') > -1 && value.slice(-1) !== ' ') {
          value = `"${value}"`;
        }
        acc += value + ' ';
        return acc;
      }, '')
      .trim()
  );
}

export function swapArrPositions(arr: string[], element: string) {
  const index = arr.indexOf(element);
  if (index > -1) {
    [arr[0], arr[index]] = [arr[index], arr[0]];
  }
  return arr;
}

// https://developer.spotify.com/documentation/general/guides/authorization/scopes/
export const authScopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-private',
  'user-read-email',
  'user-follow-modify',
  'user-follow-read',
  'user-library-modify',
  'user-library-read',
  'app-remote-control',
  'user-read-playback-position',
  'user-top-read',
  'user-read-recently-played',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'playlist-read-private',
  'playlist-modify-public',
];
