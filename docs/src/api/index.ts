type RefreshTokenParams = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  code: string;
};

type AuthUrlParams = {
  type: string;
  clientId: string;
  redirectUri: string;
  scopes: string[];
};

type SpotifyTokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  refresh_token: string;
  scope: string;
  date_obtained: string;
};

export function createAuthUrl({
  type,
  clientId,
  scopes,
  redirectUri,
}: AuthUrlParams): string {
  const response_type = type === 'Implicit Grant Flow' ? 'token' : 'code';
  return (
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type,
      show_dialog: 'true',
      client_id: encodeURIComponent(clientId),
      redirect_uri: redirectUri,
      scope: scopes.join(' '),
    }).toString()
  );
}

export async function getToken({
  clientId,
  clientSecret,
  redirectUri,
  code,
}: RefreshTokenParams) {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + window.btoa(clientId + ':' + clientSecret),
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }).toString(),
  })
    .then(data => data.json())
    .then(res => res as SpotifyTokenResponse);
}
