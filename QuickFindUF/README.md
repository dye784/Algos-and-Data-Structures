# Quick Find

This is an algo that is used to find if a there is a connection between nodes
We represent it through the use of an array. Simple algorithm with a time complexity of
n-squared.

You begin by defining an array with each element being its respective index

The function has two methods `areTheyConnected` and `connect`

`areTheyConnected` is a function that takes two parameters. It is a function that returns a boolean. It checks if the two elements in the array have the same id.

`connect` is a function that takes two parameters, index1 and index2. It sets the id of the first element to the second element. It also changes the all elements with the same connection(id) of the first element to the second element.
