import LockOpenIcon from '@mui/icons-material/LockOpen';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import React from 'react';

type FeatureItem = {
  title: string;
  image: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quick and easy authorization',
    image: <LockOpenIcon />,
    description: <>Get your access token directly from the docs.</>,
  },
  {
    title: 'Built for CJS and ESM',
    image: <StarIcon />,
    description: (
      <>You choose whether you want to require or import a package.</>
    ),
  },
  {
    title: 'Powerful CLI',
    image: <SettingsSuggestIcon />,
    description: (
      <>
        Use any package either via the Spotifly CLI or invoke it directly via
        NPX - no installation required.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          my: 2,
          color: 'primary.main',
        }}
      >
        {image}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="h3"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Box>
        <Box component="p" sx={{ textAlign: 'center' }}>
          {description}
        </Box>
      </Box>
    </Box>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <Box
      component="section"
      padding={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {FeatureList.map(({ description, title, image }) => {
        return (
          <Box key={title} mb={3}>
            <Feature description={description} title={title} image={image} />
          </Box>
        );
      })}
      <MuiLink
        href="docs/overview"
        sx={{
          px: 2,
          py: 1,
          mb: 5,
          mt: 2,
          borderRadius: '4px',

          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          '&:hover': {
            backgroundColor: 'secondary.main',
            color: 'text.primary',
          },
        }}
      >
        <b>Explore the docs</b>
      </MuiLink>
    </Box>
  );
}
