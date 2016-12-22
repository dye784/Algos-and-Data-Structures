const expect = require('chai').expect;
const QuickFindUF = require('./quick-findStart');

xdescribe('Quick Find Union Find Algorithm', () => {
  describe('QuickFindUF', () => {

    let newQF;
    beforeEach(function() {
      newQF = new QuickFindUF(10)
    })

    describe('Constructor', () => {

      it('should have a property of arrayOfIds', () => {
        expect(newQF).to.have.ownProperty('arrayOfIds')
      })

      it('arrayOfIds has a length equal to input', () => {
        expect(newQF.arrayOfIds.length).to.be.equal(10)
      })

      it('arrayOfIds should be an array where the element is equal to its index', () => {
        expect(newQF.arrayOfIds).to.deep.equal([0,1,2,3,4,5,6,7,8,9])
      })
    })

    describe('areTheyConnected', () => {

      it('should be a property on the class', () => {
        expect(newQF).to.have.property('areTheyConnected')
      })

      it('should be a function', () => {
        expect(newQF.areTheyConnected).to.be.a('function')
      })

      it('should tell if two elements have the same id', () => {
        const arr1 = [0,1,2,3,3,5,6,7,8,9]
        newQF.arrayOfIds = arr1;

        expect(newQF.areTheyConnected(0,1)).to.be.false;
        expect(newQF.areTheyConnected(3, 4)).to.be.true;
        expect(newQF.areTheyConnected(4, 8)).to.be.false;
      })
    })

    describe('connect', () => {
      it('should be a property on the class', () => {
        expect(newQF).to.have.property('connect')
      })

      it('should be a function', () => {
        expect(newQF.connect).to.be.a('function')
      })

      it('should change the ids for a single connect', () => {
        newQF.connect(4,5)
        expect(newQF.arrayOfIds).to.deep.equal([0,1,2,3,5,5,6,7,8,9])
      })

      it('the elements should be connected by the second parameters id(parameter)', () => {
        newQF.connect(8,3)
        expect(newQF.arrayOfIds).to.deep.equal([0,1,2,3,4,5,6,7,3,9])
      })

      it('should change the ids for a two connections', () => {
        newQF.connect(4,5)
        newQF.connect(4,6)
        expect(newQF.arrayOfIds).to.deep.equal([0,1,2,3,6,6,6,7,8,9])
      })

      it('should change the ids for a MANY connections', () => {
        newQF.connect(4,5)
        newQF.connect(6,0)
        newQF.connect(3,1)
        newQF.connect(8,2)
        newQF.connect(7,9)
        expect(newQF.arrayOfIds).to.deep.equal([0,1,2,1,5,5,0,9,2,9])
      })

    })

  })
})
