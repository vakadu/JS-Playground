function countBy(array, iteratee) {
  let result = {};

  for (let num of array) {
    let temp = iteratee(num);
    if(!result[temp]) {
        result[temp] = 0
    }
    result[temp] = result[temp]+1
  }
  return result;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));

console.log(countBy([{ n: 1 }, { n: 2 }], (o) => o.m));

console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
