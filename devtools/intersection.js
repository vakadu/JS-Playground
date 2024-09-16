// import { intersectionBy } from "lodash";

const { isEqual } = require("lodash");

// function intersection(arr1, arr2) {
//   let a1 = new Set(arr1);
//   let a2 = new Set(arr2);

//   return [...a1].filter((i) => a2.has(i));
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// function intersectionBy(arr1, arr2, iteratee) {
//   const getKey =
//     typeof iteratee === "string" ? (item) => item[iteratee] : iteratee;

//   const transformedSet = new Set(arr2.map(getKey));

//   return arr1.filter((item) => transformedSet.has(getKey(item)));
// }

// // Usage Example
// const arr1 = [2.1, 1.2];
// const arr2 = [2.3, 3.4];
// const result = intersectionBy(arr1, arr2, Math.floor);
// console.log(result); // [2.1]
// console.log(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
// // => [{ 'x': 1 }]

function intersectionWith(arr1, arr2, comparator) {
  //   return arr1.filter((item1) => arr2.some((item2) => comparator(item1, item2)));

  const result = [];

  // Iterate through each element in the first array
  for (let item1 of arr1) {
    // Check if any element in the second array matches the current element from the first array using the comparator
    if (arr2.some((item2) => comparator(item1, item2))) {
      // If a match is found, add the current element from the first array to the result array
      result.push(item1);
    }
  }

  return result;
}

// const array1 = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// const array2 = [
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

function isEqual(value, other) {
  // Check if both values are strictly equal
  if (value === other) return true;

  // Check if either value is null or undefined
  if (value == null || other == null) return false;

  // Check if both values are objects
  if (typeof value !== "object" || typeof other !== "object") return false;

  // Get the keys of both objects
  const keysValue = Object.keys(value);
  const keysOther = Object.keys(other);

  // Check if the number of keys is different
  if (keysValue.length !== keysOther.length) return false;

  // Recursively check if values for each key are equal
  for (const key of keysValue) {
    if (!keysOther.includes(key) || !isEqual(value[key], other[key]))
      return false;
  }

  return true;
}

const result = intersectionWith(objects, others, isEqual);
console.log(result); // [{ id: 2, name: 'Bob' }]
