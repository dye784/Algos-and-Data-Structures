class WeightedQuickUnion {
  constructor(length) { // adds arrayOfSizes all starting at depth 1
    this.arrayOfIds = Array(length);
    this.arrayOfSizes = Array(length);

    for (var i = 0; i < this.arrayOfIds.length; i++) {
      this.arrayOfIds[i] = i;
      this.arrayOfSizes[i] = 1;
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

  // weighs trees on depth
  // connects tree of less depth to the tree of greater than or equal depth
  connect(firstIndex, secondIndex) {
    let firstId = this.root(firstIndex)
    let secondId = this.root(secondIndex)

    // minor optimization to not run rest of code if they have the same id
    if(firstId === secondId) return;

    // attach based on depth
    if(this.arrayOfSizes[firstIndex] < this.arrayOfSizes[secondIndex]) {
      this.arrayOfIds[firstId] = secondId;
      this.arrayOfSizes[firstId]++; //increment depth of tree
    } else {
      this.arrayOfIds[secondId] = firstId;
      this.arrayOfSizes[secondId]++;
    }
  }
}

module.exports = QuickUnion
