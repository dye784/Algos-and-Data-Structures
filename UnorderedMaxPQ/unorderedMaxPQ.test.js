const expect = require('chai').expect
const UnorderedMaxPQ = require('./unorderedMaxPQStart')

xdescribe('Unordered Max Priority Queue', () => {
  let UMPQ;

  beforeEach(() => {
    UMPQ = new UnorderedMaxPQ([3,2,5,1,4])
  })

  describe('Constructor', () => {
    it('should have array on its property and is equal to input array', () => {
      expect(UMPQ).to.have.ownProperty('array')
      expect(UMPQ.array).to.deep.equal([3,2,5,1,4])
    })

    it('should have size on its property and its equal to length of input array', () => {
      expect(UMPQ).to.have.ownProperty('size')
      expect(UMPQ.size).to.equal(5)
    })
  })

  describe('isEmpty', () => {
    it('should be a property on the class', () => {
      expect(UMPQ).to.have.property('isEmpty')
    })

    it('should check if array is empty', () => {
      expect(UMPQ.isEmpty()).to.be.false

      UMPQ.array = [];
      UMPQ.size = 0;

      expect(UMPQ.isEmpty()).to.be.true
    })
  })

  describe('isLess', () => {
    it('should be a property on the class', () => {
      expect(UMPQ).to.have.property('isLess')
    })

    it('should receive two indicies and check the array to see if first < second', () => {
      expect(UMPQ.isLess(0, 1)).to.be.false
      expect(UMPQ.isLess(1, 0)).to.be.true
      expect(UMPQ.isLess(2, 5)).to.be.false
      expect(UMPQ.isLess(3, 1)).to.be.true
    })
  })

  describe('exchange', () => {
    it('should be a property on the class', () => {
      expect(UMPQ).to.have.property('exchange')
    })

    it('should receive two indicies and swap those elements in the array', () => {
      UMPQ.exchange(0,1)
      expect(UMPQ.array).to.deep.equal([2,3,5,1,4])
      UMPQ.exchange(2,4)
      expect(UMPQ.array).to.deep.equal([2,3,4,1,5])
      UMPQ.exchange(3,0)
      expect(UMPQ.array).to.deep.equal([1,3,4,2,5])
      UMPQ.exchange(2,1)
      expect(UMPQ.array).to.deep.equal([1,4,3,2,5])
    })
  })

  describe('insert', () => {
    it('should be a property on the class', () => {
      expect(UMPQ).to.have.property('insert')
    })

    it('should receive an element and add it to the queue', () => {
      UMPQ.insert(6)
      expect(UMPQ.array).to.deep.equal([3,2,5,1,4,6])
      UMPQ.insert(7)
      expect(UMPQ.array).to.deep.equal([3,2,5,1,4,6,7])
      UMPQ.insert(8)
      expect(UMPQ.array).to.deep.equal([3,2,5,1,4,6,7,8])
    })
  })

  describe('delMax', () => {
    it('should be a property on the class', () => {
      expect(UMPQ).to.have.property('delMax')
    })

    it('should swap the max element to end of array', () => {
      UMPQ.delMax()
      const last = UMPQ.array[UMPQ.array.length - 1]
      const maxInArray = Math.max.apply(null, UMPQ.array)
      expect(last).to.be.equal(maxInArray)
    })

    // After decrementing the size of the array we are saying the last element doesn't exist anymore
    it('should decrement the size', () => {
      const sizeBefore = UMPQ.size
      const correctSizeAfter = UMPQ.size - 1
      UMPQ.delMax()
      expect(UMPQ.size).to.be.equal(correctSizeAfter)
    })

    it('should replace the "last element"(the element that was deleted already) on insert', () => {
      const last = UMPQ.array[UMPQ.size - 1]
      expect(last).to.be.equal(4)
      UMPQ.delMax()
      UMPQ.insert(6)
      expect(UMPQ.array).to.deep.equal([3,2,4,1,6])
    })
  })

})
