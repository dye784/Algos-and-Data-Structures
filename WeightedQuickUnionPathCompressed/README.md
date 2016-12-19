# Weight Quick Union with Path Compression

### Improvements
This is yet another improvement on the Quick Union algo.

Since we now know that what makes the run time go up(tree depth) we can now optimize even futher.

We can do this by making the tree as flat as we can. By changing the depth of the tree and expanding the breadth. It's actually really simple to do this. It can be done by adding one line to our existing implementation.

#### How do we make the tree flatter?
One way we can make the tree flatter is by making as many things we can point to the a "older" root node.

### Where can we put our magical one line of code?
Luckily we already have a function that finds the root node for us. So that would be a good place to add the the magic one liner.

By adding this one liner to our root function every time we call it we change our tree structure to be more flat.

## Note:
Try it out. There's an explanation in the file telling you what the magic one liner does.

With this improvement we now have something that is close enough to linear run time (O(n)) in practice. It's not exactly linear but for all practical purposes it is linear.
