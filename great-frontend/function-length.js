// function count(func) {
//   if (typeof func !== "function") {
//     throw new Error("not a function");
//   }
//   return func.length;
// }

function count(func) {}

let ex = function (a, b, c) {};
let ex2 = function ([a, b, c]) {};
const add = (x) => x + 2;
const ex3 = (x, ...rest) => x + 2;

console.log(count(ex));
console.log(count(ex2));
console.log(count(add));
console.log(count(ex3));
console.log(count("ghh"));
