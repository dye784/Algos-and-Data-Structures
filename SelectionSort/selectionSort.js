'use strict'

const selectionSort = function(arr) {

  let length = arr.length

  for (let i = 0; i < length - 1; i++) {  // Final element will have already been sorted

    let minimumIdx = i;  // index to swap

    for (let j = i + 1; j < length; j++) {

      // if the jth (i.e. current unsorted) element < minimumIdx's value, j becomes the new minimumIdx
      if (arr[j] < arr[minimumIdx]) minimumIdx = j
    }

    // if the ith (i.e. 1st unsorted) index !== the min's index swap
    if (i !== minimumIdx) {
      this.swap(arr, i, minimumIdx);  // When the test calls `swap` it' ll be in the module.export's context
    }

  }

  return arr;
};

const swap = function(arr, idxA, idxB) {
  [arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]];  // Swaps the two indices' values using ES6 array destructuring assignment
}

module.exports = {
  selectionSort,
  swap
};
