import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import { useSpotifyCallbackFromQueryParams } from '../../hooks/useQueryToken';
import { MuiThemeWrapper } from '../../theme/mui-theme-wrapper';
import { authScopes } from '../../utils';
import { AuthTokenView, LocalToken } from './view';

export const AuthTokenForm = () => {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [scopes, setScopes] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [localToken, setLocalToken, removeLocalToken] =
    useLocalStorage<LocalToken>('token');

  if (localToken && localToken.expires < Date.now()) {
    removeLocalToken();
  }

  useSpotifyCallbackFromQueryParams();

  const isReady = clientId && clientSecret && scopes.length > 0;

  const handleScopeChange = (event: SelectChangeEvent<typeof scopes>) => {
    const { value } = event.target;
    setScopes(typeof value === 'string' ? [value] : value);
  };

  const handleLogin = () => {
    const spotifyUrl =
      'https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        response_type: 'token',
        show_dialog: 'true',
        client_id: encodeURIComponent(clientId),
        redirect_uri: window.location.href,
        scope: scopes.join(' '),
      }).toString();

    const popup = window.open(
      spotifyUrl,
      'Login with Spotify',
      'width=500,height=800'
    );

    window.spotifyCallback = (token, error) => {
      if (token) {
        setLocalToken({
          scopes: scopes.join(', '),
          token,
          expires: new Date(Date.now() + 1000 * 3600).getTime(),
        });
        setError('');
      } else {
        setError(error);
      }
      popup?.close();
    };
  };
  return (
    <MuiThemeWrapper>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '15px 10px',
          '& > *': { width: '100%' },
          mb: 2,
        }}
      >
        <TextField
          value={clientId}
          label="Client ID"
          key="id"
          onChange={v => setClientId(v.target.value)}
        />
        <TextField
          value={clientSecret}
          label="Client Secret"
          key="secret"
          onChange={v => setClientSecret(v.target.value)}
        />

        <FormControl>
          <InputLabel>Scopes</InputLabel>
          <Select
            multiple
            value={scopes}
            onChange={handleScopeChange}
            input={<OutlinedInput label="Scope" />}
          >
            {authScopes.map(scope => (
              <MenuItem key={scope} value={scope}>
                {scope}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {isReady && (
        <Button sx={{ mb: 2 }} variant="contained" onClick={handleLogin}>
          Login with Spotify
        </Button>
      )}
      {error ? (
        <Box py={2} px={1}>
          <Typography>
            Error login in with Spotify. Reason: {error}. Did you click
            &quot;cancel&quot; in the popup?
          </Typography>
        </Box>
      ) : localToken ? (
        <AuthTokenView {...localToken} />
      ) : null}
    </MuiThemeWrapper>
  );
};
