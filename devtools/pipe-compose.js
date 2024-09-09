const add2 = (x) => x + 2;
const multiply2 = (x) => x * 2;
const sub2 = (x) => x - 2;

console.log(multiply2(sub2(add2(4))));

//compose functions
const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fn) => fn(prev), val);
let result = compose(multiply2, sub2, add2)(4);
console.log(result);

//pipes
//multiple params

const divideBy = (num, divisor) => num / divisor;

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);
let result2 = pipe(add2, sub2, multiply2, (x) => divideBy(2, x))(4);
console.log(result2);

const split = (s) => s.split("");
const reverse = (r) => r.reverse();
const join = (a) => a.join("");

const rev = pipe(split, reverse, join)("look");
console.log(rev);
