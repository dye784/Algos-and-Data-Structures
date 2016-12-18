// O(n^2) Quadratic time. Pretty slow
class QuickFindUF { // Union Find Algo
  constructor(length) {
    this.arrayOfIds = Array(length);

    // sets id to its index in the array
    for (var i = 0; i < this.arrayOfIds.length; i++) {
      this.arrayOfIds[i] = i
    }
  }


  // checks if they are connected, returns a boolean
  // if the ids are the same then they are connected
  areTheyConnected(firstIndex, secondIndex) {
    return this.arrayOfIds[firstIndex] === this.arrayOfIds[secondIndex]
  }


  // connects the element at the firstIndex with the element in the secondIndex
  connect(firstIndex, secondIndex) { // AKA UNION

    // first and second ids of the elements
    // we must store it here as a variable because as we loop through the array we might erase it
    let firstId = this.arrayOfIds[firstIndex]
    let secondId = this.arrayOfIds[secondIndex]

    // goes through the whole array and any element with the id equal to the firstId
    // will be set to the secondId
    for (var i = 0; i < this.arrayOfIds.length; i++) {
      if(this.arrayOfIds[i] === firstId) this.arrayOfIds[i] = secondId
    }
  }
}

module.exports = QuickFindUF
