const expect = require('chai').expect;
const exportedModules = require('./LLredBlackBST');
const LLredBlackBST = exportedModules.LLredBlackBST;
const Node = exportedModules.Node;
const RED = exportedModules.RED;
const BLACK = exportedModules.BLACK;
// const isRed = exportedModules.isRed;

describe('RED and BLACK', () => {
  it('should just be equal to the strings RED and BLACK for easier debugging', () => {
    expect(RED).to.equal('RED');
    expect(BLACK).to.equal('BLACK');
  })
})

describe('Node', () => {
  let node;
  beforeEach(() => {
    node = new Node()
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

describe.only('Left Leaning Red Black Binary Search Tree', () => {

  let LLRBBST;
  beforeEach(() => {
    LLRBBST = new LLredBlackBST()
  })

  describe('Constuctor', () => {
    it('should have a property root on the class', () => {
      expect(LLRBBST).to.have.ownProperty('root')
    })

    it('should default to null', () => {
      expect(LLRBBST.root).to.be.null
    })
  })

  describe('isRed', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('isRed')
    })

    it('should return false if the node is null', () => {
      expect(LLRBBST.isRed(null)).to.be.false;
    })

    it('should return the correct boolean if the node is red', () => {
      expect(LLRBBST.isRed({color: RED})).to.be.true;
      expect(LLRBBST.isRed({color: BLACK})).to.be.false;
    })
  })

  describe('Search', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('search')
    })

    it('should return null if the key is not found', () => {
      expect(LLRBBST.search('GIBBERISH')).to.be.null;
    })

    it('should return the value if the search key and the root key are equal', () => {
      expect(1).to.equal(2)
    })
  })

  describe('rotateLeft', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('rotateLeft')
    })

    it('should reorient node to lean left if it is leaning right', () => {
      expect(1).to.equal(2)
    })

  })

  describe('rotateRight', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('rotateLeft')
    })

    it('should reorient node to lean right if it is leaning left', () => {
      expect(1).to.equal(2)
    })

  })

  describe('flipColor', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('flipColor')
    })

    it('should reorient node to lean left if it is leaning right', () => {
      expect(1).to.equal(2)
    })

  })

  describe('insert', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('insert')
    })

    it('should be a property on the class', () => {
      expect(1).to.equal(2)
    })
  })

  describe('_insert', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('_insert')
    })

    it('should be able to add one new node to the tree', () => {
      LLRBBST.insert('E', 1)
      expect(LLRBBST.root.key).to.equal('E')
      expect(LLRBBST.root.value).to.equal(1)
    })

    it('should be able to more than one new node to the tree into the proper place', () => {
      LLRBBST.insert('E', 1)
      LLRBBST.insert('A', 2)
      expect(LLRBBST.root.left.key).to.equal('A')
      expect(LLRBBST.root.left.value).to.equal(2)
    })

    it('should be able to more than one new node to the tree into the proper place', () => {
      expect(1).to.equal(2)
      // LLRBBST.insert('E', 1)
      // LLRBBST.insert('A', 2)
      // console.log(LLRBBST.root)
      // expect(LLRBBST.root.left.key).to.equal('A')
      // expect(LLRBBST.root.left.value).to.equal(2)
    })

  })

})
