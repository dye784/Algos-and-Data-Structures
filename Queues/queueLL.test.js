const expect = require('chai').expect;
const QueueLL = require('./queueLL').QueueLL;
const Node = require('./queueLL').Node;

describe('QueueLL Algorithm', () => {
  describe('Node class', () => {
    describe('Constructor', () => {
      let node = new Node('42')

      it('should have a str property', () => {
        expect(node).to.have.ownProperty('str')
      })

      it('should set str property to input', () => {
        expect(node.str).to.equal('42')
      })

      it('should have a next property', () => {
        expect(node).to.have.ownProperty('next')
      })

      it('should have the next property have default value of null', () => {
        expect(node.next).to.be.null
      })
    })
  })

  describe('QueueLL', () => {
    let queue;
    let node;
    beforeEach(function() {
      queue = new QueueLL()
      node = new Node('HELLO EVERYBODY')
    })

    describe('Constructor', () => {
      it('should have a head and tail property with default values of null', () => {
        expect(queue).to.have.ownProperty('head')
        expect(queue).to.have.ownProperty('tail')
        expect(queue.head).to.be.null
        expect(queue.tail).to.be.null
      })
    })

    describe('isEmpty', () => {
      it('should be a property on the class', () => {
        expect(queue).to.have.property('isEmpty')
      })

      it('should be a function', () => {
        expect(queue.isEmpty).to.be.a('function')
      })

      it('should be able to check if the queue is empty', () => {
        expect(queue.isEmpty()).to.be.true

        queue.head = { str: '42', next: null }

        expect(queue.isEmpty()).to.be.false
      })
    })

    describe('enqueue', () => {
      it('should be a property on the class', () => {
        expect(queue).to.have.property('enqueue')
      })

      it('should be a function', () => {
        expect(queue.enqueue).to.be.a('function')
      })

      it('should be able to add one item to the queue', () => {
        queue.enqueue('peanut butter')
        let whatItShouldLookLike = {str: 'peanut butter', next: null}
        expect(queue.head).to.deep.equal(whatItShouldLookLike)
      })

      it('should be able to add MANY items to the queue', () => {
        queue.enqueue('0')
        queue.enqueue('1')
        queue.enqueue('2')
        queue.enqueue('3')
        expect(queue.head.str).to.equal('0')
        expect(queue.head.next.str).to.equal('1')
        expect(queue.head.next.next.str).to.equal('2')
        expect(queue.head.next.next.next.str).to.equal('3')
      })
    })

    describe('dequeue', () => {
      it('should be a property on the class', () => {
        expect(queue).to.have.property('dequeue')
      })

      it('should be a function', () => {
        expect(queue.dequeue).to.be.a('function')
      })

      it('should be able to remove one item from the queue', () => {
        queue.enqueue('0')
        queue.enqueue('1')
        queue.enqueue('2')
        expect(queue.dequeue()).to.equal('0')
        expect(queue.head.str).to.equal('1')
        expect(queue.head.next.str).to.equal('2')
        expect(queue.tail.str).to.equal('2')
      })

      it('should be able handle special cases', () => {
        queue.enqueue('0')
        queue.enqueue('1')
        expect(queue.dequeue()).to.equal('0')
        expect(queue.head.str).to.equal(queue.tail.str)
      })

      it('should be able to remove MANY items from the queue', () => {
        queue.enqueue('0')
        queue.enqueue('1')
        queue.enqueue('2')
        queue.enqueue('3')
        expect(queue.dequeue()).to.equal('0')
        expect(queue.head.next.next.next).to.be.null
        expect(queue.dequeue()).to.equal('1')
        expect(queue.head.next.next).to.be.null
        expect(queue.dequeue()).to.equal('2')
        expect(queue.head.next).to.be.null
        expect(queue.dequeue()).to.equal('3')
        expect(queue.head).to.be.null
        expect(queue.tail).to.be.null
      })

    })
  })
})
