// Returns a new function that will only run func after it has been called n times.

// Before that, it does nothing.

function after(n, func) {
  let activeCount = 0;
  return function (...args) {    
    activeCount++;
    if (activeCount >= n) {
      return func.apply(this, args);
    }
  };
}

const obj = {
  name: "Vinod",
  sayName: after(2, function (greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }),
};

obj.sayName("Hi"); // nothing
obj.sayName("Hello"); // "Hello, my name is Vinod"
obj.sayName("Hey"); // "Hey, my name is Vinod"


// const save = after(3, () => console.log("Saved!"));

// console.log(save()); // undefined
// console.log(save()); // undefined
// console.log(save()); // Saved! + undefined
// console.log(save()); // Saved! + undefined
