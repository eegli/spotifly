import LockOpenIcon from '@mui/icons-material/LockOpen';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import React from 'react';

type FeatureItem = {
  title: string;
  image: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quick and easy authentication',
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
      {FeatureList.map((props, idx) => {
        const isLast = idx === FeatureList.length - 1;
        return (
          <Box key={props.title} mb={isLast ? 3 : 2}>
            <Feature {...props} />
            {!isLast && <Divider flexItem />}
          </Box>
        );
      })}
      <MuiLink href="docs/overview" variant="body1">
        Explore the docs
      </MuiLink>
    </Box>
  );
}
