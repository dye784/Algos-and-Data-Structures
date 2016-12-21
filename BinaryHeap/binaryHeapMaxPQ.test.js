const expect = require('chai').expect
const BinaryHeapMaxPQ = require('./binaryHeapMaxPQ')

describe.only('Unordered Max Priority Queue', () => {
  let BHMPQ;

  beforeEach(() => {
    BHMPQ = new BinaryHeapMaxPQ(['T', 'P', 'R', 'N', 'H', 'O', 'A', 'E', 'I', 'G'])
  })

  describe('Constructor', () => {
    it('should have array on its property with input array that starts at index 1', () => {
      expect(BHMPQ).to.have.ownProperty('array')
      expect(BHMPQ.array).to.deep.equal([null, 'T', 'P', 'R', 'N', 'H', 'O', 'A', 'E', 'I', 'G'])
    })

    it('should have size on its property and its equal to length of input array excluding index 0', () => {
      expect(BHMPQ).to.have.ownProperty('size')
      expect(BHMPQ.size).to.equal(10)
    })
  })

  describe('isEmpty', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('isEmpty')
    })

    it('should check if array is empty', () => {
      expect(BHMPQ.isEmpty()).to.be.false

      BHMPQ.array = [];
      BHMPQ.size = 0;

      expect(BHMPQ.isEmpty()).to.be.true
    })
  })

  describe('isLess', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('isLess')
    })

    // it('should receive two indicies and check the array to see if first < second', () => {
    //   expect(BHMPQ.isLess(0, 1)).to.be.false
    //   expect(BHMPQ.isLess(1, 0)).to.be.true
    //   expect(BHMPQ.isLess(2, 5)).to.be.false
    //   expect(BHMPQ.isLess(3, 1)).to.be.true
    // })
  })

  describe('exchange', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('exchange')
    })

    // it('should receive two indicies and swap those elements in the array', () => {
    //   BHMPQ.exchange(0,1)
    //   expect(BHMPQ.array).to.deep.equal([2,3,5,1,4])
    //   BHMPQ.exchange(2,4)
    //   expect(BHMPQ.array).to.deep.equal([2,3,4,1,5])
    //   BHMPQ.exchange(3,0)
    //   expect(BHMPQ.array).to.deep.equal([1,3,4,2,5])
    //   BHMPQ.exchange(2,1)
    //   expect(BHMPQ.array).to.deep.equal([1,4,3,2,5])
    // })
  })

  describe('insert', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('insert')
    })

    // it('should receive an element and add it to the queue', () => {
    //   BHMPQ.insert(6)
    //   expect(BHMPQ.array).to.deep.equal([3,2,5,1,4,6])
    //   BHMPQ.insert(7)
    //   expect(BHMPQ.array).to.deep.equal([3,2,5,1,4,6,7])
    //   BHMPQ.insert(8)
    //   expect(BHMPQ.array).to.deep.equal([3,2,5,1,4,6,7,8])
    // })
  })

  describe('delMax', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('delMax')
    })

    // it('should swap the max element to end of array', () => {
    //   BHMPQ.delMax()
    //   const last = BHMPQ.array[BHMPQ.array.length - 1]
    //   const maxInArray = Math.max.apply(null, BHMPQ.array)
    //   expect(last).to.be.equal(maxInArray)
    // })

    // // After decrementing the size of the array we are saying the last element doesn't exist anymore
    // it('should decrement the size', () => {
    //   const sizeBefore = BHMPQ.size
    //   const correctSizeAfter = BHMPQ.size - 1
    //   BHMPQ.delMax()
    //   expect(BHMPQ.size).to.be.equal(correctSizeAfter)
    // })

    // it('should replace the "last element"(the element that was deleted already) on insert', () => {
    //   const last = BHMPQ.array[BHMPQ.size - 1]
    //   expect(last).to.be.equal(4)
    //   BHMPQ.delMax()
    //   BHMPQ.insert(6)
    //   expect(BHMPQ.array).to.deep.equal([3,2,4,1,6])
    // })
  })

})
