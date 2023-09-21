const sinon = require('sinon')
const {expect} = require('chai')
const sendPaymentRequestToApi = require('./5-payment')


describe('sendPaymentRequestToApi', () => {
    it('test fn with varying values', () => {
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 120');
        expect(consoleLogSpy.callCount).to.be.equal(1);
        consoleLogSpy.restore();

        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 120');
        expect(consoleLogSpy.callCount).to.be.equal(1);

    })
})