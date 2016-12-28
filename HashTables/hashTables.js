
class HashNode {
  constructor(key, val, next = null) {
    this.value = val;
    this.key = key;
    this.next = next;
  }
}

class HashTable {
  constructor() {
    this.numBuckets = 35;
    this.buckets = new Array(35);
  }

  set(key, val) {
    let hash = this.hash(key);
    if (!this.buckets[hash]) this.buckets[hash] = new HashNode(key, val);
    else this.buckets[hash] = new HashNode(key, val, this.buckets[hash])
  }

  get(key) {
    let hash = this.hash(key);
    let bucket = this.buckets[hash];

    while (bucket !== null) {
      if (key === bucket.key) return bucket.value
      bucket = bucket.next
    }

    return null;
  }

  hash(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i)
    }
    return sum % this.numBuckets;
  }
}


module.exports = { HashTable, HashNode }
