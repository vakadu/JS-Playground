function add(x) {
  return x + 1;
}

function multiply(x) {
  return x * 2;
}

function compose(...args) {
    return function(initialVal) {
        // let result = initialVal;
        // for (let index = args.length-1; index >=0; index--) {
        //     const element = args[index];
        //     result = element(result)
        // }
        // return result

        return args.reverse().reduce((acc, curr) => curr(acc), initialVal)
    }
}

const composedFunction = compose(multiply, add);

console.log(composedFunction(3)); // Should log 8 because: multiply(add(3)) => multiply(4) => 8
