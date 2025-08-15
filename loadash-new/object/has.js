function has(obj, key) {
  let temp = obj,
    splitKeys = Array.isArray(key) ? key : key.split(".");

  for (const element of splitKeys) {    
    if (!Object.prototype.hasOwnProperty.call(temp, element)) {
      return false;
    }
    temp = temp[element];
  }

  return true;
}

// const obj = { a: { b: 2 } };
// console.log(has(obj, "a")); // true
// console.log(has(obj, 'a.b'));     // true
// console.log(has(obj, 'x'));       // false

const obj = { a: { b: 1 }, c: { d: 0 } };

// console.log(has(obj, 'a.b'));  // true
// console.log(has(obj, 'a.c'));  // false
console.log(has(obj, 'c.d'));  // true
// console.log(has(obj, 'c.e'));  // false
// console.log(has(obj, ['a', 'b'])); // true
