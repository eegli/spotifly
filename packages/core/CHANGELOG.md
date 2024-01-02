# @spotifly/core

## 2.0.0

### Major Changes

- cd73d25: The minimum node version has been bumped from 14 to 18.

## 1.2.4

### Patch Changes

- a2a3cbf: Refine exports related to `AuthProvider`. The class and its types are now available under `@spotifly/core/provider`.

## 1.2.3

### Patch Changes

- 19ac71f: Upgrade dependencies

## 1.2.2

### Patch Changes

- 87dbccd: Provide a `DataCallback` type to facilitate writing callbacks for curried convenience functions. [Read more](https://spotifly.nougat.dev/docs/packages/core#helper-types).

## 1.2.1

### Patch Changes

- a84c5bf: Upgrade dependencies
- bafb6a7: Bump @types/spotify-api to 0.0.18 (latest)

## 1.2.0

### Minor Changes

- 7b4ce4c: All named exports are now also available as properties of the default export. The following two examples are equivalent.

  ```ts
  import { initialize, isError } from "@spotifly/core";
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
