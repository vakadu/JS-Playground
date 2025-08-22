function listFormat(arr, options) {
  if (arr.length <= 1) {
    return arr.join(", ");
  } else {
    let newArr = [...arr];

    if (options?.sorted) {
      newArr.sort((a, b) => a.localeCompare(b));
    }
    if (options?.unique) {
      let set = new Set([...newArr]);
      newArr = [...set.values()];
    }
    let temp = newArr.slice(0, options?.length || newArr.length - 1);
    let remain = options?.length && newArr.slice(options?.length);

    newArr = [
      ...temp,
      remain
        ? `and ${remain.length} ${remain.length === 1 ? "other" : "others"}`
        : `and ${arr[arr.length - 1]}`,
    ];

    if(newArr.length === 2) {
      return `${newArr[0]} ${newArr[1]}`
    } else {
      return newArr.slice(0,-1).filter(Boolean).join(', ') + " " + newArr.slice(newArr.length-1)
    }
  }
}

console.log(listFormat([]));
// ''

console.log(listFormat(["Bob"]));
// 'Bob'

console.log(listFormat(["Bob", "Alice"]));
// 'Bob and Alice'

console.log(listFormat(["Bob", "Ben", "Tim", "Jane", "John"]));
// 'Bob, Ben, Tim, Jane and John'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
  })
);
// 'Bob, Ben, Tim and 2 others'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 4,
  })
);
// 'Bob, Ben, Tim, Jane and 1 other'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
    sorted: true,
  })
);
// 'Ben, Bob, Jane and 2 others'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
    length: 3,
    unique: true,
  })
);
// 'Bob, Ben, Tim and 2 others'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
    unique: true,
  })
);
// 'Bob, Ben, Tim and 2 others'

console.log(listFormat(["Bob", "Ben", "", "", "John"]));
// 'Bob, Ben and John'
