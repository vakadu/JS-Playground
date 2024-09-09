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
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 0; i < 5; i++) {
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

function calculate(type) {
  return function a(x) {
    return function b(y) {
      if (type === "+") {
        return x + y;
      } else {
        return x * y;
      }
    };
  };
}
console.log(calculate("+")(1)(2)); // 3
calculate("*")(2)(3);
