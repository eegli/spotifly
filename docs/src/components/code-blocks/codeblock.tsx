import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import { MuiThemeWrapper } from '../../theme/mui-theme-wrapper';
import {
  AllowedTypes,
  authScopes,
  flagsFromObject,
  swapArrPositions,
} from '../../utils';
import { Formatter } from './formatter';

type CliCodeBlockProps = {
  cli: string;
  npx: string;
  commandMap: Record<string, AllowedTypes>;
  required: string[];
  scopesKey?: string;
};

export const CliCodeBlock = ({
  cli,
  npx,
  commandMap,
  required,
  scopesKey,
}: CliCodeBlockProps) => {
  const [inputFields, setInputFields] = React.useState<
    Record<string, AllowedTypes>
  >({});

  const isRequired = (key: string) => required.includes(key);

  const merged = { ...commandMap, ...inputFields };
  console.log(merged);
  return (
    <MuiThemeWrapper>
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
        {Object.entries(merged).map(([key, value]) => {
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

          if (key === scopesKey) {
            return (
              <FormControl key={key} required={isRequired(key)}>
                <InputLabel>{key}</InputLabel>
                <Select
                  multiple
                  value={value}
                  onChange={event =>
                    setInputFields({
                      ...inputFields,
                      [key]: event.target.value,
                    })
                  }
                  input={<OutlinedInput label="scope" />}
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
              id={key}
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
        ['With npx', npx],
        ['With cli', cli],
      ].map(([title, base]) => (
        <React.Fragment key={title}>
          <Typography fontWeight="bold">{title}</Typography>
          <Formatter>
            {flagsFromObject({
              base,
              obj: merged,
              multiValueKeys: [scopesKey],
            })}
          </Formatter>
        </React.Fragment>
      ))}
    </MuiThemeWrapper>
  );
};
