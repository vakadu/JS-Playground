function customFind(array, callback, elem) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], elem)) {
      return array[i];
    }
  }

  return undefined;
}

function customSome(array, callback, elem) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], elem)) {
      return true;
    }
  }

  return false;
}

function customEvery(array, callback, elem) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], elem)) {
      return false;
    }
  }

  return true;
}

function customFilter(array, callback, elem) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], elem)) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(
  customFilter(
    [5, 12, 8, 130, 44],
    (curr, elem) => {
      return curr > elem;
    },
    15
  )
);

console.log(
  customEvery(
    [5, 12, 8, 130, 44],
    (curr, elem) => {
      return curr > elem;
    },
    4
  )
);

console.log(
  customSome(
    [5, 12, 8, 130, 44],
    (curr, elem) => {
      return curr > elem;
    },
    131
  )
);

console.log(
  customFind(
    [5, 12, 8, 14, 130, 44],
    (curr, elem) => {
      return curr > elem;
    },
    13
  )
);
