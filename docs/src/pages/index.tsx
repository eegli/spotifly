import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Box from '@mui/material/Box';
import Layout from '@theme/Layout';
import React from 'react';
import HomepageFeatures from '../components/home';
import { MuiThemeWrapper } from '../theme/mui-theme-wrapper';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Box
      component="header"
      display="flex"
      sx={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Box component="h1" fontSize="4rem">
        {siteConfig.title}
      </Box>
      <Box component="p" fontSize="1.5rem">
        {siteConfig.tagline}
      </Box>
    </Box>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Explore ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <MuiThemeWrapper>
        <Box
          id="main"
          my="auto"
          flex="1 1 0"
          display="flex"
          flexDirection="column"
        >
          <HomepageHeader />
          <Box component="main" flexGrow={1} height="100%">
            <HomepageFeatures />
          </Box>
        </Box>
      </MuiThemeWrapper>
    </Layout>
  );
}
