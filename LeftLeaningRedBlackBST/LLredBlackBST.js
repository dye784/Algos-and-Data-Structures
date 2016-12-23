const RED = "RED" // less problems when debugging
const BLACK = "BLACK"

class LLredBlackBST {
  constructor() {
    this.root;
  }

  // iterates through tree to check if item exists in tree.
  search(key) {
    let currentNode = this.root;

    while(currentNode != null) {
      let currentVal = currentNode.value;

      if(key < currentVal) currentNode = currentNode.left
      else if(key > currentVal) currentNode = currentNode.right
      else return currentVal
    }

    return null;
  }

  // makes right leaning 3-tree into left leaning 3-tree
  rotateLeft(node) {
    let temp = node.right; // temp var to prevent garbage collection
    node.right = node.left; // set right connect to be left connection
    temp.left = node; // set temp left to node So temp has a right and left
    temp.color = node.color; // keep the attachment color(can only be black)
    node.color = RED; // set the new attachment to be red because this is the left
    return temp;
  }

}

// Node in tree
class Node {
  constructor(key, value, left = null, right = null, color = BLACK) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.color = color;
  }
}

// for modularity
const isRed = (node) => {
  if(node === null) return false;
  return node.color === RED;
}

module.exports = { LLredBlackBST, Node, RED, BLACK, isRed }
