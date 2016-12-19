# Stacks with Linked List Implementation

### The Stack
The stack data structure is one in which items are placed in a linear fashion. The most familiar implementation of the stack data structure that you may be familiar with is the call stack. The stack follows a defining rule which is "last in first out" or LIFO. What this means is when adding we add to the end of the structure(LAST IN) and when we are removing from the structure we also remove from the end(FIRST OUT). We can also think when we are removing we are removing the last thing added. In essence, stacks use push and pop methods of an array.

Example:

[1,2,3,4]

push(5)

[1,2,3,4] <-- 5

[1,2,3,4,5] BOOM TADA!

pop()

[1,2,3,4] --> 5

[1,2,3,4] BOOM TADA!

## What do we need to implement the Stack Data Structure?
1. We need to be able to insert (push)
2. We need to be able to remove (pop)
3. We need to be able to check the stack is empty

## How are we REALLY going to do this?
We are going to use a string implementation. We will have two classes. One for the Stack and another, Node, for the data to pass into the stack.

The implementation will have 3

StackLL will be a class with these methods
  * `isEmpty` is a method to check if the stack is empty
  * `push` is adds to the stack
  * `pop` removes from the stack

Node will be a class to represent our data.

### Note:
I also included the array implementation in this folder.


