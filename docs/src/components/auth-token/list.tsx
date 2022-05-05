import { ListItemButton } from '@mui/material';
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
}: TokenData) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemText
          primary="Expires"
          secondary={`In ${new Date(
            expires - Date.now()
          ).getMinutes()} minutes (at ${new Date(
            expires
          ).toLocaleTimeString()})`}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Scopes" secondary={scopes} />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton disableGutters>
          <ListItemText
            sx={{ wordBreak: 'break-all' }}
            onClick={() => navigator.clipboard.writeText(accessToken)}
            primary="Access token - Click to copy"
            secondary={accessToken}
          />
        </ListItemButton>
      </ListItem>
      {refreshToken && (
        <ListItem disablePadding>
          <ListItemText primary="Refresh token" secondary={refreshToken} />
        </ListItem>
      )}
    </List>
  );
};
