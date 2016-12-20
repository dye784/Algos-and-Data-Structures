
const shellSort = (array) => {
  let length = array.length
  let h = 1;

  // start at the highest h and move down
  // 1, 4, 13, 40, 121, 364, ...
  while(h < length / 3) h = 3 * h + 1

  // while h is >= 1 because h = 0 means swapping itself
  while(h >= 1) {

    // we start at h
    for (let i = h; i < length; i++) {

      // starting at i if j >= h and the item h disance away
      // is less than this number, we swap
      for (let j = i; j >= h; j -= h) {
        if(array[j] < array[j - h]) {
          swap(array, j, j - h)
        }
      }

    }

    // decrements by 3 so if we start at 364 we get
    // 121 after Math.floor
    h = Math.floor(h / 3)
  }

  return array
}

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

module.exports = shellSort;
