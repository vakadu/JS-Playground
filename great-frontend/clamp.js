function clamp(level, lower, upper) {
  if (level < lower) {
    return lower;
  } else if (level > upper) {
    return upper;
  } else {
    return level;
  }
}

console.log(clamp(-10, -5, 5));
console.log(clamp(10, -5, 5));
console.log(clamp(8, -5, 10));
