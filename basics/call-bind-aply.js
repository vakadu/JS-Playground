// let s = "bname";
// let a = [1, 2];

// console.log(s, a, s.__proto__, a.__proto__);

let name1 = {
  first: "vinod",
  last: "kumar",
};

let name2 = {
  first: "vakas",
  last: "kumar",
};

let name3 = {
  first: "bind",
  last: "kumar",
};

function printName(args) {
  console.log(args, "args");

  return this.first + " " + this.last;
}

// function borrowing

console.log(printName.call(name1, "tes", "testt"));
console.log(printName.apply(name2, ["tes", "testt"]));

let binded = printName.bind(name3, "test");
console.log(binded());
