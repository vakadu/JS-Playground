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

// var x = 10;
// a();
// b();

// console.log(x);

// function a() {
//   x = 100;
//   console.log(x);
// }

// function b() {
//   x = 200;
//   console.log(x);
// }

// getData1();
// getData2();

// function getData1() {
//   console.log("getData1");
// }

// var getData2 = function () {
//   console.log("getData2");
// };

// let c = 0;

// let id = setInterval(() => {
//   console.log(c++);
// }, 10);

// setTimeout(() => {
//   clearInterval(id);
// }, 200);

function a() {
  var a = 1;
  function data() {
    if (a) {
      var a = 10;
    }
    console.log(a);
  }
  data();
}

let b = a;
b();

console.log(a);
