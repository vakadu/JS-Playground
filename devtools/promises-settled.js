function promiseSettled(...promises) {
  let count = 0;
  let output = [];

  return new Promise((resolve) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          output[i] = { status: "fulfilled", value: result };
        })
        .catch((error) => {
          output[i] = { status: "rejected", reason: error };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(output); // Return the full output array when all promises are settled
          }
        });
    }
  });
}

// Test example
let promise1 = new Promise((res) => {
  res("1");
});
let promise2 = new Promise((res, rej) => {
  rej("12");
});

promiseSettled(promise1, promise2).then(console.log);
