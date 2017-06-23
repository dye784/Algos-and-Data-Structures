class Node {
  constructor(v) {
    this.value = v;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(v) {
    const newNode = new Node(v);
    const formerHead = this.head;
    this.head = newNode;

    if (formerHead) {
      formerHead.previous = newNode;
      newNode.next = formerHead;
    }

    if (!this.tail) this.tail = newNode;
  }

  addToTail(v) {
    const newNode = new Node(v);
    const formerTail = this.tail;
    this.tail = newNode;

    if (formerTail) {
      formerTail.next = newNode;
      newNode.previous = formerTail;
    }

    if (!this.head) this.head = this.tail;
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) return;

    if (removedHead.next) {
      this.head = removedHead.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removedHead.value;
  }

  removeTail() {
    const removedTail = this.tail;

    if (!removedTail) return;

    if (removedTail.previous) {
      this.tail = removedTail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removedTail.value;
  }

  search(comparator) {
    let currentNode = this.head;

    if (typeof comparator === 'string') {
      const comparatorString = comparator;
      comparator = function (elementValue) {
        return comparatorString == elementValue;
      }
    }

    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }

    return null;

  }

  size() {
    let i = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      i++;
      currentNode = currentNode.next;
    }

    return i;
  }

}

module.exports = { Node, LinkedList }
