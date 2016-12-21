
class BinaryHeapMaxPQ {
  constructor(array) {
    this.array = array;
    this.size = array.length // make sure length comes before you unshift
    this.array.unshift(null) // put null in front to make it easier for the arithmetic
  }

  isEmpty() {
    return this.size === 0
  }

  // when a higher element is placed below a lower element
  // we need to move it up the tree
  swim(idx) {

    // while idx > 1 because we don't use the 0th index
    // and array[idx/2] < array[idx]
    while(idx > 1 && isLess(idx / 2, idx)) {

      // swap them
      this.exchange(idx, idx / 2)

      // go up to that index
      idx /= 2
    }
  }

  // opposite of swim
  // we try to move the lower element down the tree
  sink(idx1) {

    // while the index is still inside the array
    while(2 * idx1 <= this.size) {

      // the next index is double
      let idx2 = 2 * idx1

      // if the next index is not the last element and idx2 + 1 is larger, we increment
      // so we can swap with the
      if(idx2 < this.size && this.isLess(idx2, idx2 + 1)) idx2++;

      // if idx1 is less than idx2 break
      if(this.isLess(idx1, idx2)) break;

      // swap this element with the element at idx2
      // now we should be at the index double from before
      this.exchange(idx1, idx2)

      // we are at idx2 we check again until we reach the right spot
      idx1 = idx2;
    }
  }

  // delete max
  delMax() {

    // the max is at the top of the heap which would be index 1
    let max = this.array[1]

    // we swap the top with the end of the array
    this.exchange(1, this.size--);

    // we need to run the sink because after we swapped things might be out of order
    this.sink(1);

    // delete the element
    this.array[this.size + 1] = null;

    // return the new max
    return max;
  }

  // add element into queue
  insert(element) {

    // add it to the end
    this.array[this.size++] = element

    // swim because it might be out of order
    this.swim(this.size)
  }

  // checks if less
  isLess(idx1, idx2) {
    return this.array[idx1] < this.array[idx2]
  }

  // swaps the two elements in array
  exchange(idx1, idx2) {
    let temp = this.array[idx1];
    this.array[idx1] = this.array[idx2];
    this.array[idx2] = temp;
  }

}

module.exports = BinaryHeapMaxPQ;
