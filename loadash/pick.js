function customPick(obj, keys) {
  let result = {};

  for (let key of keys) {
    let splitKeys = key.split("."),
      tempObj = obj,
      tempResult = result;

    for (let index = 0; index < splitKeys.length; index++) {
      const element = splitKeys[index];

      if (index === splitKeys.length - 1) {
        tempResult[element] = tempObj[element]
      } else {
        tempObj = tempObj[element];
        if (!tempResult[element]) {
          tempResult[element] = {};
        }
        tempResult = tempResult[element];
      }
    }
  }

  return result;
}

// const obj = { a: 1, b: 2, c: 3 };
// console.log(customPick(obj, ['a', 'c']));  // Output: { a: 1, c: 3 }
// console.log(customPick(obj, ['b']));       // Output: { b: 2 }

const obj = { a: { b: { c: { d: 5 } } }, e: 6 };
console.log(customPick(obj, ["a.b.c"])); // Output: { a: { b: { c: { d: 5 } } } }
// console.log(customPick(obj, ['a.b.c.d']));  // Output: { a: { b: { c: { d: 5 } } } }
