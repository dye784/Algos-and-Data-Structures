const expect = require('chai').expect;
const QuickUnion = require('./quick-unionStart');

xdescribe('Quick Union Algorithm', () => {
  describe('QuickUnion', () => {

    let newQU;
    beforeEach(function() {
      newQU = new QuickUnion(10)
    })

    describe('Constructor', () => {

      it('should have a property of arrayOfIds', () => {
        expect(newQU).to.have.ownProperty('arrayOfIds')
      })

      it('arrayOfIds has a length equal to input', () => {
        expect(newQU.arrayOfIds.length).to.be.equal(10)
      })

      it('arrayOfIds should be an array where the element is equal to its index', () => {
        expect(newQU.arrayOfIds).to.deep.equal([0,1,2,3,4,5,6,7,8,9])
      })
    })

    describe('root', () => {

      it('should be a property on the class', () => {
        expect(newQU).to.have.property('root')
      })

      it('should be a function', () => {
        expect(newQU.root).to.be.a('function')
      })

      it('should loop through the arrayOfIds and return the root id on a simple tree', () => {
        const arr1 = [0, 1, 2, 3, 3, 5, 6, 7, 8, 9]
        newQU.arrayOfIds = arr1;

        expect(newQU.root(4)).to.equal(3);
      })

      it('should loop through the arrayOfIds and return the root id on a semi-complex tree', () => {
        const arr1 = [1, 1, 1, 8, 3, 0, 5 ,1, 8, 8]
        newQU.arrayOfIds = arr1;

        expect(newQU.root(6)).to.equal(1);
        expect(newQU.root(7)).to.equal(1);
        expect(newQU.root(4)).to.equal(8);
      })

      it('should loop through the arrayOfIds and return the root id on a very complex tree', () => {
        const arr1 = [1, 8, 1, 8, 3, 0, 5 ,1, 8, 8]
        newQU.arrayOfIds = arr1;

        expect(newQU.root(1)).to.equal(8);
        expect(newQU.root(4)).to.equal(8);
        expect(newQU.root(6)).to.equal(8);
      })
    })

    describe('areTheyConnected', () => {

      it('should be a property on the class', () => {
        expect(newQU).to.have.property('areTheyConnected')
      })

      it('should be a function', () => {
        expect(newQU.areTheyConnected).to.be.a('function')
      })

      it('should tell if two elements have the same id', () => {
        const arr1 = [0,1,2,3,3,5,6,7,8,9]
        newQU.arrayOfIds = arr1;

        expect(newQU.areTheyConnected(0,1)).to.be.false;
        expect(newQU.areTheyConnected(3, 4)).to.be.true;
        expect(newQU.areTheyConnected(4, 8)).to.be.false;
      })
    })

    describe('connect', () => {
      it('should be a property on the class', () => {
        expect(newQU).to.have.property('connect')
      })

      it('should be a function', () => {
        expect(newQU.connect).to.be.a('function')
      })

      it('should change the ids for a single connect', () => {
        newQU.connect(4,5)
        expect(newQU.arrayOfIds).to.deep.equal([0,1,2,3,5,5,6,7,8,9])
      })

      it('the elements should be connected by the second parameters id(parameter)', () => {
        newQU.connect(8,3)
        expect(newQU.arrayOfIds).to.deep.equal([0,1,2,3,4,5,6,7,3,9])
      })

      it('should change the ids for a two connections', () => {
        newQU.connect(4,5)
        newQU.connect(4,6)
        expect(newQU.arrayOfIds).to.deep.equal([0,1,2,3,5,6,6,7,8,9])
      })

      it('should change the ids for a MANY connections', () => {
        newQU.connect(4,5)
        newQU.connect(6,0)
        newQU.connect(3,1)
        newQU.connect(8,2)
        newQU.connect(7,9)
        expect(newQU.arrayOfIds).to.deep.equal([0,1,2,1,5,5,0,9,2,9])
      })

      it('should change the ids for a MANY MANY connections', () => {
        newQU.connect(4, 3)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 2, 3, 3, 5, 6, 7, 8, 9])
        newQU.connect(3, 8)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 2, 8, 3, 5, 6, 7, 8, 9])
        newQU.connect(6, 5)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 2, 8, 3, 5, 5, 7, 8, 9])
        newQU.connect(9, 4)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 2, 8, 3, 5, 5, 7, 8, 8])
        newQU.connect(2, 1)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 1, 8, 3, 5, 5, 7, 8, 8])
      })

      it('should change the ids for a MANY MANY MANY connections. With this, everything is connected to one root node', () => {
        newQU.connect(4, 3)
        newQU.connect(3, 8)
        newQU.connect(6, 5)
        newQU.connect(9, 4)
        newQU.connect(2, 1)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 1, 8, 3, 5, 5, 7, 8, 8])
        newQU.connect(5, 0)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 1, 8, 3, 0, 5, 7, 8, 8])
        newQU.connect(7, 2)
        expect(newQU.arrayOfIds).to.deep.equal([0, 1, 1, 8, 3, 0, 5, 1, 8, 8])
        newQU.connect(6, 1)
        expect(newQU.arrayOfIds).to.deep.equal([1, 1, 1, 8, 3, 0, 5, 1, 8, 8])
        newQU.connect(7, 3)
        expect(newQU.arrayOfIds).to.deep.equal([1, 8, 1, 8, 3, 0, 5, 1, 8, 8])
      })

    })

  })
})
