function ary(fn, n) {
  return function (...args) {
    return fn.apply(this, args.slice(0, n));
  };
}

function add(a, b, c) {
  return a + b + c;
}

const addTwo = ary(add, 2); // Only take first 2 args

console.log(add(1, 2, 3));      // 6  -> normal function takes all 3
console.log(addTwo(1, 2, 3));   // 3  -> ignores the 3rd argument

console.log(add(5, 10, 15));    // 30
console.log(addTwo(5, 10, 15)); // 15

console.log(add(0, 0, 100));    // 100
console.log(addTwo(0, 0, 100)); // 0
