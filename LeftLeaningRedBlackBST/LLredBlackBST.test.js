const expect = require('chai').expect;
const exportedModules = require('./LLredBlackBST');
const LLredBlackBST = exportedModules.LLredBlackBST;
const Node = exportedModules.Node;
const RED = exportedModules.RED;
const BLACK = exportedModules.BLACK;
const sinon = require('sinon');
require('chai').use(require('sinon-chai'))

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

    it('should reorient node to lean left if it is leaning right with correct color category', () => {
      let aNode = new Node('A')
      let leftChild = new Node('R')
      let rightChild = new Node('T')
      let sNode = new Node('S', null, RED, leftChild, rightChild)
      let mid = new Node('E', null, null, aNode, sNode)
      let newNode = LLRBBST.rotateLeft(mid)

      expect(newNode.key).to.equal('S')
      expect(newNode.left.key).to.equal('E')
      expect(newNode.left.color).to.equal(RED)  // the left node is red
      expect(newNode.left.left.key).to.equal('A')
      expect(newNode.left.left.color).to.equal(BLACK)
      expect(newNode.left.right.key).to.equal('R')
      expect(newNode.left.right.color).to.equal(BLACK)
      expect(newNode.right.key).to.equal('T')
      expect(newNode.right.color).to.equal(BLACK)
    })

  })

  describe('rotateRight', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('rotateLeft')
    })

    it('should reorient node to lean right if it is leaning left with correct color category', () => {
      let tNode = new Node('T')
      let leftChild = new Node('A')
      let rightChild = new Node('R')
      let eNode = new Node('E', null, RED, leftChild, rightChild)
      let mid = new Node('S', null, null, eNode, tNode)

      let newNode = LLRBBST.rotateRight(mid)
      expect(newNode.key).to.equal('E')
      expect(newNode.left.key).to.equal('A')
      expect(newNode.left.color).to.equal(BLACK)
      expect(newNode.right.key).to.equal('S')
      expect(newNode.right.color).to.equal(RED) // the right node is red
      expect(newNode.right.left.key).to.equal('R')
      expect(newNode.right.left.color).to.equal(BLACK)
      expect(newNode.right.right.key).to.equal('T')
      expect(newNode.right.right.color).to.equal(BLACK)
    })
  })

  describe('flipColor', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('flipColor')
    })

    it('should set a nodes color to red and its children to black', () => {
      let leftNode = new Node('LEFT', null, RED)
      let rightNode = new Node('RIGHT', null, RED)
      let node = new Node('KEY', null, BLACK, leftNode, rightNode)
      LLRBBST.flipColor(node);
      expect(node.color).to.equal(RED)
      expect(node.left.color).to.equal(BLACK)
      expect(node.right.color).to.equal(BLACK)
    })

  })

  describe('insert', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('insert')
    })

    it('should take two parameters and call the _insert function with the root and those two parameters', () => {
      // let _insertSpy = sinon.spy(LLRBBST.insert, 'this._insert')
      // LLRBBST.insert()
      // expect(_insertSpy).to.have.been.called
    })

    it('should set the root color to black after the _insert function is called', () => {
      expect(LLRBBST.root).to.be.null
      LLRBBST.insert('S')
      expect(LLRBBST.root.color).to.equal(BLACK)
    })
  })

  describe('_insert', () => {
    it('should be a property on the class', () => {
      expect(LLRBBST).to.have.property('_insert')
    })

    it('should be able to add one new node to the tree', () => {
      LLRBBST.insert('S', 1)
      expect(LLRBBST.root.key).to.equal('S')
      expect(LLRBBST.root.value).to.equal(1)
    })

    it('should be able to add two nodes to the tree into the proper place with their proper colors', () => {
      LLRBBST.insert('S', 1)
      LLRBBST.insert('E', 2)
      expect(LLRBBST.root.left.key).to.equal('E')
      expect(LLRBBST.root.left.value).to.equal(2)
    })

    // This test spec will require you to call rotateRight and flipColors
    it('should be able to more than two nodes to the tree into the proper place with their proper colors', () => {
      // expect(1).to.equal(2)
      LLRBBST.insert('S', 1)
      LLRBBST.insert('E', 2)
      LLRBBST.insert('A', 3)
      expect(LLRBBST.root.key).to.equal('E')
      expect(LLRBBST.root.value).to.equal(2)
      expect(LLRBBST.root.color).to.equal(BLACK)
      expect(LLRBBST.root.left.key).to.equal('A')
      expect(LLRBBST.root.left.value).to.equal(3)
      expect(LLRBBST.root.left.color).to.equal(BLACK)
      expect(LLRBBST.root.right.key).to.equal('S')
      expect(LLRBBST.root.right.value).to.equal(1)
      expect(LLRBBST.root.right.color).to.equal(BLACK)
    })

    // This test spec will require you to call rotateLeft, rotateRight, and flipColors
    it('should be able to add MANY NODES to the tree into their proper place, with the proper colors', () => {
      let SEARCH = {
        S: 1,
        E: 2,
        A: 3,
        R: 4,
        C: 5,
        H: 6,
      }

      LLRBBST.insert('S', 1)
      LLRBBST.insert('E', 2)
      LLRBBST.insert('A', 3)
      LLRBBST.insert('R', 4)
      LLRBBST.insert('C', 5)
      LLRBBST.insert('H', 6)

      // ROOT

      expect(LLRBBST.root.key).to.equal('R')
      expect(LLRBBST.root.value).to.equal(SEARCH.R)
      expect(LLRBBST.root.color).to.equal(BLACK)

      // LEFT OF R COMPLETE LEFT SIDE OF ROOT ================

      expect(LLRBBST.root.left.key).to.equal('E')
      expect(LLRBBST.root.left.value).to.equal(SEARCH.E)
      expect(LLRBBST.root.left.color).to.equal(RED)

      // LEFT OF E

      expect(LLRBBST.root.left.left.key).to.equal('C')
      expect(LLRBBST.root.left.left.value).to.equal(SEARCH.C)
      expect(LLRBBST.root.left.left.color).to.equal(BLACK)

      // LEFT OF C

      expect(LLRBBST.root.left.left.left.key).to.equal('A')
      expect(LLRBBST.root.left.left.left.value).to.equal(SEARCH.A)
      expect(LLRBBST.root.left.left.left.color).to.equal(RED)

      // RIGHT OF R COMPLETE RIGHT SIDE OF ROOT ================

      expect(LLRBBST.root.right.key).to.equal('S')
      expect(LLRBBST.root.right.value).to.equal(SEARCH.S)
      expect(LLRBBST.root.right.color).to.equal(BLACK)
    })

    // this test spec requires MANY rotations and restructures the entire tree
    it('should be able to restructure with many inserts', () => {
      let SEARCHEXAMPLE = {
        S: 1,
        E: 2,
        A: 3,
        R: 4,
        C: 5,
        H: 6,
        X: 7,
        M: 8,
        P: 9,
        L: 10
      }

      LLRBBST.insert('S', 1)
      LLRBBST.insert('E', 2)
      LLRBBST.insert('A', 3)
      LLRBBST.insert('R', 4)
      LLRBBST.insert('C', 5)
      LLRBBST.insert('H', 6)
      LLRBBST.insert('X', 7)
      LLRBBST.insert('M', 8)
      LLRBBST.insert('P', 9)
      LLRBBST.insert('L', 10)

      // ROOT

      expect(LLRBBST.root.key).to.equal('M')
      expect(LLRBBST.root.value).to.equal(SEARCHEXAMPLE.M)
      expect(LLRBBST.root.color).to.equal(BLACK)

      // LEFT OF M COMPLETE LEFT SIDE OF ROOT ===========================

      expect(LLRBBST.root.left.key).to.equal('E')
      expect(LLRBBST.root.left.value).to.equal(SEARCHEXAMPLE.E)
      expect(LLRBBST.root.left.color).to.equal(BLACK)

      // LEFT OF E

      expect(LLRBBST.root.left.left.key).to.equal('C')
      expect(LLRBBST.root.left.left.value).to.equal(SEARCHEXAMPLE.C)
      expect(LLRBBST.root.left.left.color).to.equal(BLACK)

      // LEFT OF C
      expect(LLRBBST.root.left.left.left.key).to.equal('A')
      expect(LLRBBST.root.left.left.left.value).to.equal(SEARCHEXAMPLE.A)
      expect(LLRBBST.root.left.left.left.color).to.equal(RED)

      // RIGHT OF E

      expect(LLRBBST.root.left.right.key).to.equal('L')
      expect(LLRBBST.root.left.right.value).to.equal(SEARCHEXAMPLE.L)
      expect(LLRBBST.root.left.right.color).to.equal(BLACK)

      // LEFT OF L

      expect(LLRBBST.root.left.right.left.key).to.equal('H')
      expect(LLRBBST.root.left.right.left.value).to.equal(SEARCHEXAMPLE.H)
      expect(LLRBBST.root.left.right.left.color).to.equal(RED)

      // RIGHT OF M COMPLETE RIGHT SIDE OF ROOT ===========================

      expect(LLRBBST.root.right.key).to.equal('R')
      expect(LLRBBST.root.right.value).to.equal(SEARCHEXAMPLE.R)
      expect(LLRBBST.root.right.color).to.equal(BLACK)

      // LEFT OF R

      expect(LLRBBST.root.right.left.key).to.equal('P')
      expect(LLRBBST.root.right.left.value).to.equal(SEARCHEXAMPLE.P)
      expect(LLRBBST.root.right.left.color).to.equal(BLACK)

      // RIGHT OF R

      expect(LLRBBST.root.right.right.key).to.equal('X')
      expect(LLRBBST.root.right.right.value).to.equal(SEARCHEXAMPLE.X)
      expect(LLRBBST.root.right.right.color).to.equal(BLACK)

      // LEFT OF X

      expect(LLRBBST.root.right.right.left.key).to.equal('S')
      expect(LLRBBST.root.right.right.left.value).to.equal(SEARCHEXAMPLE.S)
      expect(LLRBBST.root.right.right.left.color).to.equal(RED)
    })

  })

})
