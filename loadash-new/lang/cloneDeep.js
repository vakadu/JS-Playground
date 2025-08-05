function cloneDeep(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  
  let result = Array.isArray(obj) ? [] : {}

  if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        result[index] = cloneDeep(element)        
    }
  }

  if (typeof obj === "object") {
    for (const key in obj) {
      const element = obj[key];
      result[key] = cloneDeep(element)
    }
  }

  return result
}

// const obj = { a: 1, b: { c: 2 } };
// const deepClonedObj = cloneDeep(obj);
// console.log(deepClonedObj); // Expected: { a: 1, b: { c: 2 } }
// console.log(deepClonedObj !== obj); // Expected: true (new object)
// console.log(deepClonedObj.b !== obj.b); // Expected: true (deep copy, different reference)

const arr = [1, [2, 3]];
const deepClonedArr = cloneDeep(arr);
console.log(deepClonedArr); // Expected: [1, [2, 3]]
console.log(deepClonedArr !== arr); // Expected: true (new array)
console.log(deepClonedArr[1] !== arr[1]); // Expected: true (deep copy, different reference)
