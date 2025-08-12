function drop(arr, n=1) {
  return arr.slice(n < arr.length ? n : arr.length);
}

console.log(drop([1, 2, 3]));
console.log(
 drop([1, 2, 3], 0));
