function insertion(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    if (arr[i] < arr[j]) {
      j--;
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

// console.log(insertion([9, 3, 6, 2, 1, 11]));
console.log(insertion([12, 16, 14, 1, 2, 3]));
