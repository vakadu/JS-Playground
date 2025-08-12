function forOwn(obj, iteratee) {

    for (const key in obj) {
        const element = obj[key];
        if(obj.hasOwnProperty(key)) {
iteratee(element, key)
        }
        
    }

    return obj
}

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
