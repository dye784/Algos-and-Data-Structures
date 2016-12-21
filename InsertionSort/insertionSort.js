
const insertionSort = (arr) => {

  let length = arr.length

  for (let i = 1; i < length; ++i) {

    const elementToSort = arr[i];
    let j = i;

    while (j > 0 && elementToSort < arr[j - 1]) {
      arr[j] = arr[j - 1];
      --j;

      // Alternatively:
      // --j
    }

    arr[j] = elementToSort;

    // Then here:
    // arr.splice(j, 0, elementToSort)

  }

  return arr;

}
