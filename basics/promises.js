// function debounce(callback, delay) {
//   let timer;
//   console.log(timer + "first");

//   return function () {
//     console.log(timer, "fi");
//     if (timer) {
//       console.log("inside clear");
//       clearTimeout(timer, "in");
//     }
//     console.log(timer, "af");

//     timer = setTimeout(() => {
//       console.log("unary");

//       callback();
//     }, delay);
//   };
// }

// function logging() {
//   console.log("logged");
// }

// function sleep() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("resolved");
//     }, 400);
//   });
// }

// function handleAsyc() {
//   sleep()
//     .then((d) => {
//       console.log(d);
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// }

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: "Order Created", id: 1 });
    }, 300);
  });
}

function proceedPayment(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ msg: "proceed payment", id: 2 });
      } else {
        reject("no order id");
      }
    }, 300);
  });
}

function orderStatus(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ msg: "order successfull" });
      } else {
        reject("order failed");
      }
    }, 300);
  });
}

function updateBalance(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ msg: "balance updated" });
      } else {
        reject("could not update balance");
      }
    }, 300);
  });
}

async function proceedOrder() {
  //   try {
  //     const order = await createOrder();
  //     console.log(order);
  //     const payment = await proceedPayment(order.id);
  //     console.log(payment);
  //     const status = await orderStatus(payment.id);
  //     console.log(status);
  //     const balance = await updateBalance(status.id);
  //     console.log(balance);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   createOrder()
  //     .then((a) => {
  //       console.log(a);
  //       proceedPayment(a.id).then((b) => {
  //         console.log(b);
  //         orderStatus(b.id).then((c) => {
  //           console.log(c);
  //           updateBalance(c.id).then((d) => {
  //             console.log(d);
  //           });
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}

// let id = document.getElementById("debounce");
// id.addEventListener("click", proceedOrder);

// function init() {
//   console.log("start");

//   const result = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("333");
//     }, 400);
//   });

//   console.log(result);
//   console.log("ends");
// }

// init();
