
class HeapSort {
  constructor(array) {
    this.array = array;
    this.size = array.length
  }

  isEmpty() {
    return this.size === 0
  }

  sink(idx1, N) {

    // while the index is still inside the array
    while(2 * idx1 <= N) {

      // the next index is double
      let idx2 = 2 * idx1

      // if the next index is not the last element and idx2 + 1 is larger, we increment
      // so we can swap with the
      if(idx2 < N && this.isLess(idx2, idx2 + 1)) idx2++;

      // if idx1 element is not less than idx2 element break
      if(!this.isLess(idx1, idx2)) break;

      // swap this element with the element at idx2
      // now we should be at the index double from before
      this.exchange(idx1, idx2)

      // we are at idx2 we check again until we reach the right spot
      idx1 = idx2;
    }
  }

  // checks if less
  isLess(idx1, idx2) {
    return this.array[idx1 - 1] < this.array[idx2 - 1]
  }

  // swaps the two elements in array
  exchange(idx1, idx2) {
    let temp = this.array[idx1 - 1];
    this.array[idx1 - 1] = this.array[idx2 - 1];
    this.array[idx2 - 1] = temp;
  }

  sort() {
    let size = this.size

    // construct the heap to be in max order
    // start from 2nd to last row from the right and move to the left
    // don't can't sink further than last row
    for (let i = Math.floor(size / 2); i >= 1; i--) {
      this.sink(i, size)
    }

    // sort the heap
    while(size > 1) {

      this.exchange(1, size--)
      this.sink(1, size)
    }

    return this.array
  }

}

module.exports = HeapSort;
