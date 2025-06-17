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
