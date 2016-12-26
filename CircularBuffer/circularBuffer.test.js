const expect = require('chai').expect;
const CircularBuffer = require('./circularBuffer');

describe.only('CircularBuffer', () => {
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

  describe('push', () => {

    it('should increment the size when called but not if it is greater than or equal to the capacity', () => {
      newCB.push(1)
      expect(newCB.size).to.deep.equal(1)

      newCB.size = 8;
      newCB.push(2)
      expect(newCB.size).to.deep.equal(8)
    })

    it('should increment the head when called', () => {
      newCB.push(1)
      expect(newCB.head).to.deep.equal(1)
    })

    it('should insert one item into the buffer at the next index', () => {
      newCB.push(1)
      let solution = Array(8)
      solution[1] = 1;
      expect(newCB.buffer).to.deep.equal(solution)
    })

    it('should be able to circle around and add to the front of the array', () => {
      let arrBefore = [undefined,1,2,3,4,5,6,7];
      newCB.buffer = arrBefore;
      newCB.head = 8;
      newCB.push(8);
      let solution = [8,1,2,3,4,5,6,7]
      expect(newCB.buffer).to.deep.equal(solution);
    })

    it('should replace items from the array when it circles around', () => {
      let arrBefore = [8,1,2,3,4,5,6,7];
      newCB.buffer = arrBefore;
      newCB.head = 0;
      newCB.push(9);
      let solution = [8,9,2,3,4,5,6,7]
      expect(newCB.buffer).to.deep.equal(solution);
    })

    it('should work with MANY pushes', () => {
      for(let i = 1; i < 20; i++) {
        newCB.push(i);
      }
      let solution = [18,19,11,12,13,14,15,16,17]
      expect(newCB.buffer).to.deep.equal(solution);
    })
  })

  describe('pop', () => {
    it('should remove items from the array in the correct sequence', () => {})
    it('should', () => {})
  })

  describe('get', () => {

  })

  // describe('unshift', () => {

  // })
})
