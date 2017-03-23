'use strict';

const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const chaiSinon = require('chai-sinon');
chai.use(chaiSinon);

const { mergeSort, split, merge } = require('./mergeSort');
const mergeFuncs = require('./mergeSort');

const insertionSort = require('./baselineTests/insertionBaseline');
const bubbleSort = require('./baselineTests/bubbleBaseline');

describe('Merge sort', () => {

  describe('split', () => {

    it('splits an array in half', () => {
      expect(split([])).to.deep.equal([[], []]);
    });

    it('splits array of even length down the middle', () => {
      expect(split([1, 2])).to.deep.equal([[1], [2]]);
    });

    it('splits array of odd length down the middle, wighted to the right', () => {
      expect(split([1, 2, 3])).to.deep.equal([[1], [2, 3]]);
    });

  });

  describe('merge', () => {

    it('combines two arrays into one', function () {
      expect(merge([], [])).to.deep.equal([]);
    });

    it('combines two sorted arrays of deep.equal length into one sorted array', () => {
      expect(merge([1, 3, 9], [2, 6, 15])).to.deep.equal([1, 2, 3, 6, 9, 15]);
      expect(merge([1, 2, 3, 4], [5, 6, 7, 8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('combines sorted arrays of unequal lengths into one sorted array', () => {
      expect(merge([1, 2, 3, 7, 9, 11], [4, 5, 50])).to.deep.equal([1, 2, 3, 4, 5, 7, 9, 11, 50]);
    });

  });

  describe('mergeSort', () => {

    it('returns a sorted array even if it\'s 0 or 1 elements long', function () {
      expect(mergeSort([])).to.deep.equal([]);
      expect(mergeSort([42])).to.deep.equal([42]);
    });

    it('sorts correctly', () => {
      const sorted = mergeSort([29, 8, 100, 17, 60, 43, -20]);
      expect(sorted).to.deep.equal([-20, 8, 17, 29, 43, 60, 100]);
    });

    describe('function calls', () => {
      const toBeSortedFour = [4, 3, 2, 1];
      const toBeSortedEight = [8, 7, 6, 5, 4, 3, 2, 1];

      beforeEach('populate spies', () => {
        sinon.spy(mergeFuncs, 'mergeSort');
        sinon.spy(mergeFuncs, 'merge');
        sinon.spy(mergeFuncs, 'split');
      });

      afterEach('release spies', () => {
        mergeFuncs.mergeSort.restore();
        mergeFuncs.merge.restore();
        mergeFuncs.split.restore();
      });

      it('uses recursion', () => {
        mergeFuncs.mergeSort(toBeSortedFour);
        expect(mergeFuncs.mergeSort.callCount).to.be.greaterThan(1);
      });

      it('calls the `merge` and `split` functions', () => {
        mergeFuncs.mergeSort(toBeSortedEight);
        expect(mergeFuncs.merge.called).to.be.true;
        expect(mergeFuncs.split.called).to.be.true;
        expect(mergeFuncs.merge.callCount).to.be.greaterThan(1);
        expect(mergeFuncs.split.callCount).to.be.greaterThan(1);
      });

    });

    describe('execution time', () => {
      const toBeSortedSixteen = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

      it('is considerably faster than insertion sort or bubble sort with a large input set', function (done) {
        // ensure that mocha doesn't time out. If you are on a slow machine, speed this up
        this.timeout(5000);
        // make a quite long array in very bad sorting order
        const toBeSortedLong = toBeSortedSixteen
          .reduce((accum, curr) => {
            return accum.concat(new Array(2000).fill(curr));
          }, []);

        var mergeStart = new Date();
        mergeSort(toBeSortedLong);
        var mergeTime = new Date() - mergeStart;

        var insertStart = new Date();
        insertionSort(toBeSortedLong);
        var insertionTime = new Date() - insertStart;

        var bubbleStart = new Date();
        bubbleSort(toBeSortedLong);
        var bubbleTime = new Date() - bubbleStart;

        expect(mergeTime).to.be.lessThan(insertionTime);
        expect(mergeTime).to.be.lessThan(bubbleTime);

        expect(mergeTime).to.be.at.most(insertionTime / 3);
        expect(mergeTime).to.be.at.most(bubbleTime / 10);

        done();
      });

    });

  });

});
