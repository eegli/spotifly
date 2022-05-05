import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useReducer } from 'react';
import { useLocalStorage } from 'react-use';
import { createAuthUrl, getRefreshToken } from '../../api';
import { useTokenFromQueryParams } from '../../hooks/useTokenFromQueryParams';
import { tokenReducer } from '../../state/token';
import { MuiThemeWrapper } from '../../theme/mui-theme-wrapper';
import { authScopes } from '../../utils';
import { ErrorMessage } from './error';
import { AuthTokenList, TokenData } from './list';

export const AuthTokenForm = () => {
  const [state, dispatch] = useReducer(tokenReducer, {
    clientId: 'ba00d5a5d6b549f8be3ddbb80a25728f',
    clientSecret: '452e7384d1b1475c9d04ff244af5b699',
    scopes: ['user-read-email'],
    refreshToken: '',
    error: '',
  });

  const isReady =
    state.clientId && state.clientSecret && state.scopes.length > 0;

  // Short-lived access token is saved in localstorage as long as it's
  // valid
  const [accessToken, setAccessToken, removeLocalToken] =
    useLocalStorage<Omit<TokenData, 'refreshToken'>>('token');

  if (accessToken && accessToken.expires < Date.now()) {
    removeLocalToken();
  }

  useTokenFromQueryParams();

  const handleScopeChange = (e: SelectChangeEvent<typeof state.scopes>) => {
    dispatch({ type: 'setScopes', payload: e.target.value });
  };

  const handleClientIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setClientId', payload: e.target.value });
  };

  const handleClientSecretChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setClientSecret', payload: e.target.value });
  };

  const handleLogin = () => {
    const spotifyUrl = createAuthUrl({
      clientId: state.clientId,
      scopes: state.scopes,
      redirectUri: window.location.href,
    });
    const popup = window.open(
      spotifyUrl,
      'Login with Spotify',
      'width=500,height=800'
    );

    window.spotifyCallback = code => {
      if (!code) {
        dispatch({
          type: 'setError',
          payload:
            'Error logging in to Spotify. Did you click &quot;cancel&quot; in the popup?',
        });
      } else {
        (async () => {
          const tokenResponse = await getRefreshToken({
            clientId: state.clientId,
            clientSecret: state.clientSecret,
            code,
            redirectUri: window.location.href,
          });
          console.log(tokenResponse);
          setAccessToken({
            scopes: state.scopes.join(', '),
            accessToken: tokenResponse.access_token,
            expires: new Date(Date.now() + 1000 * 3600).getTime(),
          });
          dispatch({
            type: 'setRefreshToken',
            payload: tokenResponse.refresh_token,
          });
          dispatch({ type: 'setError', payload: '' });
        })();
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
          value={state.clientId}
          label="Client ID"
          key="id"
          onChange={handleClientIdChange}
        />
        <TextField
          value={state.clientSecret}
          label="Client Secret"
          key="secret"
          onChange={handleClientSecretChange}
        />

        <FormControl>
          <InputLabel>Scopes</InputLabel>
          <Select
            multiple
            value={state.scopes}
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
        <Button
          sx={{ mb: 2, backgroundColor: '#1db954', color: '#fff' }}
          variant="contained"
          onClick={handleLogin}
        >
          Login with Spotify
        </Button>
      )}
      {state.error ? (
        <ErrorMessage message={state.error} />
      ) : accessToken ? (
        <AuthTokenList {...accessToken} refreshToken={state.refreshToken} />
      ) : null}
    </MuiThemeWrapper>
  );
};
