class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert(val){
    let direction = val < this.value ? 'left' : 'right';
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BinarySearchTree(val);
    this.magnitude++;
  }

  contains(val){
    if (this.value === val) return true;
    let direction = val < this.value ? 'left' : 'right';
    if (this[direction]) return this[direction].contains(val);
    else return false;
  }

  depthFirstForEach(fn, opt = 'in-order'){
    if (opt === 'pre-order') fn(this.value);
    if (this.left) this.left.depthFirstForEach(fn, opt);
    if (opt === 'in-order') fn(this.value);
    if (this.right) this.right.depthFirstForEach(fn, opt);
    if (opt === 'post-order') fn(this.value);
  }
  breadthFirstForEach(fn){
    let queue = [this];
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
