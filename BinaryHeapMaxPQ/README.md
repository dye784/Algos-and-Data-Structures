# Binary Heap Max Priority Queue

# What is it?
Binary Heap Max Prioriy Queue implements a tree structure into an array. Since the queue is a representation of a binary tree, the elements within the array are already ordered.

Taken from Princeton's Algorithms 4th Edition: http://algs4.cs.princeton.edu/24pq/

![](http://algs4.cs.princeton.edu/24pq/images/heap-representations.png)

The implementation requires a new way to add and remove the max element from the tree. As you'll notice from the tree the element at the top of the tree is the highest element. Just like a regular binary tree you'll notice that the index of one node in the tree points to another node which the index is double it and another node that is double + 1. Clever right?

### What do we need?

`sink` moves down the tree and calls exchange until we are in the right position

`swim` moves up the tree and calls exchange until we are in the right position

`isEmpty` checks if tree is empty

`delMax` swaps the root of the tree with the last element at the bottom of the tree and deletes it. If the last element in the tree is not in the proper position we need to `sink` it into the right position

`insert` add the element to the end of the tree and then call `swim` to put it in the right position

`exchange` swaps position

`isLess` checks which is less
