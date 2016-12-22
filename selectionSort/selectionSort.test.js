'use strict';

const expect = require('chai').expect,
      sinon = require('sinon');

require('chai').use(require('sinon-chai'));

// const { selectionSort, swap } = require('./selectionSort');
const selectionSort = require('./selectionSort');

describe('Selection sort', function() {

  it('is a function', function() {
    expect((selectionSort.selectionSort)).to.be.a('function');
  });

  it('sorts the array', function() {
    expect(selectionSort.selectionSort([10, 9, 1, 2, 5, 4])).to.deep.equal([1, 2, 4, 5, 9, 10]);
  });

  console.log(selectionSort)

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
      // spyOn(window, 'inOrder').and.callThrough();
      // var save = sinon.spy(Database, 'save');
      // setupNewUser({ name: 'test' }, function() { });
      // save.restore();
      // sinon.assert.calledOnce(save);
      selectionSort.selectionSort([10, 9, 1, 2, 5, 4])
      console.log(swapSpy.callCount);
      // sinon.assert.calledOnce(swapSpy);
    });

  });
});
