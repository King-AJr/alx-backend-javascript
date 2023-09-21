const { expect } = require('chai')
const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', () => {
    it('test when success is true', (done) => {
        const data = {data: 'Successful response from the API' }
        const success = true
        getPaymentTokenFromAPI(success)
        .then((result) => {
            expect(result).to.deep.equal(data);
        done()
        });
    })
})