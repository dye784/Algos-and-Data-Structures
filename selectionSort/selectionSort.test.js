'use strict';

const expect = require('chai').expect,
      sinon = require('sinon');

require('chai').use(require('sinon-chai'));

// const { selectionSort, swap } = require('./selectionSort');
const selectionSort = require('./selectionSort');

describe('Selection sort', function() {

  // it('is a function', function() {
  //   expect((selectionSort.selectionSort)).to.be.a('function');
  // });

  // it('sorts the array', function() {
  //   expect(selectionSort.selectionSort([10, 9, 1, 2, 5, 4])).to.deep.equal([1, 2, 4, 5, 9, 10]);
  // });

  describe('Swap', function() {

    let swapSpy;

    beforeEach(function() {
      swapSpy = sinon.spy(selectionSort, 'swap');
    });

    afterEach(function() {
      swapSpy.restore();
    })

    it('is a function', function() {
      expect((selectionSort.swap)).to.be.a('function');
    });

    it('sorts in the right order', function() {
      // it('2nd example using a spy', function () {
      //   logger = {
      //     log: function (msg) {
      //       console.log(msg);
      //     }
      //   };

      //   // Spying on the log function
      //   sinon.spy(logger, 'log');

      //   var greetings = moduleA.greet('James', logger);

      //   expect(logger.log).to.have.been.calledOnce;
      //   expect(logger.log).to.have.been.calledWith('Greeting: James');

      //   expect(greetings).to.equal('Hello James');

      //   logger.log.restore();
      // });
      const testArr = [2, 1]
      const test = selectionSort.selectionSort(testArr);
      console.log(swapSpy.callCount)
    });

  });
});
