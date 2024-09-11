// function cancelInterval(callback, delay) {
//   let timer = setInterval(callback, delay);

//   return function () {
//     clearInterval(timer);
//   };
// }

// let interval = cancelInterval(() => {
//   console.log("running"), 300;
// });

// setTimeout(() => {
//   interval();
// }, 400);

function cancelTimeout(callback, delay) {
  let timer = setTimeout(callback, delay);
  return function () {
    clearTimeout(timer);
  };
}

let interval = cancelTimeout(() => {
  console.log("stated");
}, 300);

setTimeout(() => {
  interval();
  console.log("Timeout canceled.");
}, 150);
