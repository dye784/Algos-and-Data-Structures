class SelectionSort {
  constructor(arr) {
    this.array = arr
  }

  sort() {
    let length = this.array.length

    for (let i = 0; i < length; i++) {

      let min = i; // index to swap

      for (let j = i + 1; j < length; j++) {

        // if the element is less than we adjust min
        if(this.isLess(j, min)) {
          min = j
        }
      }

      // if the index and the min index != swap
      if(i !== min) {
        this.exchange(i, min)
      }
    }

    return this.array
  }

  isLess(idx1, idx2) {
    return this.array[idx1] < this.array[idx2]
  }

  exchange(idx1, idx2) {
    // do this to ensure the element value doesn't get garbage collected
    let temp = this.array[idx1]
    this.array[idx1] = this.array[idx2]
    this.array[idx2] = temp;
  }
}

module.exports = SelectionSort;
