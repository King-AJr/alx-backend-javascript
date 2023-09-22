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

    it('should return Payment methods for cart :id when id is num', (done) => {
        const id = 3;
        request.get(`${API_URI}/cart/${id}`, (_error, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.be.equal('Payment methods for cart 3');
            done();
        })
    })

    it('should return status code 404 if id is a string', (done) => {
        request.get(`${API_URI}/cart/id`, (_error, res, _body) => {
            expect(res.statusCode).to.equal(404);
            done();
        })
    })

    it('GET /cart/:id returns 404 response if id is alphanumeric', (done) => {
        request.get(`${API_URI}/cart/F300+44Z5+9We0`, (_error, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });
})