import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export type TokenData = {
  accessToken: string;
  expires: number;
  scopes: string;
  refreshToken?: string;
};

export const AuthTokenList = ({
  expires,
  accessToken,
  refreshToken,
  scopes,
}: TokenData) => (
  <List>
    <ListItem disablePadding>
      <ListItemText
        primary="Expires"
        secondary={`In ${new Date(
          expires - Date.now()
        ).getMinutes()} minutes (at ${new Date(expires).toLocaleTimeString()})`}
      />
    </ListItem>
    <ListItem disablePadding>
      <ListItemText primary="Scopes" secondary={scopes} />
    </ListItem>
    <ListItem disablePadding>
      <ListItem disablePadding>
        <ListItemText primary="Access token" secondary={accessToken} />
      </ListItem>
    </ListItem>
    {refreshToken && (
      <ListItem disablePadding>
        <ListItemText
          primary="Refresh token"
          primaryTypographyProps={{ color: 'warning.light' }}
          secondary={refreshToken}
          secondaryTypographyProps={{ color: 'warning.dark' }}
        />
      </ListItem>
    )}
  </List>
);
