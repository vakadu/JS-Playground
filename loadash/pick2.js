function customPick(obj, paths) {
  let result = {};

  for (const path of paths) {
    let splitPaths = path.split("."),
      tempObj = obj,
      tempResult = result;

    for (let index = 0; index < splitPaths.length; index++) {
      const element = splitPaths[index];

      if (element.includes("[") && element.includes("]")) {
        let key = element.split("[")[0];
        let value = parseInt(element.split("[")[1].split("]")[0], 10);
        if (
          tempObj[key] &&
          Array.isArray(tempObj[key]) &&
          tempObj[key][value] !== undefined
        ) {
          if (!tempResult[key]) {
            tempResult[key] = [];
          }
          tempResult[key].push(tempObj[key][value]);
        }
      } else {
        if (index === splitPaths.length - 1) {
          tempResult[element] = tempObj[element];
        } else {
          tempObj = tempObj[element];
          if (!tempResult[element]) {
            tempResult[element] = {};
          }
          tempResult = tempResult[element];
        }
      }
    }
  }

  return result;
}

// const obj = { a: 1, b: 2, c: 3 };
// console.log(customPick(obj, ['a', 'c']));  // Output: { a: 1, c: 3 }
// console.log(customPick(obj, ['b']));       // Output: { b: 2 }

// const obj = { a: { b: 1 }, c: 2 };
// console.log(customPick(obj, ['a']));       // Output: { a: { b: 1 } }
// console.log(customPick(obj, ['a.b']));     // Output: { a: { b: 1 } }
// console.log(customPick(obj, ['c']));       // Output: { c: 2 }

const obj = { a: [1, 2], b: { x: 10 } };
console.log(customPick(obj, ["a[0]"])); // Output: { a: [1] }
console.log(customPick(obj, ["b.x"])); // Output: { b: { x: 10 } }
