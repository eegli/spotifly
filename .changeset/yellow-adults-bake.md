---
'@spotifly/cli': patch
---

Fix: When an access token is passed as flags, the long-term credentials in the config file are ignored and are not used to override the passed token.
