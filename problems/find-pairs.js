function findPairs(i1, i2) {
  let map1 = new Set(),
    result = [];
  for (let num of i1) {
    let count = i2 - num;
    if (map1.has(count)) {
      result.push([num, count]);
    }
    map1.add(num);
  }

  return result;
}

console.log(findPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
