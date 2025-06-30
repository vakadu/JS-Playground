// function add(a) {
//     return function(b) {
//         return a+b
//     }
// }

// const addNumber = add(2);
// console.log(addNumber(3));


function multiply(a) {
    return function(b) {
        return function (c) {            
            return a*b*c
        }
    }   
}

const multiplyed = multiply(2)(3)(4)
// console.log(multiplyed);


function curry(fn) {
    return function currying(...args) {
        if(args.length === fn.length) {
            return fn(...args)
        } else {
            return function(...next) {
                return currying(...args, ...next)
            }
        }
    }
}

function add(a,b,c) {
    return a+b+c
}

const curried = curry(add);
console.log(curried(1)(2)(3));
