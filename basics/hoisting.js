// console.log(x);
// console.log(getName());

// var x = 7;

// var getName = () => {
//   console.log("name");
// };

// console.log(x);
// console.log(getName());

// var a = 5;

// (function () {
//   console.log(a);

//   var a = 10;
// })();

//undefined
//functins are called immediately and undefined is set for a

// function test() {
//   console.log(a);

//   var a = 10;

//   console.log(a);
// }

// test();

// undefined
// 10

// console.log(bar); // undefined
// bar(); // Uncaught TypeError: bar is not a function

// var bar = function () {
//   console.log("BARRRR");
// };

//bar is varaible here it will be treated as varaible

// var name = "Lokesh Prajapati";
// (function () {
//   console.log(name);
//   var name = "Lokesh Prajapati";
// })();

// var x = 1;
// if (function test() {}) {
//   x += typeof test;
// }

// console.log(x);

var x = 10;
a();
b();

console.log(x);

function a() {
  x = 100;
  console.log(x);
}

function b() {
  x = 200;
  console.log(x);
}
