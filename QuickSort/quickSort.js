const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

// function that goes through the array
const partition = (array, lo, hi) => {
  let i = lo;
  let j = hi + 1;

  while (true) {

    // scan from left to right of array
    // as long as array[i] < array[lo]
    // increment i till we get something that violates
    while (array[++i] < array[lo]) {

      // break loop if index are the same
      if (i === hi) break;
    }

    // scan from right to left of array
    // as long as array[j] > array[lo]
    // decrement j till we get something that violates
    while (array[lo] < array[--j]) {

      // break loop if index are the same
      if (j === lo) break;
    }

    // break out if i >= j because we've looked
    // at entire array already
    if (i >= j) break;

    // swap the i and j elements
    swap(array, i, j);
  }

  // swap the pivot element with the j element to put it
  // in the middle of the array
  // this ensures that everything to the left of j
  // is less and everything to the right is greater
  swap(array, lo, j);
  return j;
};

const quickSort = (array, lo = 0, hi = array.length - 1) => {
  if (hi <= lo) { return; }

  // find the index where everything pivots
  const j = partition(array, lo, hi);

  // recursively implement quick sort for each sub array

  // this is to the left of j
  quickSort(array, lo, j - 1);

  // this is to the right of j
  quickSort(array, j + 1, hi);

  return array;
};

module.exports = quickSort;
