'use strict';
const source = require('./pokerchecker');
const tape = require('tape');

tape.test('can i has a green test', t => {
  const result = 2;
  t.equal(result, source.addTwoNumbers(1, 1));
  t.end();
});
