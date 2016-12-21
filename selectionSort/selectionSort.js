
const selectionSort = (array) => {
  let length = array.length

  for (let i = 0; i < length; i++) {

    let min = i; // index to swap

    for (let j = i + 1; j < length; j++) {

      // if the element is less than we adjust min
      if(array[j] < array[min]) min = j
    }

    // if the index and the min index != swap
    if(i !== min) {
      swap(array, i, min)
    }
  }

  return array
}

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

module.exports = selectionSort;
