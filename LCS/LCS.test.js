const { expect } = require('chai');
const { LCS_length, subproblem } = require('./LCS');

xdescribe('Longest Common Subsequence (dynamic programming)', () => {


  it('should use two functions', () => {
    expect(LCS_length).to.exist;
    expect(subproblem).to.exist
  })

  it('should work', () => {
    expect(LCS_length('abc', 'ac')).to.equal('ac')
  })
})
