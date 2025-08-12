function pLimit(size) {
    const active = 0;

    return function(fn, ...args) {
        return new Promise((resolve, reject) => {
            
        })
    }
}

// 3.1 Basic usage
(async () => {
  const limit = pLimit(2);
  const run = (i) => limit(async (v) => v, i);
  console.log(await Promise.all([run(1), run(2), run(3), run(4)])); // [1,2,3,4]
})();

// 3.2 Concurrency cap (peak must be 3)
// (async () => {
//   const sleep = (ms) => new Promise(r => setTimeout(r, ms));
//   const limit = pLimit(3);
//   let running = 0, peak = 0;

//   const job = (i) => limit(async () => {
//     running++; peak = Math.max(peak, running);
//     await sleep(20);
//     running--;
//     return i;
//   });

//   await Promise.all(Array.from({length:10}, (_,i)=>job(i)));
//   console.log(peak); // 3
// })();

// // 3.3 FIFO fairness (start order must be A,B,C)
// (async () => {
//   const sleep = (ms) => new Promise(r => setTimeout(r, ms));
//   const order = [];
//   const limit = pLimit(1);

//   const job = (label, ms) => limit(async () => {
//     order.push('start:'+label);
//     await sleep(ms);
//     order.push('end:'+label);
//     return label;
//   });

//   await Promise.all([job('A', 5), job('B', 5), job('C', 5)]);
//   console.log(order.join(',')); // start:A,end:A,start:B,end:B,start:C,end:C
// })();

// // 3.4 Sync + error
// (async () => {
//   const limit = pLimit(2);

//   try {
//     await Promise.all([
//       limit((x) => x*2, 3),          // resolves 6
//       limit(() => { throw new Error('boom'); }),
//     ]);
//   } catch (e) {
//     console.log(/boom/.test(e.message)); // true
//   }

//   // limiter still usable after an error
//   console.log(await limit((x)=>x+1, 4)); // 5
// })();
