function bs(arr, target) {
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return -1;
}

console.log(bs([1, 2, 3, 6, 9, 11], 6));
console.log(bs([1, 2, 3, 12, 14, 16], 5));
