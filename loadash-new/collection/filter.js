Array.prototype.customFilter = function(predicate) {
    let result = [];

  for (const element of this) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

// function filter(array, predicate) {
//   // your code here
//   let result = [];

//   for (const element of array) {
//     if (predicate(element)) {
//       result.push(element);
//     }
//   }

//   return result;
// }

// console.log(filter([1, 2, 3, 4], (n) => n % 2 === 0));
// // [2, 4]

// console.log(filter(["a", "", "b"], Boolean));
// ['a', 'b']

console.log([1, 2, 3, 4].customFilter(n => n % 2 === 0)); // [2, 4]
console.log(['a', '', 'b'].customFilter(Boolean));        // ['a', 'b']

