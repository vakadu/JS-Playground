function customPromiseAll(promises) {
    let result = [], done=0;    
    return new Promise((resolve, reject) => {
        for(let promise of promises) {
            promise.then((p) => {
                done++;
                result.push(p);
                
                if(done === promises.length) {
                    resolve(result)
                }
            })
            .catch((err) => {
                reject(err);
            });
        }
    })
}

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(4);
const promise3 = Promise.resolve(5);

customPromiseAll([promise1, promise2, promise3])
  .then((values) => console.log(values)); // Output: [3, 4, 5]

