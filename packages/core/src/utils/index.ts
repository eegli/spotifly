import axios from 'axios';

export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
) {
  return axios
    .post<{
      access_token: string;
      token_type: 'Bearer';
      scope: string;
      expires_in: number;
    }>(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }).toString(),
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        },
      }
    )
    .then(res => res.data);
}
