'use strict';

const expect = require('chai').expect,
      sinon = require('sinon');

require('chai').use(require('sinon-chai'));

const insertionSort = require('./insertionSortStart');

xdescribe('Insertion sort', function() {

  it('sorts the array', function() {
    expect(insertionSort.insertionSort([10, 9, 1, 2, 5, 4])).to.deep.equal([1, 2, 4, 5, 9, 10]);
  });


  describe('shiftElement', function() {

    let shiftElementSpy;

    beforeEach(function() {
      shiftElementSpy = sinon.spy(insertionSort, 'shiftElement');
    });

    afterEach(function() {
      shiftElementSpy.restore();
    })


    it('sorts in the right order', function() {
      const testArr = [2, 1, 10, 4, 5, 20]
      const sorted = insertionSort.insertionSort(testArr);

      expect(sorted).to.deep.equal([1, 2, 4, 5, 10, 20]);

      expect(shiftElementSpy).to.have.been.calledWith(testArr, 1, 1);
      expect(shiftElementSpy).to.have.been.calledWith(testArr, 2, 10);
      expect(shiftElementSpy).to.have.been.calledWith(testArr, 3, 4);
      expect(shiftElementSpy).to.have.been.calledWith(testArr, 4, 5);
      expect(shiftElementSpy).to.have.been.calledWith(testArr, 5, 20);

    });

  });

});
