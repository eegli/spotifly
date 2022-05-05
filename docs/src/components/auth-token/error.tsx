import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Box py={2} px={1}>
      <Typography>{message}</Typography>
    </Box>
  );
};
