# Quick Sort

### What does it do?
Quick sort uses partitioning to speed up the run time of sorting an array.

It uses a function `partition` selects a pivot then iterates through the array with two indicies, `i` an `j`. This function's job is to break up the array into two parts. We can place the pivot in such a way that it splits the array into two distinct parts. The left part of the array should be less than the pivot and the right part of the array should be greater than.

We now know that the element that was the pivot will be in the correct position.

If we perform this operation again on the sub arrays we will have a sorted array. Notice that quickSort can be more simply applied recursively.
