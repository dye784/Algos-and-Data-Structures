
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
      let temp = array[i]
      array[i] = array[min]
      array[min] = temp;
    }
  }

  return array
}

module.exports = selectionSort;
