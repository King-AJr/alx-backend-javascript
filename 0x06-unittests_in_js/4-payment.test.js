const sinon = require('sinon');
const Utils = require('./utils');
const {expect} = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with the same arguments', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        calculateNumberStub.returns(10)

        const consoleLogSpy = sinon.spy(console, 'log');

        const result = calculateNumberStub('SUM', 100, 20);


        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        
        expect(consoleLogSpy.callCount).to.be.equal(1);
        expect(consoleLogSpy.firstCall.args[0]).to.equal('The total is: 10');
        expect(result).to.equal(10);
        // expect(calculateNumberStub.callCount).to.be.equal(1);
        

        calculateNumberStub.restore()
        consoleLogSpy.restore()
        
    })
})