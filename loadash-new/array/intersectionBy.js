function intersectionBy(...arrays) {
  const cb = arrays.pop();
  const transformer = typeof cb === "function" ? cb : (obj) => obj[cb];
  let result = [];
  const [first, ...rest] = arrays;

  for (const element of first) {
    const temp = transformer(element);

    if (
      rest.every((item) => item.some((x) => transformer(x) === temp)) &&
      !result.includes(temp)
    ) {
      result.push(element);
    }
  }

  return result;
}

console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [2.1]
console.log(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")); // => [{ x: 1 }]
