import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, ThemeProvider } from '@mui/material';
import React, { ReactNode, useMemo } from 'react';

const darkMode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e6b2e2',
      light: '#f0d1ee',
      dark: '#dc93d6',
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
