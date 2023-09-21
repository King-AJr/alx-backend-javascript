const chai = require('chai');
const { expect } = require('chai')
const request = require('request');

const app = require('./api');

describe('returns correct response', () => {
    it('should return Welcome to the payment system', (done) => {
        request.get('http://localhost:7865/', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system')
            done();
        })
    })
})

describe('accept param and return correct response', () => {
    it('should return Payment methods for cart :id when id is num', (done) => {
        const id = 3;
        request.get(`http://localhost:7865/cart/${id}`, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Payment methods for cart 3');
            done();
        })
    })
    it('should return status code 404 if id is not a number', (done) => {
        request.get('http://localhost:7865/cart/id', (error, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        })
    })
})