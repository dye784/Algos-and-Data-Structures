// from http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
const bubbleSort = (toBeSorted) => {
  var a = toBeSorted.slice(0);
  var swapped;
  do {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

module.exports = bubbleSort