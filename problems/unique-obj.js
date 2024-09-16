function unique(arr) {
  let result = [],
    set = new Set();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].name;
    if (!set.has(current)) {
      result.push(arr[i]);
    }
    set.add(current);
  }

  return result;
}

console.log(unique([{ name: "1" }, { name: "2" }, { name: "1" }]));
