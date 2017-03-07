const expect = require('chai').expect;
const CircularBuffer = require('./circularBufferStart');

xdescribe('CircularBuffer', () => {
  let newCB;
  beforeEach(() => {
    newCB = new CircularBuffer(8);
  })

  describe('Constructor', () => {
    it('should have a head, tail, size, capacity, and buffer on its class', () => {
      expect(newCB).to.have.ownProperty('head')
      expect(newCB).to.have.ownProperty('tail')
      expect(newCB).to.have.ownProperty('size')
      expect(newCB).to.have.ownProperty('capacity')
      expect(newCB).to.have.ownProperty('buffer')
    })

    it('should have head, tail and size default to zero', () => {
      expect(newCB.head).to.equal(0)
      expect(newCB.size).to.equal(0)
      expect(newCB.tail).to.equal(0)
    })

    it('should have buffer set to be an array of length equal to input', () => {
      expect(newCB.buffer).to.be.instanceof(Array)
      expect(newCB.buffer.length).to.equal(8)
    })

    it('should have the property capacity set to the array length', () => {
      expect(newCB.capacity).to.equal(8)
    })
  })

  describe('enqueue', () => {
    it('should be a function on the class', () => {
      expect(newCB).to.have.property('enqueue')
      expect(newCB.enqueue).to.be.instanceof(Function)
    })

    it('should increment the size when called but not if it is greater than or equal to the capacity', () => {
      newCB.enqueue(1)
      expect(newCB.size).to.deep.equal(1)

      newCB.size = 8;
      newCB.enqueue(2)
      expect(newCB.size).to.deep.equal(8)
    })

    it('should increment the head when called', () => {
      newCB.enqueue(1)
      expect(newCB.head).to.deep.equal(1)
    })

    it('should insert one item into the buffer at the next index', () => {
      newCB.enqueue(1)
      let solution = Array(8)
      solution[0] = 1;
      expect(newCB.buffer).to.deep.equal(solution)
    })

    it('should be able to circle around and add to the front of the array', () => {
      let arrBefore = [0,1,2,3,4,5,6,7];
      newCB.buffer = arrBefore;
      newCB.head = 0;
      newCB.enqueue(8);
      let solution = [8,1,2,3,4,5,6,7]
      expect(newCB.buffer).to.deep.equal(solution);
    })

    it('should replace items from the array when it circles around', () => {
      let arrBefore = [8,1,2,3,4,5,6,7];
      newCB.buffer = arrBefore;
      newCB.head = 1;
      newCB.enqueue(9);
      let solution = [8,9,2,3,4,5,6,7]
      expect(newCB.buffer).to.deep.equal(solution);
    })

    it('should work with MANY enqueuees', () => {
      for(let i = 0; i < 42; i++) {
        newCB.enqueue(i);
      }
      let solution = [40,41,34,35,36,37,38,39]
      expect(newCB.buffer).to.deep.equal(solution);
    })

    it('should work with MANY enqueuees', () => {
      for(let i = 0; i < 20; i++) {
        newCB.enqueue(i);
      }
      const solution = [16,17,18,19,12,13,14,15]
      expect(newCB.buffer).to.deep.equal(solution);
    })
  })

  describe('dequeue', () => {
    it('should be a function on the class', () => {
      expect(newCB).to.have.property('dequeue')
      expect(newCB.dequeue).to.be.instanceof(Function)
    })

    it('should return undefined when trying to dequeue with a size of 0', () => {
      expect(newCB.dequeue()).to.be.undefined;
    })

    it('should decrement the size', () => {
      newCB.size = 1;
      newCB.buffer = [1]
      newCB.dequeue()
      expect(newCB.size).to.equal(0);
    })

    it('should return the first item added that was not replaced and set the element to null', () => {
      newCB.buffer = [0,1,2,3,4,5,6,7]
      newCB.tail = 0;
      newCB.size = 8;
      expect(newCB.dequeue()).to.equal(0);
      expect(newCB.dequeue()).to.equal(1);
      expect(newCB.dequeue()).to.equal(2);
      expect(newCB.dequeue()).to.equal(3);
      expect(newCB.dequeue()).to.equal(4);
      expect(newCB.dequeue()).to.equal(5);
      expect(newCB.dequeue()).to.equal(6);
      expect(newCB.dequeue()).to.equal(7);
      expect(newCB.buffer).to.deep.equal([null,null,null,null,null,null,null,null])
    })

    it('should return the first item added that was not replaced and circle around the array', () => {
      newCB.buffer = [8,9,2,3,4,5,6,7]
      newCB.tail = 2;
      newCB.size = 8;
      expect(newCB.dequeue()).to.equal(2);
      expect(newCB.dequeue()).to.equal(3);
      expect(newCB.dequeue()).to.equal(4);
      expect(newCB.dequeue()).to.equal(5);
      expect(newCB.dequeue()).to.equal(6);
      expect(newCB.dequeue()).to.equal(7);
      expect(newCB.dequeue()).to.equal(8);
      expect(newCB.dequeue()).to.equal(9);
      expect(newCB.buffer).to.deep.equal([null,null,null,null,null,null,null,null])
    })
  })
})
