# @spotifly/cli

## 3.0.1

### Patch Changes

- 19e988c: Upgrade dependencies and remove outdated packages
- Updated dependencies [19e988c]
  - @spotifly/auth-token@3.0.1
  - @spotifly/library@3.0.1
  - @spotifly/utils@2.0.1

## 3.0.0

### Major Changes

- cd73d25: The minimum node version has been bumped from 14 to 18.

### Minor Changes

- cd73d25: The core CLI now supports the `profiles` command to list available Spotifly profiles.

### Patch Changes

- Updated dependencies [cd73d25]
  - @spotifly/auth-token@3.0.0
  - @spotifly/library@3.0.0
  - @spotifly/utils@2.0.0
  - @spotifly/core@2.0.0

## 2.1.1

### Patch Changes

- f71324f: Fix: When an access token is passed as a flag, the long-term credentials in the config file are ignored and not used to override the passed token.

## 2.1.0

### Minor Changes

- a2a3cbf: Read from a (global) config to enable auto-authentication. [Docs](https://spotifly.nougat.dev/docs/command-line#configuration-and-auto-authentication).

### Patch Changes

- Updated dependencies [a2a3cbf]
  - @spotifly/core@1.2.4
  - @spotifly/library@2.0.2

## 2.0.1

### Patch Changes

- cd4910c: Fix `--help` / `h` commands not being recognized by CLI
- Updated dependencies [19ac71f]
  - @spotifly/auth-token@2.0.1
  - @spotifly/library@2.0.1
  - @spotifly/utils@1.0.1

## 2.0.0

### Major Changes

- 036f524: Command line flags are now expected in kebab-case

### Patch Changes

- Updated dependencies [6da004d]
- Updated dependencies [036f524]
  - @spotifly/auth-token@2.0.0
  - @spotifly/library@2.0.0

## 1.0.5

### Patch Changes

- Updated dependencies [a297829]
  - @spotifly/auth-token@1.0.1
  - @spotifly/library@1.1.1

## 1.0.4

### Patch Changes

- Updated dependencies [87dbccd]
  - @spotifly/library@1.1.0

## 1.0.3

### Patch Changes

- @spotifly/library@1.0.3

## 1.0.2

### Patch Changes

- @spotifly/library@1.0.2

## 1.0.1

### Patch Changes

- @spotifly/library@1.0.1

## 1.0.0

### Major Changes

- 6f3a103: All packages are 99% stable. This is enough for the initial release 🎉

### Patch Changes

- Updated dependencies [6f3a103]
  - @spotifly/auth-token@1.0.0
  - @spotifly/library@1.0.0
  - @spotifly/utils@1.0.0
