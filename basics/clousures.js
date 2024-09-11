// function a() {
//   let a = 7;

//   function b() {
//     console.log(a);
//   }
//   return b;
// }

// let z = a();
// z();

// (function () {
//   var a = (b = 5);
// })();
// console.log(b);

// for (var i = 0; i < 5; i++) {
//   //settimeout is forming a clousure and its remembers its reference to i not value i
//   //so value is pronted 5 always
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 0; i < 5; i++) {
//   // let is block scoped reference of i different each time
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// function calculate(type) {
//   return function a(x) {
//     return function b(y) {
//       if (type === "+") {
//         return x + y;
//       } else {
//         return x * y;
//       }
//     };
//   };
// }
// console.log(calculate("+")(1)(2)); // 3
// calculate("*")(2)(3);

var i = 100;

function a() {
  var i = 10;
  return function () {
    console.log(i);
  };
}

a()();
