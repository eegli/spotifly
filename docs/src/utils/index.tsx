export type AllowedTypes = string | string[] | boolean;

export const flagsFromObject = (
  base: string,
  obj: Record<string, AllowedTypes>,
  multiSelectKeys: string[] = []
): string => {
  return (
    base +
    ' ' +
    Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (value === false || value === '') return acc;
        key = '--' + key;
        acc += key + ' ';
        if (Array.isArray(value)) {
          const text = multiSelectKeys.includes(key.slice(2))
            ? `"${value.join(' ')}"`
            : value[0];
          acc += text + ' ';
        } else if (typeof value === 'string') {
          // Wrap in quotes if value contains spaces
          if (value.indexOf(' ') > -1 && value.slice(-1) !== ' ') {
            value = `"${value}"`;
          }
          acc += value + ' ';
        } else if (typeof value === 'number') {
          acc += value + ' ';
        }
        return acc;
      }, '')
      .trim()
  );
};

export const swapArrPositions = (arr: string[], element: string) => {
  const index = arr.indexOf(element);
  if (index > -1) {
    [arr[0], arr[index]] = [arr[index], arr[0]];
  }
  return arr;
};

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
