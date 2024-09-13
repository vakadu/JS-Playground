function minBy(array, iteratee) {
  const validElements = array.filter((item) => iteratee(item) !== undefined);
  if (validElements.length === 0) {
    return undefined;
  }
  return array.reduce((acc, curr) => {
    if (iteratee(curr) < iteratee(acc)) {
      return curr;
    }
    return acc;
  }, array[0]);
}

console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n));
console.log(minBy([2, 3, 1, 4], (x) => x));
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m));
console.log(minBy([{ n: 1 }, { n: 2, m: 3 }, { m: 4 }], (o) => o.m));
