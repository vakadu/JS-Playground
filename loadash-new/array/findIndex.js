function findIndex(arr, predicate) {
  const fn = toIteratee(predicate);  

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(fn(element)) {
        return index
    }
  }

  return -1;
}

function toIteratee(predicate) {
  if (typeof predicate === "function") {
    return predicate
  }

  if (Array.isArray(predicate) && predicate.length === 2) {
    const [key, value] = predicate;
    return (obj) => obj?.[key] === value
  }

  if (predicate && typeof predicate === "object") {
    return (obj) => {
        for (const key in predicate) {
            const element = predicate[key];
            const check = obj[key];

            if(element !== check) {
                return false
            }
        }
        return true
    }
  }

  if(typeof predicate === "string") {
    return (obj) => obj?.[predicate]
  }
}

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

// console.log(findIndex(users, (o) => o.user === "fred")); // 1
// console.log(findIndex(users, (o) => o.active)); // 2
// console.log(findIndex(users, (o) => o.user === "unknown")); // -1
console.log(findIndex(users, ["active", false]));//0
console.log(findIndex(users, { user: "fred", active: false })); //1
console.log(findIndex(users, 'active'));2 // finds first where `active` is truthy
