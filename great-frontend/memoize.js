function memoize(fn) {
    let memo = {};
    return function(...args) {
        const key = JSON.stringify(args);
        
        if(key in memo) {
            return memo[key]
        }

        memo[key] = fn.apply(this, args);
        return memo[key]
    }
}

function expensiveFunction(n) {
  console.log('Computing...');
  return n * 2;
}

const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveFunction(5)); // Output: 10
