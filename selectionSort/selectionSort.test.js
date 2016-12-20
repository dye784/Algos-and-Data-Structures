const expect = require('chai').expect
const SelectionSort = require('./selectionSort')


// taken from test specs from FullStack Sorting Workshop

// const numerically = function (a, b) { return a - b; }
//
// const generateArray = function (size, lower, upper) {
//   const randomArray = [];
//   while (size--) {
//     let randomNum = Math.floor(lower + Math.random() * upper);
//     randomArray.push(randomNum);
//   }
//   return randomArray;
// }

// describe('Selection Sort', function(){

//   for (let i = 2; i < 103; i += 20) {
//     it('sorts an array of ' + i + ' random items', function(){
//       const arr = generateArray(i, 0, 100);
//       const sorted = arr.slice(0).sort(numerically);
//       expect( bubbleSort(arr) ).toEqual( sorted );
//     });
//   }

//   it('compares the expected number of times', function(){
//     spyOn(window, 'inOrder').and.callThrough();
//     bubbleSort([4, 6, 5, 1]);
//     expect(inOrder.calls.count()).toEqual(10);
//   });

//   it('swaps the expected number of times', function(){
//     spyOn(window, 'swap').and.callThrough();
//     bubbleSort([4, 6, 5, 1]);
//     expect(swap.calls.count()).toEqual(4);
//   });
