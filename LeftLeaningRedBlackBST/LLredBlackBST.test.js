const expect = require('chai').expect;
const exportedModules = require('./LLredBlackBST');
const LLredBlackBST = exportedModules.LLredBlackBST;
const Node = exportedModules.Node;
const RED = exportedModules.RED;
const BLACK = exportedModules.BLACK;
const isRed = exportedModules.isRed;

describe('RED and BLACK', () => {
  it('should just be equal to the strings RED and BLACK for easier debugging', () => {
    expect(RED).to.equal('RED');
    expect(BLACK).to.equal('BLACK');
  })
})

describe('isRed', () => {
  it('should check if a node is red', () => {

  })
})

describe('Node', () => {

  let node;
  beforeEach(() => {
    node = new Node(4, 5)
  })

  describe('Constuctor', () => {

    it('should have a property key, value, left, right, and color on the class', () => {
      expect(node).to.have.ownProperty('key')
      expect(node).to.have.ownProperty('value')
      expect(node).to.have.ownProperty('left')
      expect(node).to.have.ownProperty('right')
      expect(node).to.have.ownProperty('color')
    })

    it('should have left and right default to null', () => {
      expect(node.left).to.be.null
      expect(node.right).to.be.null
    })

    it('should have color default to black', () => {
      expect(node.color).to.equal(BLACK)
    })
  })
})

describe('Left Leaning Red Black Binary Search Tree', () => {

  let LLRBBST;
  beforeEach(() => {
    LLRBBST = new LLredBlackBST()
  })

  describe('Constuctor', () => {

  })

  describe.only('Search', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('search')
    })

    it('should return null if the key is not found', () => {
      expect(LLRBBST.search('GIBBERISH')).to.be.null;
    })

  })

  describe('rotateLeft', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('rotateLeft')
    })

    it('should reorient node to lean left if it is leaning right', () => {

    })

  })

  describe('', () => {

  })
})


