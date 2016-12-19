class WeightedQuickUnion {
  constructor(length) {
    this.arrayOfIds = Array(length);

    for (var i = 0; i < this.arrayOfIds.length; i++) {
      this.arrayOfIds[i] = i
    }
  }

  root(i) {
    while( i !== this.arrayOfIds[i] ) {
      i = this.arrayOfIds[i];
    }

    return i;
  }

  areTheyConnected(firstIndex, secondIndex) {
    return this.root(firstIndex) === this.root(secondIndex)
  }

  connect(firstIndex, secondIndex) {
    let firstId = this.root(firstIndex)
    let secondId = this.root(secondIndex)

    this.arrayOfIds[firstId] = secondId
  }
}

module.exports = WeightedQuickUnion
