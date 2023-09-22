const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
  describe('test type SUM', () => {
    it('assert that a is rounded and sums correctly', () => {
      assert.equal(calculateNumber('SUM', 2.7, 3), 6);
      assert.equal(calculateNumber('SUM', 4.8, 5), 10);
    });
  
    it('assert that b is rounded and sums correctly', () => {
      assert.equal(calculateNumber('SUM', 3, 3.7), 7);
      assert.equal(calculateNumber('SUM', 4, 5.8), 10);
    });
  
    it('assert that a and b are rounded and sums correctly', () => {
      assert.equal(calculateNumber('SUM', 3.2, 3.7), 7);
      assert.equal(calculateNumber('SUM', 4.1, 5.8), 10);
    });
  });

  describe('test type SUBSTRACT', () => {
    it('assert that a is rounded and subtracts correctly', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.7, 2), 1);
      assert.equal(calculateNumber('SUBTRACT', 4.8, 3), 2);
    });
  
    it('assert that b is rounded subtracts correctly', () => {
      assert.equal(calculateNumber('SUBTRACT', 7, 3.7), 3);
      assert.equal(calculateNumber('SUBTRACT', 10, 5.8), 4);
    });
  
    it('assert that a and b are roundedsubtracts correctly', () => {
      assert.equal(calculateNumber('SUBTRACT', 7.2, 3.7), 3);
      assert.equal(calculateNumber('SUBTRACT', 10.1, 5.8), 4);
    });
  })

  describe('test type DIVIDE', () => {
    it('assert that a is rounded and divides correctly', () => {
      assert.equal(calculateNumber('DIVIDE', 10.2, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 8.8, 3), 3);
    });
  
    it('assert that b is rounded and divides correctly', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
      assert.equal(calculateNumber('DIVIDE', 12, 3.8), 3);
    });
  
    it('assert that a and b are rounded and divides correctly', () => {
      assert.equal(calculateNumber('DIVIDE', 7.8, 3.7), 2);
      assert.equal(calculateNumber('DIVIDE', 10.1, 2.1), 5);
    });
  })
})
