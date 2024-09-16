function product(arr) {
  let reuslt = [],
    n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let next1 = arr[(i + 1) % n];
    let next2 = arr[(i + 2) % n];
    console.log();
  }

  return reuslt;
}

console.log(product([3, 4, 5]));
