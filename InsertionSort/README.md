# Insertion Sort

### What is it?
Insertion sort relies on the concept of dividing a list into sorted and unsorted sections. It iterates through the unsorted section and moves each unsorted element into its proper place in the sorted section.

Because we potentially need to check the current unsorted element against every element in the sorted section, this algorithm has a run time of O(n^2), or a "quadratic" run time.



### Hint (Approach):

Given array `[1, 3, 4, 2]`

The 0th index is the only one on the "sorted" side so we don't need to check it.

Moving on to the 1st index, `3`, we check it against the sorted array's last element, `1`. Since `3` > `1` we leave it where it is.

Moving on to the 2nd index, `4`, we check it against the sorted array's last element, `3`. Since `4` > `3` we leave it where it is.

Moving on to the 3rd index, `2`, we check it against the sorted array's last element, `4`. Since `2` < `4` we shift `4` once to the right.

Now we check `2` against the sorted array's second-to-last element, `3`. Since `2` < `3` we shift `3` once to the right.

Finally, we check `2` against the sorted array's third-to-last element, `1`. Since `2` > `1` we insert `2` between `1` and the next sorted element, `3`.

