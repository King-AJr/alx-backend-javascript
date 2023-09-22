/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable semi */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
  describe('Rounding a', () => {
    it('should round a properly (Case 1)', () => {
      assert.equal(calculateNumber(2.7, 3), 6);
    });

    it('should round a properly (Case 2)', () => {
      assert.equal(calculateNumber(4.8, 5), 10);
    });

    it('should round a properly (Case 3)', () => {
      assert.equal(calculateNumber(1.1, 1.1), 2);
    });
  });

  describe('Rounding b', () => {
    it('should round b properly (Case 1)', () => {
      assert.equal(calculateNumber(3, 3.7), 7);
    });

    it('should round b properly (Case 2)', () => {
      assert.equal(calculateNumber(5.5, 6.5), 13);
    });

    it('should round b properly (Case 3)', () => {
      assert.equal(calculateNumber(0.3, 0.9), 1);
    });
  });

  describe('Rounding a and b', () => {
    it('should round both a and b properly (Case 1)', () => {
      assert.equal(calculateNumber(3.2, 3.7), 7);
    });

    it('should round both a and b properly (Case 2)', () => {
      assert.equal(calculateNumber(4.1, 5.8), 10);
    });

    it('should round both a and b properly (Case 3)', () => {
      assert.equal(calculateNumber(2.49, 1.5), 4);
    });
  });
});
