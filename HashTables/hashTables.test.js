const chai = require('chai');
const expect = require('chai').expect;
const chaiProperties = require('chai-properties');
chai.use(chaiProperties);

const HashTable = require('./hashTables').HashTable;
const HashNode = require('./hashTables').HashNode;

describe('Hash Table', () => {
  let HT;
  beforeEach(() => {
    HT = new HashTable();
  });

  describe('Constructor', () => {
    it('should have properties numBuckets and buckets', function() {
      expect(HT).to.have.ownProperty('numBuckets');
      expect(HT).to.have.ownProperty('buckets');
    });
  });

  describe('hash', () => {
    it('should be an instance method', () => {
      expect(HT).to.have.property('hash');
      expect(HT).to.not.have.ownProperty('hash');
      expect(HT.hash).to.be.a('function');
    });

    it('should convert sum up the character code of each letter and modulo by the number of buckets', () => {
      expect(HT.hash('foo')).to.equal(9);
      expect(HT.hash('this is a key')).to.equal(27);
      expect(HT.hash('what about this one')).to.equal(13);
    });
  });

  describe('get', () => {
    it('should be an instance method', () => {
      expect(HT).to.have.property('get');
      expect(HT).to.not.have.ownProperty('get');
      expect(HT.get).to.be.a('function');
    });

    it('should get the correct value when separate chaining is not needed', () => {
      const i = HT.hash('hello');
      HT.buckets[i] = { key: 'hello', value: 'goodbye'};
      expect(HT.get('hello')).to.equal('goodbye');
    });

    it('should work with collisions', () => {
      const i = HT.hash('foo');
      HT.buckets[i] = { key: 'foo', value: 'bar'};
      HT.buckets[i].next = { key: 'ofo', value: 'SOMETHING ELSE ENTIRELY'};
      expect(HT.get('ofo')).to.equal('SOMETHING ELSE ENTIRELY');
    });
  });

  describe('set method', () => {
    it('should be an instance method', () => {
      expect(HT).to.have.property('set');
      expect(HT).to.not.have.ownProperty('set');
      expect(HT.set).to.be.a('function');
    });

    it('should handle setting a value without collisions', () => {
      HT.set('foo', 'bar');
      const match = {key: 'foo', value: 'bar', next: null};
      const testBucket = HT.buckets.filter(elem => elem)[0];
      expect(testBucket).to.be.deep.equal(match);
      expect(testBucket.key).to.equal('foo');
      expect(testBucket.value).to.equal('bar');
      expect(testBucket.next).to.be.null;
    });

    it('should handle collisions and place newly hashed value at the head of the bucket', () => {
      HT.set('foo', 'bar1');
      HT.set('ofo', 'bar2');
      // find the bucket that includes any values
      const testBucket = HT.buckets.filter(elem => elem)[0];
      expect(testBucket).to.have.properties({key: 'ofo', value: 'bar2'});
      expect(testBucket.next).to.have.properties({key: 'foo', value: 'bar1'});
      expect(HT.get('ofo')).to.equal('bar2');
      expect(HT.get('foo')).to.equal('bar1');
    });

    it('should overwrite if the keys are the same', () => {
      HT.set('foo', 'bar1');
      HT.set('foo', 'bar2');
      expect(HT.get('foo')).to.equal('bar2');
    });
  });
});

describe('Hash Node', () => {

  let hNode;
  beforeEach(() => {
    hNode = new HashNode('very special key', 'very special value');
  });

  describe('Constructor', () => {
    it('should have properties key, value, and next', () => {
      expect(hNode).to.have.ownProperty('key');
      expect(hNode).to.have.ownProperty('value');
      expect(hNode).to.have.ownProperty('next');
    });

    it('should key and value set to input value', () => {
      expect(hNode.key).to.equal('very special key');
      expect(hNode.value).to.equal('very special value');
    });

    it('should next set to null by default', () => {
      expect(hNode.next).to.be.null;
    });

    it('should set next correctly if argument is provided', () => {
      const newHNode = new HashNode('key 2', 'value2', hNode);
      expect(newHNode.next).to.be.equal(hNode);
    });
  });
});
