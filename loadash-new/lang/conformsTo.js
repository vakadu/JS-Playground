function conformsTo(obj, defaults) {
    for (const key in defaults) {
        const cb = defaults[key];
        const elem = obj[key];

        if(!cb(elem)) {
            return false
        }
    }

    return true
}

// const obj = { a: 1, b: 2, c: 3 };

// const result = conformsTo(obj, {
//   a: (value) => value > 0,
//   b: (value) => value < 3,
//   c: (value) => value === 3
// });

// console.log(result); // Expected: true

// const obj = { a: 1, b: 2, c: 4 };

// const result = conformsTo(obj, {
//   a: (value) => value > 0,
//   b: (value) => value < 3,
//   c: (value) => value === 3
// });

// console.log(result); // Expected: false

const obj = { a: { x: 1, y: 2 }, b: 5 };

const result = conformsTo(obj, {
  a: (value) => value.x > 0 && value.y < 3,
  b: (value) => value > 3
});

console.log(result); // Expected: true
