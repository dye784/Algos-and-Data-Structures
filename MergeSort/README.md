# Merge Sort

### What is it?
Merge sort continuously (read: recursively) divides a list until it's been split into its smallest possible elements (arrays of length `1`). It may be helpful to picture a binary tree.

Merge sort then joins the smaller elements into larger ones while sorting them, taking advantage of the fact that each list being merged has already been sorted (we only need to compare the first element of each list).

Since we're breaking down the list into smaller items to be sorted as many times as there are elements, this algorithm has a runtime of O(n log n), or "linearithmic" runtime, generally the fastest possible time in a sort and often faster than insertion or selection sorts, for example, which have quadratic runtimes (O(n^2)). However since merge sort doesn't mutate the array in place, it does use (usually trivially) more memory.


### Note:
This implementation is taken from a Full Stack Academy Workshop.

The Coursera course implements a classic version of merge sort using insertion sort as its sorting algo. But the basis is the same.

