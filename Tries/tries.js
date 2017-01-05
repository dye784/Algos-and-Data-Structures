class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = {};
    this.prefixes = 0;
  }
}

class TrieST {
  constructor() {
    this.root = null
  }

  put(node, key, val, int) {
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
    return
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
      node.next[char] = delete(node.next[char], key, int + 1)
    }

    if (node.val !== null) return node;
    // for (let letter in node.next) {
    //   if ()
    // }
  }
}
