# Spotifly

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/eegli/spotifly/CI) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fspotifly.nougat.dev%2F)

An inofficial toolbelt for working with the Spotify Web API.

https://spotifly.nougat.dev/

| Package                                      | NPM                                                       | Coverage                                                                                     |
| -------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [@spotifly/auth-token](packages/auth-token/) | ![npm](https://img.shields.io/npm/v/@spotifly/auth-token) | ![Codecov](https://codecov.io/gh/eegli/spotifly/branch/main/graph/badge.svg?flag=auth-token) |
| [@spotifly/cli](packages/cli/)               | ![npm](https://img.shields.io/npm/v/@spotifly/cli)        | ![Codecov](https://codecov.io/gh/eegli/spotifly/branch/main/graph/badge.svg?flag=cli)        |
| [@spotifly/core](packages/core/)             | ![npm](https://img.shields.io/npm/v/@spotifly/core)       | ![Codecov](https://codecov.io/gh/eegli/spotifly/branch/main/graph/badge.svg?flag=core)       |
| [@spotifly/library](packages/library/)       | ![npm](https://img.shields.io/npm/v/@spotifly/library)    | ![Codecov](https://codecov.io/gh/eegli/spotifly/branch/main/graph/badge.svg?flag=library)    |
| [@spotifly/utils](packages/utils/)           | ![npm](https://img.shields.io/npm/v/@spotifly/utils)      | ![Codecov](https://codecov.io/gh/eegli/spotifly/branch/main/graph/badge.svg?flag=utils)      |

## CLI

Run `yarn spotifly`

## Open Issues

- Wait for changeset to resolve open issue related to replacing yarn workspace ranges before publishing ([#issue432](https://github.com/changesets/changesets/issues/432), [#pull674](https://github.com/changesets/changesets/pull/674))

- Figure out how to make MUI work nicely: https://docusaurus.io/docs/styling-layout/#css-in-js

- Figure out how to generate JSDoc for curried functions

---

All packages are provided as-is. It is in your responsibility to make sure your application is compliant with the [Spotify Developer Terms](https://developer.spotify.com/terms/).
