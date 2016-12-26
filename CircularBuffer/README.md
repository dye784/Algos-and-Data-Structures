# Circular Buffer

[](https://upload.wikimedia.org/wikipedia/commons/f/fd/Circular_Buffer_Animation.gif)

# What does it do?

The circular buffer data structure is a type of queue with a static size. As the name suggest we circle around and replace old items.

When adding we add to the queue and and when we reach the end of the static structure we start again at the beginning of the queue and replace our past data with our new data.

Similarly when removing we are removing the first element we added. Following these rules, Circular Buffer follows a first-in first-out rule (FIFO).
