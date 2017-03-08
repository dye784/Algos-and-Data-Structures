const L = [[]];

const subproblem = (i, j, str1, str2) => {
  // if (L[i][j] < 0) {
  //   if (str1[i] === '' || str2[j] === '') L[i][j] = 0
  //   else if (str1[i] === str2[j]) L[i,j] = 1 + subproblem(i + 1, j + 1)
  //   else L[i, j] = Math.max(subproblem(i + 1, j), subproblem(i, j + 1))
  // }

  // return L[i][j]
}

const LCS_length = (str1, str2) => {
  // const m = Math.max(str1.length, str2.length)
  // // console.log(m)
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < m; j++) {
  //     if (!L[i][j]) L[i][j] = []
  // console.log('ARRAY L : ', L)
  //     L[i][j] = -1;
  //   }
  // }
  // return subproblem(0,0, str1, str2)
}



module.exports = { LCS_length, subproblem }
