const selectionSort = (arr) => {

  let length = arr.length

  for (let i = 0; i < length - 1; i++) {  // Final element will have already been sorted

    let minimumIdx = i;  // index to swap

    for (let j = i + 1; j < length; j++) {

      // if the jth (i.e. current unsorted) element < min's value j becomes new min
      if (arr[j] < arr[minimumIdx]) minimumIdx = j
    }

    // if the ith (i.e. 1st unsorted) index !== the min's index swap
    if (i !== minimumIdx) {
      swap(arr, i, minimumIdx)
    }

  }

  return arr;
}


const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


module.exports = selectionSort;
