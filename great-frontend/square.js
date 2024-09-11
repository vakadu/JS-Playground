function square(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(Math.pow(arr[i], 2));
  }

  return result;
}

console.log(square([1, 2, 3]));
