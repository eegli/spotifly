// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spotifly',
  tagline: 'A collection of useful packages and utilities for Spotify',
  url: 'https://spotifly.nougat.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eegli', // Usually your GitHub org/user name.
  projectName: 'spotifly', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Roboto:wght@300;400;500&display=swap',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/eegli/spotifly/tree/main/docs/',
        },

        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Spotifly',
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/eegli/spotifly',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        content:
          'Hi! Spotifly is still under active development. Check the GitHub readme for more info.',
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Spotifly. Not affiliated with Spotify USA Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;
