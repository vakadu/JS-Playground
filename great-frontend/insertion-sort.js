function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

// console.log(insertion([9, 3, 6, 2, 1, 11]));
console.log(insertion([4, 5, 6, 1, 2, 3]));
