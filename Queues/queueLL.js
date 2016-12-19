class QueueLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // check if stack has anything
  isEmpty() {
    return this.head === null;
  }

  // add to tail
  enqueue(str) {
    const newNode = new Node(str);
    const oldTail = this.tail;
    this.tail = newNode

    if(this.isEmpty()) this.head = newNode;
    else oldTail.next = this.tail
  }

  // remove from head
  dequeue() {
    const str = this.head.str
    this.head = this.head.next

    if(this.isEmpty()) this.tail = null;

    return str;
  }
}

class Node {
  constructor(str) {
    this.str = str;
    this.next = null;
  }
}

module.exports = {
  QueueLL,
  Node
}
