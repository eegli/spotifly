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
import { createAuthUrl, getToken } from '../../api';
import { useTokenFromQueryParams } from '../../hooks/useTokenFromQueryParams';
import { tokenReducer } from '../../state/token';
import { MuiThemeWrapper } from '../../theme/mui-theme-wrapper';
import { authScopes } from '../../utils';
import { ErrorMessage } from './error';
import { AuthTokenList, TokenData } from './list';

export const AuthTokenForm = () => {
  const [state, dispatch] = useReducer(tokenReducer, {
    authType: 'Implicit Grant Flow',
    clientId: '',
    clientSecret: '',
    scopes: ['user-read-email'],
    refreshToken: '',
    error: '',
  });

  const isReady =
    (state.authType === 'Implicit Grant Flow' ||
      (state.authType === 'Authorization Code Flow' && state.clientSecret)) &&
    state.clientId &&
    state.scopes.length > 0;

  // Short-lived access token is saved in localstorage as long as it's
  // valid
  const [localToken, setLocalToken, removeLocalToken] =
    useLocalStorage<Omit<TokenData, 'refreshToken'>>('token');

  if (localToken && localToken.expires < Date.now()) {
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

  const handleAuthTypeChange = (
    e: SelectChangeEvent<typeof state.authType>
  ) => {
    dispatch({ type: 'setAuthType', payload: e.target.value });
  };

  const handleLogin = () => {
    const spotifyUrl = createAuthUrl({
      type: state.authType,
      clientId: state.clientId,
      scopes: state.scopes,
      redirectUri: window.location.href,
    });
    const popup = window.open(
      spotifyUrl,
      'Login with Spotify',
      'width=500,height=800'
    );

    window.spotifyCallback = async params => {
      // Implicit grant
      let accessToken = params.get('access_token') || '';
      const code = params.get('code');
      const error = params.get('error');

      if (error || (!code && !accessToken)) {
        dispatch({
          type: 'setError',
          payload:
            'Error logging in to Spotify. Did you click &quot;cancel&quot; in the popup?',
        });
        return;
      }

      dispatch({ type: 'setError', payload: '' });
      // Authorization code flow
      if (code) {
        const { refresh_token, access_token } = await getToken({
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          code,
          redirectUri: window.location.href,
        });

        dispatch({
          type: 'setRefreshToken',
          payload: refresh_token,
        });
        accessToken = access_token;
      }

      setLocalToken({
        accessToken,
        scopes: state.scopes.join(', '),
        expires: new Date(Date.now() + 1000 * 3600).getTime(),
      });

      popup?.close();
    };
  };
  return (
    <MuiThemeWrapper>
      <Box
        component="form"
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '15px 10px',
          '& > *': { width: '100%' },
          mb: 2,
        }}
      >
        <FormControl>
          <InputLabel>Authorization Type</InputLabel>
          <Select
            onChange={handleAuthTypeChange}
            value={state.authType}
            label="Authorization Type"
          >
            {['Implicit Grant Flow', 'Authorization Code Flow'].map(flow => (
              <MenuItem key={flow} value={flow}>
                {flow}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Scopes</InputLabel>
          <Select
            multiple
            value={state.scopes}
            onChange={handleScopeChange}
            input={<OutlinedInput label="Scopes" />}
          >
            {authScopes.map(scope => (
              <MenuItem key={scope} value={scope}>
                {scope}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          value={state.clientId}
          label="Client ID"
          key="id"
          onChange={handleClientIdChange}
        />
        {state.authType === 'Authorization Code Flow' && (
          <TextField
            value={state.clientSecret}
            label="Client Secret"
            key="secret"
            onChange={handleClientSecretChange}
          />
        )}
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
      ) : localToken ? (
        <AuthTokenList {...localToken} refreshToken={state.refreshToken} />
      ) : null}
    </MuiThemeWrapper>
  );
};
