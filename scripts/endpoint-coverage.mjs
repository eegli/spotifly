import * as Spotify from '@spotifly/core';
import fs from 'fs';

const spotify = Spotify.initialize({ accessToken: '' });

// Internet is cool: https://stackoverflow.com/a/47063174/12368194
const keyify = (obj, prefix = '') =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + '.')];
    }
    return [...res, prefix + el];
  }, []);

let prev = '';
let keys = keyify(spotify)
  .sort()
  .reduce((acc, curr) => {
    if (prev.split('.')[0] !== curr.split('.')[0]) {
      if (prev) acc += '</ul></li>';
      acc += `<li><b>${curr.split('.')[0]}</b><ul>\n`;
      prev = curr;
    }
    return acc + `<li>${curr}</li>` + '\n';
  }, '');

keys = '<ul>' + keys + '</ul></li></ul>';

keys +=
  '\n\nThis list is generated automatically and can be pasted in website/docs/packages/core.mdx in the <details> section after <summary>';

fs.writeFileSync('./scripts/spt-endpoint-coverage.txt', keys);
