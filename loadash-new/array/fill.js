function fill(arr, key, start=0, end=arr.length) {

    start = start < 0 ? Math.max(arr.length + start, 0) : Math.max(start, 0);
    end = end < 0 ? Math.max(arr.length + end, 0) : Math.min(end, arr.length)

  for (let index = start; index < end; index++) {
    arr[index] = key
  }

  return arr;
}

console.log(fill([1, 2, 3], "a"));
// ['a', 'a', 'a']

console.log(fill([1, 2, 3], "a", 1));
// [1, 'a', 'a']

console.log(fill([1, 2, 3], "a", 1, 2));
// [1, 'a', 3]

console.log(fill(Array(3), 2));
// [2, 2, 2]

console.log(fill([1, 2, 3], "x", -2, -1));
// [1, 'x', 3]
