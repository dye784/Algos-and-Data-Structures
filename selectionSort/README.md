# Selection Sort

### What does it do?
Selection sort algorithm is one that scans through an unsorted array finds the minimum/maximum and swaps it with the that element with the first sorted element. Since this sorting method scans through the array twice for one sorting operation it has a quadratic run time (O(n^2)).

Example:

[2, 4, 1, 3]

findMin 1
swap with first element because it is not sorted

[1, 4, 2, 3]

findMin in unsorted elements [ 4, 2, 3 ] => 2
swap min with next unsorted element 4

[1, 2, 4, 3]

findMin in unsorted elements [ 4, 3 ] => 3
swap min with next unsorted element 4

[1, 2, 3, 4] sorted!

### What do we need?
1. A function to compare the two elements
2. A function to swap the elements
3. A function that iterates through the array and implements the previous 2 functions
