import { ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export type LocalToken = {
  token: string;
  expires: number;
  scopes: string;
};

export const AuthTokenView = ({ expires, token, scopes }: LocalToken) => {
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
            onClick={() => navigator.clipboard.writeText(token)}
            primary="Token - Click to copy"
            secondary={token}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
