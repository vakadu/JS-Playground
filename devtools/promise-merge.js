function findType(value) {
  if (Array.isArray(value)) {
    return "array";
  } else {
    const type = typeof value;
    return ["number", "string", "boolean"].includes(type) ? type : "invalid";
  }
}

function promiseMerge(...promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return reject(new TypeError("invalid arguments"));
    }

    Promise.all(promises)
      .then((res) => {
        let result;
        const type = findType(res[0]);

        for (i = 1; i < res.length; i++) {
          const currType = findType(res[i]);

          if (type !== currType) {
            return reject(new TypeError("invalid"));
          }
        }

        if (type === "number" || type === "string") {
          result = res.reduce(
            (acc, curr) => {
              acc += curr;
              return acc;
            },
            type === "string" ? "" : 0
          );
        } else if (type === "array") {
          result = res.reduce((acc, curr) => {
            console.log(acc, curr);
            return [...acc, ...curr];
          }, []);
        } else if (type === "boolean") {
          result = res.reduce((acc, curr) => {
            return curr && acc;
          }, false);
        } else {
          return reject(new TypeError("invalid"));
        }

        return resolve(result);
      })
      .catch(reject);
  });
}

// promiseMerge(Promise.resolve(1), Promise.resolve(2))
// 	.then((result) => console.log(result))
// 	.catch((error) => console.error(error));
// promiseMerge(Promise.resolve('devtools'), Promise.resolve('.tech'))
// 	.then((result) => console.log(result))
// 	.catch((error) => console.error(error));

// promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6]), Promise.resolve([7, 8, 9]))
// .then((result) => console.log(result))
// .catch((error) => console.error(error));

// promiseMerge(Promise.resolve(true), Promise.resolve(false))
// 	.then((result) => console.log(result))
// 	.catch((error) => console.error(error));

promiseMerge(Promise.resolve("devtools"), Promise.resolve([1, 2]))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
