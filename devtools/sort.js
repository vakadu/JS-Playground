function quickSort(arr, order = "asc", key = null) {
  if (arr.length <= 1) return arr;

  // Pivot selection
  let pivot = arr[0];

  // Comparison function
  const compare = (a, b) => {
    // Define the comparison function that takes two arguments, `a` and `b`.

    let valA = key ? a[key] : a;
    // If a `key` is provided (for objects), use `a[key]` and `b[key]` to get the values to compare.
    // If no `key` is provided (for primitive types), use `a` and `b` directly.

    let valB = key ? b[key] : b;
    // Same as above, get the value from `b` using `key` if provided.

    if (typeof valA === "string" && typeof valB === "string") {
      // Check if both `valA` and `valB` are strings.

      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
      // If sorting in ascending order, use `localeCompare` to sort strings.
      // `localeCompare` returns a negative number if `valA` is less than `valB`,
      // zero if they are equal, and a positive number if `valA` is greater than `valB`.
      // If sorting in descending order, swap the order of comparison to reverse the result.
    } else {
      // If `valA` and `valB` are not strings (i.e., numbers or other comparable types).

      if (order === "asc") {
        return valA - valB;
        // For ascending order, subtract `valB` from `valA`.
        // This returns a negative number if `valA` is less than `valB`,
        // zero if they are equal, and a positive number if `valA` is greater than `valB`.
      } else if (order === "desc") {
        return valB - valA;
        // For descending order, subtract `valA` from `valB`.
        // This returns a negative number if `valB` is less than `valA`,
        // zero if they are equal, and a positive number if `valB` is greater than `valA`.
      }
    }

    return 0;
    // Default return value if none of the conditions are met (rare case).
    // Indicates that `valA` and `valB` are considered equal.
  };

  // Partitioning the array
  let left = arr.filter((item) => compare(item, pivot) < 0);
  let right = arr.filter((item) => compare(item, pivot) > 0);
  let middle = arr.filter((item) => compare(item, pivot) === 0);

  // Recursively apply quickSort to partitions and concatenate results
  return [
    ...quickSort(left, order, key),
    ...middle,
    ...quickSort(right, order, key),
  ];
}

// Example usage:
const numbersAsc = [12, 16, 14, 1, 2, 3];
console.log(quickSort(numbersAsc, "asc")); // [1, 2, 3, 12, 14, 16]

const stringsAsc = ["banana", "apple", "cherry"];
console.log(quickSort(stringsAsc, "asc")); // ['apple', 'banana', 'cherry']

const objectsAsc = [{ name: "banana" }, { name: "apple" }, { name: "cherry" }];
console.log(quickSort(objectsAsc, "asc", "name")); // [{ name: 'apple' }, { name: 'banana' }, { name: 'cherry' }]

const numbersDesc = [12, 16, 14, 1, 2, 3];
console.log(quickSort(numbersDesc, "desc")); // [16, 14, 12, 3, 2, 1]

const stringsDesc = ["banana", "apple", "cherry"];
console.log(quickSort(stringsDesc, "desc")); // ['cherry', 'banana', 'apple']

const objectsDesc = [{ name: "banana" }, { name: "apple" }, { name: "cherry" }];
console.log(quickSort(objectsDesc, "desc", "name")); // [{ name: 'cherry' }, { name: 'banana' }, { name: 'apple' }]
