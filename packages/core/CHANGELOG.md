# @spotifly/core

## 1.2.0

### Minor Changes

- 7b4ce4c: All named exports are now also available as properties of the default export. The following two examples are equivalent.

  ```ts
  import { initialize, isError } from '@spotifly/core';
  ```

  ```ts
  import Spotifly from '@spotifly/core';
  Spotifly.initialize({...})
  Spotifly.isError({...})
  ```

## 1.1.0

### Minor Changes

- 82ac236: Add support for [Get Playlist Cover Image](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist-cover)

## 1.0.0

### Major Changes

- 6f3a103: All packages are 99% stable. This is enough for the initial release 🎉
