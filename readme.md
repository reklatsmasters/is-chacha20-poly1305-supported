# is-chacha20-poly1305-supported
[![Build Status](https://travis-ci.org/reklatsmasters/is-chacha20-poly1305-supported.svg?branch=master)](https://travis-ci.org/reklatsmasters/is-chacha20-poly1305-supported)
[![npm](https://img.shields.io/npm/v/is-chacha20-poly1305-supported.svg)](https://npmjs.org/package/is-chacha20-poly1305-supported)
[![node](https://img.shields.io/node/v/is-chacha20-poly1305-supported.svg)](https://npmjs.org/package/is-chacha20-poly1305-supported)
[![license](https://img.shields.io/npm/l/is-chacha20-poly1305-supported.svg)](https://npmjs.org/package/is-chacha20-poly1305-supported)
[![downloads](https://img.shields.io/npm/dm/is-chacha20-poly1305-supported.svg)](https://npmjs.org/package/is-chacha20-poly1305-supported)

Check whether a chacha20-poly1305 cipher is **realy** supported by NodeJS.

### Usage

```js
const isSupported = require('is-chacha20-poly1305-supported');

if (isSupported) {
  // do stuff with chacha20-poly1305 cipher
}
```

## License

MIT, 2019 (c) Dmitriy Tsvettsikh
