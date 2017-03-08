const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const shellSort = require('./shellSort').shellSort;
const swap = require('./shellSort').swap;

xdescribe('Shell Sort', () => {
  let testArr;
  beforeEach(() => {
    testArr = [5,4,6,8,2,4,6];
  })

  it('should have a swap method swaps two elements in an array', () => {
    swap(testArr, 0, 1)
    expect(testArr).to.deep.equal([4,5,6,8,2,4,6])
  })

  it('shellSort should actually sort stuff', () => {
    expect(shellSort(testArr)).to.deep.equal(testArr.sort())
  })

  it('only need to swap a certain number of times if working properly', () => {
    const spy = chai.spy(shellSort);
    spy(testArr)
    expect(spy).to.have.been.called.with(testArr)
    // expect(spy).to.have.been.called.exactly(0)
  })

})


