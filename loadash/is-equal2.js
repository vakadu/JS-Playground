function customIsEqual(o1, o2) {
  if (o1 === o2) {
    return true;
  }

      if (o1 == null || o2 == null || (typeof o1 !== 'object' && typeof o2 !== 'object')) {
        return false;
    }


  if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) {
      return false;
    }

    for (let index = 0; index < o1.length; index++) {
      const element1 = o1[index];
      const element2 = o2[index];
      if (!customIsEqual(element1, element2)) {
        return false;
      }
    }

    return true;
  }

  let key1 = Object.keys(o1);
  let key2 = Object.keys(o2);
  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    let val1 = o1[key];
    let val2 = o2[key];

    if (!customIsEqual(val1, val2)) {
      return false;
    }
  }

  return true;
}

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { a: 1, b: { x: 10, y: 20 } };
// console.log(customIsEqual(obj1, obj2));  // Output: true

// const obj3 = { a: 1, b: { x: 10 } };
// console.log(customIsEqual(obj1, obj3));  // Output: false

const obj1 = { a: { b: [1, 2, 3] } };
const obj2 = { a: { b: [1, 2, 3] } };
// console.log(customIsEqual(obj1, obj2)); // Output: true

const obj3 = { a: { b: [1, 2, 4] } };
console.log(customIsEqual(obj1, obj3)); // Output: false (array elements differ)
