# Weighted Quick Union

The problem with QuickUnion, just like linked binary search trees, is that you can have everything attached onto one tree. Essentially instead of a tree you have something that looks like a linked list. Everthing is attached to the same tree vertically. This is why the worst case is quadratic run time. So having a weighted approach to adding to the tree prevents that. This speeds up our run time. The run time is somewhere between Quadratic and Linear. Almost there! But WE CAN DO BETTER.

Weighted Quick Union is an improvement on Quick Union.

The implementation involves weighing the important of a tree by it's depth. If two trees are to be connected we connect the smaller tree BELOW the larger tree.

### For example:

1. You have a single tree of depth one.(D1)
2. You have another tree of depth two.(D2)

Scenario One:
When connecting to the root node if you attach the D2 BELOW D1 then you get a tree of depth 3. The tree now looks like a linked list where each branch has one child branch.

Scenario Two:
When connecting to the root node if you attach the D1 BELOW D2 then you get a tree of depth 2. The tree now looks like a root node that has 2 branches. The tree has depth of 2.

This way we can limit the depth of the tree as we add onto each tree.

Now the tree has a larger breadth but shorter depth. This is easier to handle when searching. Yay!

## The modifications to QuickUnion :

### Data Structure Changes:
The general data structure remains the same. The only thing we need to add to the structure is another array that holds the size of the tree

### Connect Changes:
Find out which tree is larger. Link smaller tree to larger tree. Update the arrayOfSizes.

# Note:
No test specs for this because I'm lazy. Also because it's pretty simple to implement. There are only a few modifications to do. Try to implement yourself and then look at the solution if you get stuck or you can just look at the solution and learn from that. ¯\_(ツ)_/¯ <-- lost his arm from writing test specs

See README for Weighted Quick Union Path Compression for full improvements on this algo.

If you want to try and implement and see how this affects your performance run time you can use

`const timerName = "OPTINAL STRING HERE TO CALL YOUR TIMER"`

`console.time(timerName)`

and then to end the timer

`console.timeEnd(timerName)`
