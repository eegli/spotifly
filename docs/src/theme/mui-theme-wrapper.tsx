import { useColorMode } from '@docusaurus/theme-common';
import {
  createTheme,
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material';
import React, { ReactNode, useMemo } from 'react';

// Keep in sync with custom.css color definitions
const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#4a44a2',
            light: '#514bb2',
            dark: '#433d92',
          },
        }
      : {
          primary: {
            main: '#e6b2e2',
            light: '#f0d1ee',
            dark: '#dc93d6',
          },
        }),
  },
});

export const MuiThemeWrapper = ({ children }: { children: ReactNode }) => {
  const mode = useColorMode().colorMode;
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
