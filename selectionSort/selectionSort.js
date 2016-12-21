const selectionSort = (arr) => {

  let length = arr.length

  for (let i = 0; i < length - 1; i++) {  // Final element will have already been sorted

    let min = i;  // index to swap

    for (let j = i + 1; j < length; j++) {

      // if the jth element < min's value j becomes new min
      if (arr[j] < arr[min]) min = j
    }

    // if the ith (1st unsorted) index !== the min index swap
    if (i !== min) {
      swap(arr, i, min)
    }

  }

  return arr;
}


const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


module.exports = selectionSort;
