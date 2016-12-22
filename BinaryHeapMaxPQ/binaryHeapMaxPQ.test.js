const expect = require('chai').expect
const BinaryHeapMaxPQ = require('./binaryHeapMaxPQStart')

xdescribe('Unordered Max Priority Queue', () => {
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

    it('should receive two indicies and check the array to see if first < second', () => {
      expect(BHMPQ.isLess(1, 2)).to.be.false
      expect(BHMPQ.isLess(7, 8)).to.be.true
      expect(BHMPQ.isLess(10, 3)).to.be.true
      expect(BHMPQ.isLess(4, 9)).to.be.false
    })
  })

  describe('exchange', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('exchange')
    })

    it('should receive two indicies and swap those elements in the array', () => {
      BHMPQ.exchange(1,2)
      expect(BHMPQ.array).to.deep.equal([null, 'P', 'T', 'R', 'N', 'H', 'O', 'A', 'E', 'I', 'G'])
      BHMPQ.exchange(2,4)
      expect(BHMPQ.array).to.deep.equal([null, 'P', 'N', 'R', 'T', 'H', 'O', 'A', 'E', 'I', 'G'])
      BHMPQ.exchange(3,5)
      expect(BHMPQ.array).to.deep.equal([null, 'P', 'N', 'H', 'T', 'R', 'O', 'A', 'E', 'I', 'G'])
      BHMPQ.exchange(10,7)
      expect(BHMPQ.array).to.deep.equal([null, 'P', 'N', 'H', 'T', 'R', 'O', 'G', 'E', 'I', 'A'])
    })
  })

  describe('insert', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('insert')
    })

    it('should receive an element and add it to the queue in the property place(call swim)', () => {
      BHMPQ.insert('S')
      expect(BHMPQ.array).to.deep.equal([null, 'T', 'S', 'R', 'N', 'P', 'O', 'A', 'E', 'I', 'G', 'H'])
    })
  })

  describe('delMax', () => {
    it('should be a property on the class', () => {
      expect(BHMPQ).to.have.property('delMax')
    })

    it('should swap the max element to end of array and set last element to null', () => {
      BHMPQ.insert('S')
      BHMPQ.delMax()
      expect(BHMPQ.array).to.deep.equal([null, 'S', 'P', 'R', 'N', 'H', 'O', 'A', 'E', 'I', 'G', null])
    })

    // After decrementing the size of the array we are saying the last element doesn't exist anymore
    it('should decrement the size', () => {
      const sizeBefore = BHMPQ.size
      const correctSizeAfter = BHMPQ.size - 1
      BHMPQ.delMax()
      expect(BHMPQ.size).to.be.equal(correctSizeAfter)
    })
  })

})
