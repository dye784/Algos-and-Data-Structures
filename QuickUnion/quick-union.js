class QuickUnion { // Union Union Algo

  // starts out the same as the QuickFindUF algo
  // the construction of the Algo is the same
  constructor(length) {
    this.arrayOfIds = Array(length);

    for (var i = 0; i < this.arrayOfIds.length; i++) {
      this.arrayOfIds[i] = i
    }
  }


  // Here is where the it starts to change

  // function that chases the pointer until it reaches the root
  root(i) {

    // while i is not equal to the id
    while( i !== this.arrayOfIds[i] ) {

      // change i to the id and keep going to find the root
      i = this.arrayOfIds[i];
    }

    // return i which is now the id of the root
    return i;
  }

  // checks if they are connected, returns a boolean

  // We cannot check if the top id is the same because now the array
  // is a tree structure
  // we have to point to the root

  // are the roots connected?
  areTheyConnected(firstIndex, secondIndex) {
    return this.root(firstIndex) === this.root(secondIndex)
  }


  // connects the element at the firstIndex with the element in the secondIndex
  // in this case we do not need to loop through the array to change all the indecies
  // now we can just change the index of one of them
  // we connect by connecting the id of the root
  connect(firstIndex, secondIndex) { // AKA UNION

    // first we find the root Id of both indicies
    let firstId = this.root(firstIndex)
    let secondId = this.root(secondIndex)

    // connect the root node of the first index to the root node of second index
    this.arrayOfIds[firstId] = secondId
  }
}

module.exports = QuickUnion
