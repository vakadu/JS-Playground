function memoize(cb) {
    let cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache) {
            return cache[key]
        }

        const result = cb(...args);
        cache[key] = result;
        return result
    }
}

function slowFunction(n) {
  console.log("Calculating...");
  return n * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));  // Calculating... 10
console.log(memoizedFunction(5));  // 10 (cached result)
