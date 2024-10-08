function all(promises) {
  let output = [],
    done = 0;
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      promise
        .then((p) => {
          output[done] = p;
          done++;

          if (done === promises.length) {
            resolve(output);
          }
        })
        .catch(reject);
    }
  });
}

function init() {
  return Promise.resolve(1);
}

const promises = [init(), init(), init()];

all(promises).then((values) => {
  // [1, 1, 1]
  console.log(values);
});
let promise = new Promise((resolve, reject) => {
  //   resolve("succcesss");
  reject("errro");
});

promise
  .then((res) => {
    return res;
  })
  .then((ress) => {
    console.log(ress);
  })
  .catch((err) => {
    throw new Error(err);
  });
