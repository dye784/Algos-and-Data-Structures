'use strict'

const insertionSort = function(arr) {

  let length = arr.length

  for (let i = 1; i < length; ++i) {

    const elToSort = arr[i];
    const startIdx = i;  // We don't need to reassign `i`, but for clarity's sake...

    this.shiftElement(arr, startIdx, elToSort);  // When the test is called we'll be in the module.exports' context

  }

  return arr;

};


const shiftElement = function(arr, startIdx, elToSort) {

  while (startIdx > 0 && elToSort < arr[startIdx - 1]) {
    arr[startIdx] = arr[startIdx - 1];
    --startIdx;
  }

  arr[startIdx] = elToSort;

};


module.exports = {
  insertionSort,
  shiftElement
};
