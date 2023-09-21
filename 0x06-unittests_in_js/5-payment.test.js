const sinon = require('sinon')
const {expect} = require('chai')
const sendPaymentRequestToApi = require('./5-payment')


describe('sendPaymentRequestToApi: test fn with varying values', () => {
    let consoleLogSpy;

    beforeEach(() => {
        if (!consoleLogSpy) {
            consoleLogSpy = sinon.spy(console, 'log');
        }
    });

    afterEach(() => {
        consoleLogSpy.resetHistory();
    });

    it('test using 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 120');
        expect(consoleLogSpy.callCount).to.be.equal(1);
    })

    it('test using 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 20');
        expect(consoleLogSpy.callCount).to.be.equal(1);
    })
})