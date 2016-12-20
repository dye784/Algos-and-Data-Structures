class InsertionSort {
  constructor(arr) {
    this.array = arr
  }

  sort() {
    let length = this.array.length

    for (let i = 0; i < length; i++) {
      for (let j = i; j < length; j--) {
        if(this.isLess(j, j - 1)) this.exchange(j, j - 1)
        else break;
      }
    }

    return this.array
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

module.exports = InsertionSort;
