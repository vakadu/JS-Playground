function largest(array) {
  let max = Number.MIN_SAFE_INTEGER;

  function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        max = Math.max(max, arr[i]);
      }
    }
  }

  traverse(array);

  return max;
}

console.log(
  largest([
    [3, 4, 58],
    [709, 8, 9, [10, 1111]],
  ])
);
