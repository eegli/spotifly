---
sidebar_position: 3
---

# Command Line

## Installing the CLI

Spotifly's wrapper CLI can be installed globally. It ships with the latest versions of all executables from this project.

```bash
yarn global add @spotifly/cli
```

```bash
npm install -g @spotifly/cli
```

Then:

```bash
spotifly [package] [args...]
```

## Usage with NPX

Instead of installing the CLI, every package can also be invoked directly via `npx`. This will download and save the executable in npm's local cache but not permanently add it to the PATH. [How NPX works](https://docs.npmjs.com/cli/v7/commands/npx).

Example:

```bash
npx @spotifly/auth-token@latest
```

## Version and help

Invoke any command with no arguments to see the version and available commands.

```bash
# Global CLI
spotifly

# Specific package
npx @spotifly/auth-token@latest
```
