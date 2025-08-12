function forIn(object, iteratee) {
    for (const key in object) {
        const element = object[key];
        iteratee(element, key)
    }
    return object
}

// Example from Lodash docs
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;

forIn(new Foo(), function(value, key) {
  console.log(key);
});
// Typically logs: 'a', 'b', then 'c'  (order of enumeration is not guaranteed by spec)
