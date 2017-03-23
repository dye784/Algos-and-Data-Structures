// From Full Stack Sorting Workshop
const mergeSort = {};

mergeSort.split = function (array) {
  const center = array.length / 2,
      left = array.slice(0, center),
      right = array.slice(center);
  return [left, right];
}

mergeSort.merge = function (left, right) {
  const merged = [];
  let leftIdx = 0,
      rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }

  merged.push(...left.slice(leftIdx));
  merged.push(...right.slice(rightIdx));
  return merged;
}

mergeSort.mergeSort = function (array) {
  if (array.length < 2) return array;
  const splits = mergeSort.split(array),
      left = splits[0],
      right = splits[1];

  let leftResult = left.length > 1 ? mergeSort.mergeSort(left) : left;
  let rightResult = right.length > 1 ? mergeSort.mergeSort(right) : right;

  return mergeSort.merge(leftResult, rightResult);
}

module.exports = mergeSort;
