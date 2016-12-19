class StackArr { // simple implementations
  constructor() {
    this.stack = Array(1); // array of strings of length one
    this.size = 0; // stuff filled in stack
  }

  // check if stack has anything
  isEmpty() {
    return this.size === 0;
  }

  // add to the end
  push(str) {
    // if the array is filled we resize the array to double its length
    if(this.size === this.stack.length) this.resize(2 * this.stack.length)

    this.stack[this.size++] = str;
  }

  // remove from end
  pop() {
    let item = this.stack[this.size--]

    // avoids clogging memory in array aka 'loitering' not necessary but nice
    this.stack[this.size] = null;

    // we shrink array when the array is a quarter full
    if(this.size > 0 && this.size === this.stack.length / 4) this.resize(this.stack.length / 2)
    return item;
  }

  resize(size) { // copy array over to a new array
    const copy = Array(size);

    for (var i = 0; i <= this.size; i++) {
      copy[i] = this.stack[i]
    }

    return copy;
  }

}

module.exports = StackArr
