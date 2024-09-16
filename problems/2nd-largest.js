function largest(arr) {
  let one = Number.MIN_SAFE_INTEGER,
    second = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > one) {
      second = one;
      one = arr[i];
    } else if (arr[i] > second && arr[i] !== one) {
      second = arr[i];
    }
  }

  return second;
}

console.log(largest([10, 5, 20, 8, 12]));
console.log(largest([100, 20, 112, 22]));
