'use strict';

const expect = require('chai').expect,
      sinon = require('sinon');

require('chai').use(require('sinon-chai'));

const selectionSort = require('./selectionSortStart');


xdescribe('Selection sort', function() {

  it('sorts the array', function() {
    expect(selectionSort.selectionSort([10, 9, 1, 2, 5, 4])).to.deep.equal([1, 2, 4, 5, 9, 10]);
  });


  describe('Swap', function() {

    let swapSpy;

    beforeEach(function() {
      swapSpy = sinon.spy(selectionSort, 'swap');
    });

    afterEach(function() {
      swapSpy.restore();
    })


    it('sorts in the right order', function() {

      const testArr = [2, 1, 10, 4, 5, 20]
      const sorted = selectionSort.selectionSort(testArr);

      expect(sorted).to.deep.equal([1, 2, 4, 5, 10, 20]);
      expect(swapSpy).to.have.been.calledWith(testArr, 0, 1);
      expect(swapSpy).to.have.been.calledWith(testArr, 2, 3);
      expect(swapSpy).to.have.been.calledWith(testArr, 3, 4);

    });

  });

});
