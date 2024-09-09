function callStack() {
  let a = 3;
  let sum = add(a),
    sum2 = add(5);
}

function add(n) {
  let b = 4,
    sum = n + b;

  return sum;
}

console.log(callStack());
