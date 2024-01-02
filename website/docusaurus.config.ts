import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'Spotifly',
  tagline: 'An inofficial toolbelt for working with the Spotify Web API.',
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/eegli/spotifly/tree/main/website/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },

        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
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

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Spotifly. Not affiliated with Spotify USA Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['ini'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
} satisfies Config;
