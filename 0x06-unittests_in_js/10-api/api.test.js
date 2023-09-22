const chai = require('chai');
const { expect } = require('chai')
const request = require('request');

const app = require('./api');

describe('test /', () => {
    it('should return Welcome to the payment system', (done) => {
        request.get('http://localhost:7865/', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system')
            done();
        })
    })
})

describe('test /cart/:id', () => {
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

describe('test /login and /available_payments', () => {
    it('should return object with payment methods and status code 200', (done) => {
        const data = {
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          }
        request.get('http://localhost:7865/available_payments', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal(data)
            done();
        }) 
    });

    it('should return Welcome:<UserName> gotten from req', () => {
        request.post('http://localhost:7865/login', {json: {userName:'John Doe'}}, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.be.equal('Welcome John Doe')
            done();
        }) 
    })
})