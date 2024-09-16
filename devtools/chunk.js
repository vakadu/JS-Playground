function chunk(arr, num) {
  let reuslt = [];

  for (let i = 0; i < arr.length; i += num) {
    let count = i + num;
    let temp = arr.slice(i, count);
    reuslt.push(temp);
  }

  return reuslt;
}

console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk(["a", "b", "c", "d"], 3));
