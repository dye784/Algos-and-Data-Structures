class CircularBuffer {
  constructor(capacity) {
    this.buffer = Array(capacity);
    this.capacity = capacity;
    this.head = this.tail = this.size = 0;
  }

  // add to array at head index;
  enqueue(data) {
    this.tail = (this.head + this.size) % this.capacity // adjust the tail

    let nextIdx = this.head + 1; // next index we are adding into the array

    if (nextIdx >= this.capacity) nextIdx = 0; // loop around to beginning of array
    if (this.size < this.capacity) this.size++; // increase the size if it's under capacity

    this.buffer[this.head] = data; // put data in the array
    this.head = nextIdx; // set the pointer to the new index;

  }

  // remove from array at tail index;
  dequeue() {
    if (this.size === 0) return undefined;

    let data = this.buffer[this.tail]; // the item to be removed
    this.buffer[this.tail] = null; // delete item

    let nextIdx = this.tail + 1; // increment the tail

    if (nextIdx >= this.capacity) nextIdx = 0; // check if tail circles around
    if (this.size > 0) this.size--; // decrement size
    this.tail = nextIdx; // set new tail

    return data; // return the data
  }

}

module.exports = CircularBuffer;
