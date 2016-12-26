class CircularBuffer {
  constructor(capacity) {
    this.buffer = Array(capacity);
    this.capacity = capacity;
    this.head = this.tail = this.size = 0;
  }

  push(data) {
    let nextIdx = this.head + 1; // next index we are adding into the array

    if (nextIdx >= this.capacity) nextIdx = 0; // loop around to beginning of array
    if (this.size < this.capacity) this.size++; // increase the size if it's under capacity

    this.buffer[this.head] = data; // put data in the array
    this.head = nextIdx; // set the pointer to the new index;
  }

  pop() {
    let data = this.buffer[this.tail]; // the item to be removed

    return data;
  }

  // shift(element) {

  // }

  // unshift(element) {

  // }
  get(index) {

  }
}

module.exports = CircularBuffer;
