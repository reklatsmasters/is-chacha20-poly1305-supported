'use strict';

const crypto = require('crypto');

const isDefaultSupported = crypto
  .getCiphers()
  .some(cipher => cipher === 'chacha20-poly1305');

/**
 * Force check chacha20-poly1305 implementation.
 * @returns {boolean}
 */
function forceCheck() {
  // Test vectors from RFC7539, section-2.8.2
  // See https://tools.ietf.org/html/rfc7539#section-2.8.2
  const key = Buffer.from(
    '808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f',
    'hex'
  );
  const iv = Buffer.from('070000004041424344454647', 'hex');
  const plaintext = Buffer.from(
    "Ladies and Gentlemen of the class of '99: " +
      'If I could offer you only one tip for the future, sunscreen would be it.',
    'ascii'
  );
  const aad = Buffer.from('50515253c0c1c2c3c4c5c6c7', 'hex');
  const authtag = Buffer.from('1ae10b594f09e26a7e902ecbd0600691', 'hex');
  const ciphertext = Buffer.from(
    'd31a8d34648e60db7b86afbc53ef7ec2a4aded51296e08fea9e2b5' +
      'a736ee62d63dbea45e8ca9671282fafb69da92728b1a71de0a9e06' +
      '0b2905d6a5b67ecd3b3692ddbd7f2d778b8c9803aee328091b58fa' +
      'b324e4fad675945585808b4831d7bc3ff4def08e4b7a9de576d265' +
      '86cec64b6116',
    'hex'
  );

  try {
    const cipher = crypto.createCipheriv('chacha20-poly1305', key, iv);
    cipher.setAAD(aad, { plaintextLength: plaintext.length });

    const head = cipher.update(plaintext);
    const final = cipher.final();
    const tag = cipher.getAuthTag();

    const isEqualTags = Buffer.compare(authtag, tag) === 0;
    const isEqualCipherText =
      Buffer.compare(ciphertext, Buffer.concat([head, final])) === 0;

    return isEqualTags && isEqualCipherText;
  } catch (_) {
    return false;
  }
}

module.exports = isDefaultSupported ? forceCheck() : false;
