const chai = require('chai');
const { expect } = require('chai')
const request = require('request');


describe('returns correct response', () => {
    it('should return Welcome to the payment system', (done) => {
        request.get('http://localhost:7865/', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system')
            done();
        })
    })
})