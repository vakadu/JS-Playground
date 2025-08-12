async function mapAsyncLimitUnordered(arr, cb, size) {
  let index = 0,
    inFlight = 0,
    done = 0,
    settled = false, results = [];

  return new Promise((resolve, reject) => {
    if(settled) {
        return
    }
    
    function startProcess() {
      while (inFlight < size && index < arr.length) {
        let i = index++;
        inFlight++;

        (async () => {
          try {
            const temp = await cb(arr[i]);
            results.push(temp);
            inFlight--;
            done++;

            if(done === arr.length) {
                resolve(results);
                settled = true
            } else {
                startProcess()
            }
          } catch (error) {
            settled = true
            reject(error);
          }
        })();
      }
    }

    startProcess();
  });
}

// 2.1 basic: emits as ready
// (async () => {
//   const fn = (x) => new Promise(r => setTimeout(() => r(x), 100 / x));
//   console.log(await mapAsyncLimitUnordered([1,2,5], fn, 2)); // e.g. [2,5,1]
// })();

// 2.2 concurrency check (peak should be 3)
(async () => {
  let running = 0, peak = 0;
  const fn = async (x) => {
    running++; peak = Math.max(peak, running);
    const v = await new Promise(r => setTimeout(() => r(x), 20));
    running--;
    return v;
  };
  await mapAsyncLimitUnordered([1,2,3,4,5,6,7], fn, 3);
  console.log(peak); // 3
})();

// 2.3 reject on first error
// (async () => {
//   const fn = async (x) => {
//     if (x === 'boom') throw new Error('boom');
//     return new Promise(r => setTimeout(() => r(x), 10));
//   };
//   try {
//     await mapAsyncLimitUnordered(['a','boom','c','d'], fn, 2);
//   } catch (e) {
//     console.log(/boom/.test(e.message)); // true
//   }
// })();
