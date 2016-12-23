# Left Leaning Red Black Binary Search Tree

# What is it?
This BST is an simpler implementation of a 2-3 Tree. So what is a 2-3 Tree?

The 2-3 Tree is that:

It allows 1 or 2 keys per node.
  * 2-node : has one key and two children
  * 3-node: has two keys and three children
    * When searching
      1. value < left key go left
      2. value > right key go right
      3. value between left and right key go down middle branch

Perfect Balance:
  * Every path from root to node has the same length

Symmetric Order:
  * Inorder traversal yields keys in ascending order

Insert Photo Example Here:

Searching

Inserting

In a LLRBBST(LOL sorry too lazy to type it out) the red links would indicate if the the current node has 3 children. It "glues" the nodes together. Black would indicate it is just a regular node. It is "Left leaning" because the the node on the left holds 2 of 3 of the node's children. The right is just one of the three children.

Image photo here:

So any 2-3 Tree can be representing as a LLRBBST. There is a 1-1 correspondence between the two. If it is difficult to see it, just imagine the red links are horizontal. And the horizontal connections with the red link is one node(with two keys). Here's a photo to clear it up.

Image Photo here:

Key points:
It is a BST such that:
  * No node has two red links conneted to it.
  * Every path from the root to null has the same number of black links
    * "Perfect black balance"

# What needs to be implemented.

`search` search is actually exactly the same as an elementary BST. We can just ignore color. (Although the search will be faster because of better balance)
  * One of the reasons why LLRBBST is used is because it is simple to implement there is no need to create many new functions as they are the same as a elementary BST.

