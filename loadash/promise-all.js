function customPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise
        .then((res) => {
          result.push(res);

          if (result.length === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

customPromiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
  .then((result) => console.log(result)) // [1, 2, 3]
  .catch((error) => console.log(error));
