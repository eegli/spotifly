import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, ThemeProvider } from '@mui/material';
import React, { ReactNode, useMemo } from 'react';

const darkMode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#b5dcfb',
      dark: '#6bb8f7',
    },
  },
});

const lightMode = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4a44a2',
      light: '#514bb2',
      dark: '#433d92',
    },
  },
});

export const MuiThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();

  const theme = useMemo(
    () => (colorMode === 'light' ? lightMode : darkMode),
    [colorMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
