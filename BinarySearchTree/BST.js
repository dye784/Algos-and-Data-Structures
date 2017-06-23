class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert(val) {
    const direction = val < this.value ? 'left' : 'right';
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BinarySearchTree(val);
    this.magnitude++;
  }

  // recursive binary search
  containsRecursive(val) {
    if (this.value === val) return true;
    let direction = val < this.value ? 'left' : 'right';
    if (this[direction]) return this[direction].containsRecursive(val);
    else return false;
  }

  // iterative  binary search
  containsIterative(val) {
    let tree = this;

    while (tree !== null) {
      if (val < tree.value) tree = tree.left;
      else if (val > tree.value) tree = tree.right;
      else return true;
    }

    return false;
  }

  // all in one implementation
  depthFirstForEach(fn, opt = 'in-order') {
    if (opt === 'pre-order') fn(this.value);
    if (this.left) this.left.depthFirstForEach(fn, opt);
    if (opt === 'in-order') fn(this.value);
    if (this.right) this.right.depthFirstForEach(fn, opt);
    if (opt === 'post-order') fn(this.value);
  }

  // OR separate appraoches for each

  dfsInOrder(fn) {
    if (this.value === null) return;
    if (this.left) this.left.dfsInOrder(fn);
    fn(this.value);
    if (this.right) this.right.dfsInOrder(fn);
  }

  dfsPreOrder(fn) {
    if (this.value === null) return;
    fn(this.value);
    if (this.left) this.left.dfsPreOrder(fn);
    if (this.right) this.right.dfsPreOrder(fn);
  }

  dfsPostOrder(fn) {
    if (this.value === null) return;
    if (this.left) this.left.dfsPostOrder(fn);
    if (this.right) this.right.dfsPostOrder(fn);
    fn(this.value);
  }

  breadthFirstForEach(fn) {
    const queue = [this];
    while (queue.length) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      fn(current.value);
    }
  }

  size(){
    return this.magnitude;
  }
}

module.exports = BinarySearchTree;
