/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable semi */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
  it('assert that a is rounded properly', () => {
    assert.equal(calculateNumber(2.7, 3), 6);
    assert.equal(calculateNumber(4.8, 5), 10);
  });

  it('assert that b is rounded properly', () => {
    assert.equal(calculateNumber(3, 3.7), 7);
  });

  it('assert that a and b are rounded properly', () => {
    assert.equal(calculateNumber(3.2, 3.7), 7);
    assert.equal(calculateNumber(4.1, 5.8), 10);
  });
})
