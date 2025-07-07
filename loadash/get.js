function customGet(obj, s, d) {
  let result = obj,
    keys = Array.isArray(obj) ? s : s.split(".");

  for (let key of keys) {
    if (key.includes("[") && key.includes("]")) {
      let splitArr = key.split("[")[0];
      let index = parseInt(key.split("[")[1].split("]")[0], 10);
      result = result[splitArr] ? result[splitArr][index] : undefined;
    } else {
      result = result[key];
    }

    if (result === undefined || result === null) {
      return d; // If `d` is provided, return default value
    }
  }

  return result === undefined || result === null ? d : result;
}

// const obj = { a: { b: { c: 3 } } };
// console.log(customGet(obj, 'a.b.c'));   // Output: 3
// console.log(customGet(obj, 'a.b.d'));   // Output: undefined

// const obj = { a: 1, b: 2 };
// console.log(customGet(obj, 'a'));    // Output: 1
// console.log(customGet(obj, 'b'));    // Output: 2
// console.log(customGet(obj, 'c'));    // Output: undefined (key doesn't exist)

// const obj = { a: [1, 2, 3], b: { x: 10 } };
// console.log(customGet(obj, "a[0]")); // Output: 1
// console.log(customGet(obj, "a[1]")); // Output: 2
// console.log(customGet(obj, "b.x")); // Output: 10
// console.log(customGet(obj, "a[5]")); // Output: undefined (index doesn't exist)

// const obj = { a: 1, b: { x: 2 } };
// console.log(customGet(obj, 'a', 'default'));      // Output: 1
// console.log(customGet(obj, 'c', 'default'));      // Output: default
// console.log(customGet(obj, 'b.x', 'default'));   // Output: 2
// console.log(customGet(obj, 'b.y', 'default'));   // Output: default

// const obj = { name: "John", age: 30, country: "USA" };
// const key = "name";
// console.log(customGet(obj, key));    // Output: John (dynamically access property)

// const dynamicKey = "country";
// console.log(customGet(obj, dynamicKey));  // Output: USA

const obj = { arr: [{ a: 1 }, { b: 2 }] };
console.log(customGet(obj, "arr[0].a")); // Output: 1
console.log(customGet(obj, "arr[1].b")); // Output: 2
console.log(customGet(obj, "arr[2]")); // Output: undefined (index out of bounds)
