const RED = 'RED' // less problems when debugging
const BLACK = 'BLACK'

class Node {
  constructor(key, value, color = BLACK, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = left;
    this.right = right;
  }
}

class LLredBlackBST {
  constructor() {
    this.root = null;
  }

  isRed(node) {
    if (node === null) return false;
    return node.color === RED;
  }

    // iterates through tree to check if item exists in tree. Similar to elementary BST only with the added key and values.
  search(key) {
    let currentNode = this.root;

    while (currentNode !== null) {
      let currentNodeKey = currentNode.key;

      if (key < currentNodeKey) currentNode = currentNode.left
      else if (key > currentNodeKey) currentNode = currentNode.right
      else return currentNode.value
    }

    return null;
  }

  // makes right leaning 3-tree into left leaning 3-tree
  rotateLeft(node) {
    if (!node.right) return;

    let temp = node.right; // temp var to prevent garbage collection
    node.right = temp.left; // set right connect to be left connection
    temp.left = node; // set temp left to node So temp has a right and left
    temp.color = node.color; // keep the attachment color(can only be black)
    node.color = RED; // set the new attachment to be red because this is the left
    return temp;
  }

  // exact opposite of rotate left for the most part
  rotateRight(node) {
    if (!node.left) return;

    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    temp.color = node.color;
    node.color = RED;
    return temp;
  }

  // in the temporary case where we have a node with two red branches on its children connection
  // we made the attachment to the node RED and its branches black
  flipColor(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }

  // set new nodes with key and value
  // calls our private _insert method
  insert(key, value) {
    this.root = this._insert(this.root, key, value); // sets root to return value
    this.root.color = BLACK; // root node default will be black until flipColor is called to change this to red
  }

  _insert(node, key, value) {
    if (!node) return new Node(key, value, RED) // base case

    // recursively traverse tree to add node
    if (key < node.key)      node.left = this._insert(node.left, key, value);
    else if (key > node.key) node.right = this._insert(node.right, key, value);
    else                    node.value = value; // if key exists we set the value

    // restructure tree

    // rotate left if the the right is red and left is black
    if (this.isRed(node.right) && !this.isRed(node.left))      node = this.rotateLeft(node);

    // rotate right if parent and child are both red
    if (this.isRed(node.left)  &&  this.isRed(node.left.left)) node = this.rotateRight(node);

    // flip colors if both children are red
    if (this.isRed(node.left)  &&  this.isRed(node.right))     this.flipColor(node);

    return node; // don't forget to return the node
  }

}

module.exports = { LLredBlackBST, RED, BLACK, Node }
