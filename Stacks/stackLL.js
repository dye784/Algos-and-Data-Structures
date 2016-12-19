class StackLL {
  constructor() { // set head to empty at beginning
    this.head = null;
  }

  // check if stack has anything
  isEmpty() {
    return this.head === null;
  }

  // add to head
  push(str) {
    const newNode = new Node(str);
    newNode.next = this.head
    this.head = newNode;
  }

  // remove from head
  pop() {
    const str = this.head.str
    this.head = this.head.next
    return str;
  }
}

class Node {
  constructor(str) {
    this.str = str;
    this.next = null;
  }
}

const stack = new StackLL()
stack.push("hello")
stack.push("goodbye")

console.log(stack)

module.exports = StackLL
