const chai = require('chai');
const { expect } = require('chai')
const request = require('request');

const app = require('./api');

describe('returns correct response', () => {
    it('should return Welcome to the payment system', (done) => {
        request.get('http://localhost:7865/', (_error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system')
            done();
        })
    })
})

describe('accept param and return correct response', () => {
    it('should return Payment methods for cart :id when id is num', (done) => {
        const id = 3;
        request.get(`http://localhost:7865/cart/${id}`, (_error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Payment methods for cart 3');
            done();
        })
    })

    it('should return status code 404 if id is a string', (done) => {
        request.get('http://localhost:7865/cart/id', (_error, res, _body) => {
            expect(res.statusCode).to.equal(404);
            done();
        })
    })

    it('GET /cart/:id returns 404 response if id is alphanumeric', (done) => {
        request.get('http://localhost:7865/cart/d200-44a5-9de6', (_error, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });
})