const expect = require('chai').expect;
const HashTable = require('./hashTables').HashTable;
const HashNode = require('./hashTables').HashNode;

xdescribe('Hash Table', () => {
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

  describe('hash', () => {
    it('should have a function set on its class', () => {
      expect(HT).to.have.property('hash')
    })

    it('should convert sum up the character code of each letter and modulo by the number of buckets', () => {
      expect(HT.hash('foo')).to.equal(9);
      expect(HT.hash('this is a key')).to.equal(27);
      expect(HT.hash('what about this one')).to.equal(13);
    })
  })

  describe('get', () => {
    it('should have a function get on its class', () => {
      expect(HT).to.have.property('get')
    })

    it('should get the correct value when separate chaining is not needed', () => {
      const i = HT.hash('hello')
      HT.buckets[i] = { key:'hello', value:'goodbye'}
      expect(HT.get('hello')).to.equal('goodbye')
    })

    it('should work with collisions', () => {
      const i = HT.hash('foo')
      HT.buckets[i] = { key: 'foo', value: 'bar'}
      HT.buckets[i].next = { key: 'ofo', value: 'SOMETHING ELSE ENTIRELY'}
      expect(HT.get('ofo')).to.equal('SOMETHING ELSE ENTIRELY')
    })
  })

  describe('set', () => {
    it('should have a function set on its class', () => {
      expect(HT).to.have.property('set')
    })

    it('should handle setting a value without collisions', () => {
      HT.set('foo', 'bar')
      expect(HT.buckets[9].key).to.equal('foo')
      expect(HT.buckets[9].value).to.equal('bar')
      expect(HT.buckets[9].next).to.be.null
    })

    it('should handle collisions', () => {
      HT.set('foo', 'bar1');
      HT.set('ofo', 'bar2');
      expect(HT.get('ofo')).to.equal('bar2');
      expect(HT.get('foo')).to.equal('bar1');
    })

    it('should overwrite if the keys are the same', () => {
      HT.set('foo', 'bar1');
      HT.set('foo', 'bar2');
      expect(HT.get('foo')).to.equal('bar2');
    })
  })
})

xdescribe('Hash Node', () => {

  let hNode;
  beforeEach(() => {
    hNode = new HashNode('very special key', 'very special value')
  })

  describe('Constructor', () => {
    it('should have properties key, value, and next', () => {
      expect(hNode).to.have.ownProperty('key')
      expect(hNode).to.have.ownProperty('value')
      expect(hNode).to.have.ownProperty('next')
    })

    it('should key and value set to input value', () => {
      expect(hNode.key).to.equal('very special key')
      expect(hNode.value).to.equal('very special value')
    })

    it('should next set to null', () => {
      expect(hNode.next).to.be.null
    })
  })
})
