const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const shellSort = require('./shellSort').shellSort;
const swap = require('./shellSort').swap;

describe.only('Shell Sort', () => {
  it('should have a swap method swaps two elements in an array', () => {
    const testArr = [1,2,3]
    expect(swap(testArr, 0, 1)).to.deep.equal([3,2,1])
  })

  it('should have a shellSort method', () => {

  })

})


