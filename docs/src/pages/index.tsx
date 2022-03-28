import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box } from '@mui/material';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HomepageFeatures from '../components/home';
import { MuiThemeWrapper } from '../wrappers/mui-theme-wrapper';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
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
          height="100%"
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
