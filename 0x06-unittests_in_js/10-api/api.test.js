const chai = require('chai');
const { expect } = require('chai')
const request = require('request');


describe('test /', () => {
    const API_URI = 'http://localhost:7865'
    it('should return Welcome to the payment system', (done) => {
        request.get(`${API_URI}/`, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system')
            done();
        })
    })

    it('should return Payment methods for cart :id when id is num', (done) => {
        const id = 3;
        request.get(`${API_URI}/cart/${id}`, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Payment methods for cart 3');
            done();
        })
    })
    it('should return status code 404 if id is not a number', (done) => {
        request.get(`${API_URI}/cart/id`, (error, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        })
    })

    it('should return object with payment methods and status code 200', (done) => {
        const data = {
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          }
        request.get(`${API_URI}/available_payments`, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal(data)
            done();
        }) 
    });

    it('should return Welcome:<UserName> gotten from req', () => {
        request.post(`${API_URI}/login`, {json: {userName:'John Doe'}}, (error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.be.equal('Welcome John Doe')
            done();
        }) 
    })
})