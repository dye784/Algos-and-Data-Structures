class UnorderedMaxPQ {
  // have a prop array and size equal to input length
  constructor(array) {
    this.array = array;
    this.size = array.length;
  }

  // checks if empty
  isEmpty() {
    return this.array.length === 0;
  }

  // remove max from array
  delMax() {
    let max = 0; // index

    // iterate through the array
    for (let i = 0; i < this.size; i++) {
      // if array[max] is less than array[i] the new max is at index i
      if (this.isLess(max, i)) max = i;
    }

    // move the max to the end of the array
    this.exchange(max, this.size - 1);

    // return the last element and decrement the size of array
    return this.array[--this.size];
  }

  // input element into end of array and incement size
  insert(element) {
    this.array[this.size++] = element;
  }

  // for more modular approach but not necessary
  isLess(idx1, idx2) {
    return this.array[idx1] < this.array[idx2];
  }

  // same as sorting method
  exchange(idx1, idx2) {
    const temp = this.array[idx1];
    this.array[idx1] = this.array[idx2];
    this.array[idx2] = temp;
  }
}

module.exports = UnorderedMaxPQ;
