'use strict';

const chai = require('chai');
const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);
const sinon = require('sinon');
const chaiSinon = require('chai-sinon');
chai.use(chaiSinon);

let { mergeSort, split, merge } = require('./mergeSort');
let fns = require('./mergeSort');

describe.only('Merge sort', () => {

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

    describe('algorithmic complexity', () => {
      let mergeSpy,
          splitSpy,
          mergeSortSpy,
          originalMergeSort,
          originalMerge,
          originalSplit;

      const toBeSortedFour = [4, 3, 2, 1];
      const toBeSortedEight = [8, 7, 6, 5, 4, 3, 2, 1];

      beforeEach('create spies', () => {
        // originalMerge = fns.merge;
        // originalSplit = fns.split;
        // originalMergeSort = fns.mergeSort;
        let spy = sinon.spy(fns, 'merge');
        sinon.spy(fns, 'mergeSort');
        sinon.spy(fns, 'split');
        // console.log(fns);
        // mergeSpy = sinon.spy(merge);
        // splitSpy = sinon.spy(split);
        // mergeSortSpy = sinon.spy(mergeSort);
      });

      afterEach('reset', () => {
        // fns.merge = originalMerge;
        // fns.split = originalSplit;
        // fns.mergeSort = originalMergeSort;
        fns.merge.restore();
        fns.split.restore();
        fns.mergeSort.restore();
      });

      it('calls split log n times', () => {
        // console.log(fns.merge);
        // console.log(fns.mergeSort);
        fns.mergeSort(toBeSortedFour);
        expect(fns.mergeSort).to.have.callCount(7);
        expect(fns.split).to.have.been.called();
        // expect(split).to.have.callCount(3);
      });

      it('calls mergeSort log n times', () => {
        // mergeSort(toBeSortedEight);
        // expect(mergeSortSpy).to.have.callCount(3)
      });

    });

  });

});
