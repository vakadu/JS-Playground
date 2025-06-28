function promiseAll(promises) {
  let output = [], done = 0;
  return new Promise((resolve, reject) => {
    for(let promise of promises) {
        promise.then((res) => {
            output[done] = res;
            done++;
            if(done === promises.length) {
                resolve(output)
            }
        }).catch(reject)
    }
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for(let promise of promises) {
        promise.then((res) => {
             resolve(res)
        }).catch(reject)
    }
  });
}

function promiseSettled(promises) {
    let output = [], done = 0;
  return new Promise((resolve, reject) => {
    for(let promise of promises) {
        promise.then((res) => {
            output[done] = res
        }).catch((err) => {
            output[done] = err
        }).finally(() => {
            if(done === output.length) {
                resolve(output)
            }
        })
    }
  });
}

if (!Promise.any) {
    Promise.any = function(promises) {
        return new Promise((resolve, reject) => {
            let errors = [];
            let rejectedCount = 0;
            const totalPromises = promises.length;

            // Check if the array is empty, and immediately reject
            if (totalPromises === 0) {
                reject(new AggregateError("All promises were rejected", []));
                return;
            }

            // Iterate through the promises
            promises.forEach((promise, index) => {
                promise.then(resolve)
                    .catch((error) => {
                        errors[index] = error; // Save rejection reasons
                        rejectedCount++;

                        // If all promises rejected, reject with AggregateError
                        if (rejectedCount === totalPromises) {
                            reject(new AggregateError(errors, "All promises were rejected"));
                        }
                    });
            });
        });
    };
}


promiseAll([promises("1"), promises("2"), promises("hello")]).then((res) => {
    console.log(res);  
});

promiseRace([promises("10"), promises("21"), promises("hello2")]).then((res) => {
    console.log(res);  
});

promiseSettled([promises("10"), promisesReject("21"), promisesReject("hello2")]).then((res) => {
    console.log(res);  
}).catch((err) => {
     console.log(err);  
});

function promises(msg) {
  return new Promise((resolve) => resolve(msg));
}

function promisesReject(msg) {
  return new Promise((reject) => reject(msg));
}

const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = Promise.resolve('Success');

Promise.any([p1, p2, p3]).then(result => {
  console.log(result);  // Output: 'Success' (the first resolved promise)
}).catch(error => {
  console.log(error);  // In case all promises reject
});

// Edge case: All promises reject
const p4 = Promise.reject('Error 3');
const p5 = Promise.reject('Error 4');
Promise.any([p4, p5]).catch(error => {
  console.log(error);  // Output: AggregateError: All promises were rejected
});

