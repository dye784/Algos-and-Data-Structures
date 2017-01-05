class Node {
  constructor(val) {
    this.val = val;
    this.next = {};
  }
}

class TrieST {
  constructor() {
    this.root = null;
    this.numKeys = 0;
  }

  put(key, val) {
    if (val === undefined) this.delete(key);
    else this.root = this._put(this.root, key, val, 0)
  }

  _put(node, key, val, int) {
    if (node === null) node = new Node();
    if (int === key.length) {
      if (node.val !== null) this.numKeys++;
      node.val = val;
      return node;
    }

    const char = key.charAt(int);
    node.next[char] = this._put(node.next[char], key, val, int + 1);
    return node;
  }

  get(key) {
    let node = this._get(this.root, key, 0);
    if (node === null) return null;
    return node.val;
  }

  _get(node, key, int) {
    if (node === null) return null;
    if (int === key.length) return node;
    const char = key.charAt(int);
    return this._get(node.next[char], key, int + 1);
  }

  delete(key) {
    this.root = this._delete(this.root, key, 0);
  }

  _delete(node, key, int) {
    if (node === null) return null;
    if (int === key.length) {
      if (node.val !== null) this.numKeys--;
      node.val = null;
    } else {
      const char = key.charAt(int);
      node.next[char] = this._delete(node.next[char], key, int + 1)
    }

    // removes subtrie if it is completely empty
    if (node.val !== null) return node;
    for (let letter in node.next) {
      if (node.next[letter]) return node;
    }

    return null
  }
}

// module.exports = { Node, TrieST }

let TST = new TrieST()
TST.put('a', 1)
TST.put('ab', 2)
console.log(TST.root)
TST.delete('a')
console.log(TST.root)
