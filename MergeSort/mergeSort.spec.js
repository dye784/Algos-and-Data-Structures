'use strict';


describe('Merge sort', function () {

  describe('split', function () {

    it('splits an array in half', function () {
      expect(split([])).toEqual([[], []]);
    });

    it('splits array of even length down the middle', function () {
      expect(split([1, 2])).toEqual([[1], [2]]);
    });

    it('splits array of odd length down the middle, kind of', function () {
      expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
    });

  });

  describe('merge', function () {

    it('combines two arrays into one', function () {
      expect(merge([], [])).toEqual([]);
    });

    it('combines two sorted arrays of equal length into one sorted array', function () {
      expect(merge([1, 3, 9], [2, 6, 15])).toEqual([1, 2, 3, 6, 9, 15]);
      expect(merge([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('combines sorted arrays of unequal lengths into one sorted array', function () {
      expect(merge([1, 2, 3, 7, 9, 11], [4, 5, 50])).toEqual([1, 2, 3, 4, 5, 7, 9, 11, 50]);
    });

  });

  describe('mergeSort', function () {

    it('returns a sorted array even if it\'s 0 or 1 elements long', function () {
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([42])).toEqual([42]);
    });

    it('...actually merge sorts', function () {
      const sorted = mergeSort([29, 8, 100, 17, 60, 43, -20]);
      expect(sorted).toEqual([-20, 8, 17, 29, 43, 60, 100]);
    });

  });

});

