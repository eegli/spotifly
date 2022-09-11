---
'@spotifly/core': minor
---

All named exports are now also available as properties of the default export. The following two examples are equivalent.

```ts
import { initialize, isError } from '@spotifly/core';
```

```ts
import Spotifly from '@spotifly/core';
Spotifly.initialize({...})
Spotifly.isError({...})
```
