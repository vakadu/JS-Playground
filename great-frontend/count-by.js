function countBy(array, iterate) {
  return array.reduce((acc, curr) => {
    let key = iterate(curr);

    if (key in acc) {
      acc[key]++;
    } else {
      acc[key] = 1;
    }
    return acc;
  }, {});
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
