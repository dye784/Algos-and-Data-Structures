class LLredBlackBST {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    this.root = this._insert(this.root, key, value);
    this.root.color = BLACK;
  }
}

class Node {

}

module.exports = { LLredBlackBST, Node }
