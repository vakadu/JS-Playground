function castArray(val) {
  let result = [];

  if (
    typeof val === "string" ||
    typeof val === "boolean" ||
    typeof val === "number"
  ) {
    result.push(val);
  }

  if(Array.isArray(val)) {
    return val
  }

  result.push(val)

  return result;
}

// const result1 = castArray(5);
// console.log(result1);

// const result3 = castArray([1, 2, 3]);
// console.log(result3); // Expected: [1, 2, 3]

// const result4 = castArray({ a: 1, b: 2 });
// console.log(result4); // Expected: [{ a: 1, b: 2 }]

const result6 = castArray(undefined);
console.log(result6); // Expected: [undefined]
