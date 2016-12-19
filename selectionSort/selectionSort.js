class SelectionSort {
  constructor(arr) {
    this.array = arr
  }

  sort() {
    let length = arr.length
    for (var i = 0; i < length; i++) {
      for (var j = i + 1; j < length; j++) {
        if(this.isLess(this.array[j], this.array[i])
      }
    }
  }

  isLess(idx1, idx2) {
    return this.array[idx1] < this.array[idx2]
  }

  exchange(idx1, idx2) {
    let temp = this.array[idx1]
    this.array[idx1] = this.array[idx2]
    this.array[idx2] = temp;
  }
}

module.exports = SelectionSort;
