const { expect } = require('chai');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
  describe('type=SUM', () => {
    it('assert that a is rounded and sums correctly', () => {
      expect(calculateNumber('SUM', 2.7, 3), 6);
      expect(calculateNumber('SUM', 4.8, 5), 10);
    });
  
    it('assert that b is rounded and sums correctly', () => {
      expect(calculateNumber('SUM', 3, 3.7)).to.equal(7);
      expect(calculateNumber('SUM', 4, 5.8)).to.equal(10);
    });
  
    it('assert that a and b are rounded and sums correctly', () => {
      expect(calculateNumber('SUM', 3.2, 3.7)).to.equal(7);
      expect(calculateNumber('SUM', 4.1, 5.8)).to.equal(10);
    });
  })

  describe('type=SUBTRACT', () => {
    it('assert that a is rounded and subtracts correctly', () => {
      expect(calculateNumber('SUBTRACT', 2.7, 2)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 4.8, 3)).to.equal(2);
    });
  
    it('assert that b is rounded subtracts correctly', () => {
      expect(calculateNumber('SUBTRACT', 7, 3.7)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 10, 5.8)).to.equal(4);
    });
  
    it('assert that a and b are roundedsubtracts correctly', () => {
      expect(calculateNumber('SUBTRACT', 7.2, 3.7)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 10.1, 5.8)).to.equal(4);
    });
  })

  describe('type=DIVIDE', () => {
    it('assert that a is rounded and divides correctly', () => {
      expect(calculateNumber('DIVIDE', 10.2, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 8.8, 3)).to.equal(3);
    });
  
    it('assert that b is rounded and divides correctly', () => {
      expect(calculateNumber('DIVIDE', 10, 1.7)).to.equal(5);
      expect(calculateNumber('DIVIDE', 12, 3.8)).to.equal(3);
    });
  
    it('assert that a and b are rounded and divides correctly', () => {
      expect(calculateNumber('DIVIDE', 7.8, 3.7)).to.equal(2);
      expect(calculateNumber('DIVIDE', 10.1, 2.1)).to.equal(5);
    });
  })

  describe('type=DIVIDE and return Error', () => {
    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.be.equal('Error');
    });
    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.be.equal('Error');
    });
    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.be.equal('Error');
    });
    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.be.equal('Error');
    });
    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.be.equal('Error');
    });
    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.be.equal('Error');
    });
    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.be.equal('Error');
    });
  })
})
