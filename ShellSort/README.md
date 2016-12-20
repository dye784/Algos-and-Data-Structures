# Shell Sort

## What does it do?
Shell Sort is more general sorting algo that is much faster than Insertion Sort. In fact you can think of Insertion Sort as a specific variation of Shell Sort.

In insertion sort we sort by swapping the previous value if it is less. In Shell sort we sort by swapping a distance h instead of just 1. The distance, h, will be a distance that we increment throughout.


For example:
if h is 2

<--2--->
[4, 3, 2, 1, 5, 6]
 2     4
    1     3

and so on.

## How will we implement it?
Seeing how we already have Insertion Sort set up we just need to modify it to not simply sort by 1. We will be implementing a simple and easy to compute equation for h.

h = 3h + 1


