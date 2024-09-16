function stringToObject(i1, i2) {
  const keys = i1.split(".");
  let result = {},
    current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      current[key] = i2;
    } else {
      current[key] = current[key] || {};
      current = current[key];
    }
  }

  return result;
}

console.log(stringToObject("a.b.c", "final"));
