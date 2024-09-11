function printName(hometown, state) {
  return this.first + " " + this.last + " " + hometown + " " + state;
}

let names = {
  first: "vinod",
  last: "kumar",
};

// let newName = printName.bind(names);
// console.log(newName());

Function.prototype.mybind = function (...args) {
  let obj = this;
  return function (...arg) {
    return obj.call(args[0], args.slice(1), arg);
  };
};

let myName = printName.mybind(names, "test");
console.log(myName("teee"));
