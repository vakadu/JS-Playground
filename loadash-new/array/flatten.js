function flatten(array) {
  let result = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      result = [...result, ...element];
    } else {
      result.push(element);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, [4]], 5]]));
// Expected: [1, 2, [3, [4]], 5]

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
// Expected: [1, 2, 3, 4]
