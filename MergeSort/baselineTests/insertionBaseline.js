const insertionSort = (toBeSortedArray) => {
  let array = toBeSortedArray.slice(0),
    i, j;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    for (j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
}

module.exports = insertionSort;