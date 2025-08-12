function isArguments(props) {
    console.log(Object.prototype.toString.call(props), typeof props === "");
    
}

console.log(isArguments((function(){ return arguments; })()));
// true  ← actual arguments object from a regular function

console.log(isArguments((() => { /* no arguments object here */ })()));
// false ← arrow functions don't have their own `arguments`

console.log(isArguments((function(){ 'use strict'; return arguments; })()));
// true  ← still the real arguments object (strict mode doesn’t change the type)

console.log(isArguments((function(){ return []; })()));
// false ← an array, not `arguments`

console.log(isArguments((function(){ return {0:'a',1:'b',length:2}; })()));
// false ← array-like object, but not `arguments`

console.log(isArguments((function(){ return (function(...args){ return args; })(); })()));
// false ← rest parameters give you a real Array, not `arguments`
