'use strict';

const isChacha20Poly1305Suported = require('.');

test('check', () => {
  // Assume that we on CI:

  switch (process.version) {
    case 'v6.17.0':
      expect(isChacha20Poly1305Suported).toBe(false);
      break;
    case 'v10.15.3':
      expect(isChacha20Poly1305Suported).toBe(false);
      break;
    case 'v11.15.0':
      expect(isChacha20Poly1305Suported).toBe(true);
      break;
    default:
      break;
  }
});
