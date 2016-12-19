const expect = require('chai').expect;
const StackLL = require('./stackLL').StackLL;
const Node = require('./stackLL').Node;

describe('StackLL Algorithm', () => {
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

  describe('StackLL', () => {
    let stack;
    let node;
    beforeEach(function() {
      stack = new StackLL()
      node = new Node('What do you get when you multiply six by nine?')
    })

    describe('Constructor', () => {
      it('should have a head property with default value of null', () => {
        expect(stack).to.have.ownProperty('head')
        expect(stack.head).to.be.null
      })
    })

    describe('isEmpty', () => {
      it('should be a property on the class', () => {
        expect(stack).to.have.property('isEmpty')
      })

      it('should be a function', () => {
        expect(stack.isEmpty).to.be.a('function')
      })

      it('should be able to check if the stack is empty', () => {
        expect(stack.isEmpty()).to.be.true

        stack.head = { str: '42', next: null }

        expect(stack.isEmpty()).to.be.false
      })
    })

    describe('push', () => {
      it('should be a property on the class', () => {
        expect(stack).to.have.property('push')
      })

      it('should be a function', () => {
        expect(stack.push).to.be.a('function')
      })

      it('should be able to add one item to the stack', () => {
        stack.push('peanut butter')
        let whatItShouldLookLike = {str: 'peanut butter', next: null}
        expect(stack.head).to.deep.equal(whatItShouldLookLike)
      })

      it('should be able to add MANY items to the stack', () => {
        stack.push('0')
        stack.push('1')
        stack.push('2')
        stack.push('3')
        expect(stack.head.str).to.equal('3')
        expect(stack.head.next.str).to.equal('2')
        expect(stack.head.next.next.str).to.equal('1')
        expect(stack.head.next.next.next.str).to.equal('0')
      })
    })

    describe('pop', () => {
      it('should be a property on the class', () => {
        expect(stack).to.have.property('pop')
      })

      it('should be a function', () => {
        expect(stack.pop).to.be.a('function')
      })

      it('should be able to remove one item from the stack', () => {
        stack.push('0')
        stack.push('1')
        expect(stack.pop()).to.equal('1')
        expect(stack.head.next).to.be.null
      })

      it('should be able to remove MANY items from the stack', () => {
        stack.push('0')
        stack.push('1')
        stack.push('2')
        stack.push('3')
        expect(stack.pop()).to.equal('3')
        expect(stack.head.next.next.next).to.be.null
        expect(stack.pop()).to.equal('2')
        expect(stack.head.next.next).to.be.null
        expect(stack.pop()).to.equal('1')
        expect(stack.head.next).to.be.null
        expect(stack.pop()).to.equal('0')
        expect(stack.head).to.be.null
      })
    })
  })
})
