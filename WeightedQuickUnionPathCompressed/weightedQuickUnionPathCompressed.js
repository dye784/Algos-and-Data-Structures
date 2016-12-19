class WeightedQuickUnionPathCompressed {
  constructor(length) {
    this.arrayOfIds = Array(length);
    this.arrayOfSizes = Array(length);

    for (var i = 0; i < this.arrayOfIds.length; i++) {
      this.arrayOfIds[i] = i;
      this.arrayOfSizes[i] = 1;
    }
  }

  root(i) {
    while( i !== this.arrayOfIds[i] ) {

      // this is the magic one liner
      this.arrayOfIds[i] = this.arrayOfIds[this.arrayOfIds[i]]

      // So what do we actually do?

      // Essentially we are making every node in its path to the
      // root node point to the its grandparent node.
      // This halves the path length each time when we search through
      // the tree. So on the next pass of the loop we halve it again.
      // Nice right?

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

    if(firstId === secondId) return;

    if(this.arrayOfSizes[firstIndex] < this.arrayOfSizes[secondIndex]) {
      this.arrayOfIds[firstId] = secondId;
      this.arrayOfSizes[firstId]++;
    } else {
      this.arrayOfIds[secondId] = firstId;
      this.arrayOfSizes[secondId]++;
    }
  }
}

module.exports = WeightedQuickUnionPathCompressed
