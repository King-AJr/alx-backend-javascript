const sinon = require('sinon');
const Utils = require('./utils')
const {expect} = require('chai')
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with the same arguments', () => {
        const UtilsSpy = sinon.spy(Utils)

        sendPaymentRequestToApi(100, 20);
        expect(UtilsSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(UtilsSpy.calculateNumber.callCount).to.be.equal(1);
    })
})