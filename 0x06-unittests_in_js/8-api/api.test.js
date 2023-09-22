const { expect } = require('chai')
const request = require('request');


describe('returns correct response', () => {
    const API_URI = 'http://localhost:7865'

    it('should return Welcome to the payment system', (done) => {
        request.get(`${API_URI}/`, (_error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system')
            done();
        })
    })
});