
const insertionSort = (array) => {
  let length = array.length

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j--) {
      if(array[j] < array[j - 1]) {
        swap(array, j, j - 1)
      } else {
        break;
      }
    }
  }

  return array
}

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

module.exports = insertionSort;
