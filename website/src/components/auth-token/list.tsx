import Portal from '@mui/base/Portal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';

export type TokenListProps = {
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
}: TokenListProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = (_, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClickToken = (token: string) => {
    navigator.clipboard.writeText(token);
    setOpen(true);
  };

  return (
    <>
      <List>
        <ListItem>
          <ListItemText
            primary="Expires"
            secondary={`In ${new Date(
              expires - Date.now()
            ).getMinutes()} minutes (at ${new Date(
              expires
            ).toLocaleTimeString()})`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Scopes" secondary={scopes} />
        </ListItem>
        <ListItemButton onClick={() => handleClickToken(accessToken)}>
          <Tooltip title="Click to copy access token" placement="top">
            <ListItemText primary="Access token" secondary={accessToken} />
          </Tooltip>
        </ListItemButton>
        {refreshToken && (
          <ListItemButton onClick={() => handleClickToken(refreshToken)}>
            <Tooltip title="Copy refresh token" placement="top">
              <ListItemText
                primary="Refresh token"
                primaryTypographyProps={{ color: 'warning.light' }}
                secondary={refreshToken}
                secondaryTypographyProps={{ color: 'warning.dark' }}
              />
            </Tooltip>
          </ListItemButton>
        )}
      </List>
      <Portal>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Token copied to clipboard"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Portal>
    </>
  );
};
