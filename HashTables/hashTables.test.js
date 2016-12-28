const expect = require('chai').expect;
const HashTable = require('./hashTables');

describe('Hash Table', () => {
  let HT;
  beforeEach(() => {
    HT = new HashTable()
  })

  describe('Constructor', () => {
    it('should have properties numBuckets and buckets', function() {
      expect(HT).to.have.ownProperty('numBuckets');
      expect(HT).to.have.ownProperty('buckets');
    });
  })

  describe('get', () => {
    it('should have a function get on its class', () => {
      expect(HT).to.have.property('get')
    })

    it('should', () => {

    })

    it('should', () => {

    })
  })

  describe('set', () => {
    it('should have a function set on its class', () => {
      expect(HT).to.have.property('set')
    })

    it('should', () => {

    })

    it('should', () => {

    })
  })

  describe('hash', () => {
    it('should have a function set on its class', () => {
      expect(HT).to.have.property('hash')
    })

    it('should', () => {

    })

    it('should', () => {

    })
  })

  describe('hasKey', () => {
    it('should have a function hasKey on its class', () => {
      expect(HT).to.have.property('hasKey')
    })

    it('should', () => {

    })

    it('should', () => {

    })
  })
})

describe('Hash Node', () => {
  describe('Constructor', () => {
    it('should', () => {

    })

    it('should', () => {

    })
  })
})
