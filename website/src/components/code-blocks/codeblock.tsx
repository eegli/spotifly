import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import { MuiThemeWrapper } from '../../theme/mui-theme-wrapper';
import {
  AllowedStringTypes,
  AllowedTypes,
  authScopes,
  flagsFromObject,
  swapArrPositions,
} from '../../utils';
import { Formatter } from './formatter';

type CliCodeBlockProps = {
  cli: string;
  npx: string;
  args: Record<string, AllowedStringTypes>;
  flags?: Record<string, boolean>;
  required?: string[];
  scopesKey?: string;
  allowProfileInsteadOfToken?: boolean;
  accessToken?: string;
};

type AuthMethod = 'token' | 'profile';
const authMethods: AuthMethod[] = ['token', 'profile'];
const authMethodField = 'auth method';
const authMethodInputField = 'auth input';

export const CliCodeBlock = ({
  cli,
  npx,
  args,
  flags,
  required = [],
  scopesKey,
  accessToken,
}: CliCodeBlockProps) => {
  const [inputFields, setInputFields] = React.useState<
    Record<string, AllowedTypes>
  >({ ...args, ...flags });

  const [authMethod, setAuthMethod] = React.useState<AuthMethod>('token');
  const [authMethodInput, setAuthMethodInput] = React.useState<string>('');

  // The access token may be passed as an empty string
  const needsAuthentication = accessToken != undefined;

  const isRequired = (key: string) => required.includes(key);

  const displayCommands = {
    ...inputFields,
    [authMethod]: authMethodInput,
  };

  return (
    <MuiThemeWrapper>
      {needsAuthentication ? (
        <>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '15px 10px',
              '& > *': { width: '25ch' },
              mb: 2,
            }}
          >
            <TextField
              sx={{ width: '25ch' }}
              variant="outlined"
              value={authMethod}
              label={authMethodField}
              select
              required
              key={authMethodField}
              onChange={v => {
                setAuthMethod(v.target.value as AuthMethod);
                // Reset the auth input
                setAuthMethodInput('');
              }}
            >
              {authMethods.map(v => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              key={authMethodInputField}
              type="text"
              required
              label={authMethod}
              value={authMethodInput}
              onChange={event => setAuthMethodInput(event.target.value)}
              variant="outlined"
            />
          </Box>
          <p>
            Using this command requires authentication. If you have Spotifly
            configuration file, you can specify a profile to use instead of an
            access token. If you specify a profile, an access token will be used
            automatically for you. See{' '}
            <a href="/docs/command-line#configuration-and-auto-authentication">
              the docs about access configuration
            </a>
            .
          </p>
          <hr />
        </>
      ) : null}

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '15px 10px',
          '& > *': { width: '25ch' },
          mb: 2,
        }}
      >
        {Object.entries(inputFields).map(([key, value]) => {
          if (typeof value === 'boolean') {
            return (
              <Box display="flex" justifyContent="center" key={key}>
                <FormControlLabel
                  key={key}
                  label={key}
                  control={
                    <Checkbox
                      key={key}
                      checked={value}
                      onChange={() =>
                        setInputFields({
                          ...inputFields,
                          [key]: !value,
                        })
                      }
                    />
                  }
                />
              </Box>
            );
          }
          /* Special render for the auth scopes */
          if (key === scopesKey) {
            return (
              <FormControl key={key} required={isRequired(key)}>
                <InputLabel htmlFor={key}>{key}</InputLabel>
                <Select
                  multiple
                  labelId={key}
                  label={key}
                  value={value}
                  onChange={event =>
                    setInputFields({
                      ...inputFields,
                      [key]: event.target.value,
                    })
                  }
                >
                  {authScopes.map(scope => (
                    <MenuItem key={scope} value={scope}>
                      {scope}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          }

          if (Array.isArray(value)) {
            return (
              <TextField
                variant="outlined"
                value={value[0]}
                label={key}
                select
                required={isRequired(key)}
                key={key}
                onChange={v => {
                  setInputFields({
                    ...inputFields,
                    [key]: swapArrPositions(value, v.target.value),
                  });
                }}
              >
                {value.map(v => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </TextField>
            );
          }

          return (
            <TextField
              key={key}
              type="text"
              required={isRequired(key)}
              label={key}
              value={value}
              onChange={event =>
                setInputFields({
                  ...inputFields,
                  [key]: event.target.value,
                })
              }
              variant="outlined"
            />
          );
        })}
      </Box>

      {[
        ['With NPX', npx],
        ['With CLI', cli],
      ].map(([title, base]) => (
        <React.Fragment key={title}>
          <Typography fontWeight="bold">{title}</Typography>
          <Formatter>
            {flagsFromObject({
              base,
              obj: displayCommands,
              multiValueKeys: [scopesKey],
            })}
          </Formatter>
        </React.Fragment>
      ))}
    </MuiThemeWrapper>
  );
};
