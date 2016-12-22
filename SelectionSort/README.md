# Selection Sort

### What is it?
Selection sort relies on the concept of dividing a list into sorted and unsorted sections. It iterates through the list and moves the smallest unsorted value to the end of the sorted section.

Because we need to iterate through the entire list, and within that loop iterate through the unsorted section to find the minimum for each remaining unsorted element, this algorithm has a run time of O(n^2), or a "quadratic" run time.


### Hint (Approach):

Given array `[2, 4, 1, 3]`

Find the current unsorted minimum (`1`) and swap it with the first unsorted element (`2`)

`[1, 4, 2, 3]`

Find the current unsorted minimum (`2`) in unsorted section `[ 4, 2, 3 ]`
Swap the unsorted minimum (`2`) with the first unsorted element (`4`)

`[1, 2, 4, 3]`

Find the current unsorted minimum (`3`) in unsorted section `[ 4, 3 ]`
Swap the unsorted minimum (`3`) with the first unsorted element (`4`)

Since the last element will necessarily be sorted we don't need to check it.