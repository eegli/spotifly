import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { AllowedTypes, flagsFromObject, swapArrPositions } from '../../utils';
import { MuiThemeWrapper } from '../../wrappers/mui-theme-wrapper';
import { Formatter } from './formatter';

type CliCodeBlockProps = {
  cli: string;
  npx: string;
  commandMap: Record<string, AllowedTypes>;
  required: string[];
};

export const CliCodeBlock = ({
  cli,
  npx,
  commandMap,
  required,
}: CliCodeBlockProps) => {
  const [inputFields, setInputFields] = useState<Record<string, AllowedTypes>>(
    {}
  );

  const isRequired = (key: string) => required.includes(key);

  const merged = { ...commandMap, ...inputFields };

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
      <Typography fontWeight="bold">With npx</Typography>
      <Formatter>{flagsFromObject(npx, merged)}</Formatter>

      <Typography fontWeight="bold">Spotifly CLI</Typography>
      <Formatter>{flagsFromObject(cli, merged)}</Formatter>
    </MuiThemeWrapper>
  );
};
