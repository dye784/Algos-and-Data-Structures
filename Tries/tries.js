class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = {};
    this.prefixes = 0;
  }
}

class TrieST {
  constructor() {
    this.root = null
  }

  put(node, key, val) {
    if (!val) this.delete(key);
    else this.root = this._put(this.root, key, val, 0)
  }

  _put(node, key, val, int) {
    if (!node) node = new Node();
    if (int === key.length) {
      if (!node.val) this.prefixes++;
      node.val = val;
      return node;
    }

    const char = key.chatAt(int);
    node.next[char] = this._put(node.next[char], key, val, int + 1);
    return node;
  }

  get(key) {
    let node = this._get(this.root, key, 0);
    if (!node) return null;
    return node.val;
  }

  _get(node, key, int) {
    if (!node) return null;
    if (int === key.length) return node;
    const char = key.charAt(int);
    return this._get(node.next[char], key, int + 1);
  }

  delete(key) {
    this.root = this._delete(this.root, key, 0);
  }

  _delete(node, key, int) {
    if (!node) return null;
    if (int === key.length) {
      if (node.val !== null) this.prefixes--;
      node.val = null;
    } else {
      const char = key.chatAt(int);
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

module.exports = { Node, TrieST }
