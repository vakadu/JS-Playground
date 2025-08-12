async function promisePool(array, size) {
  if (!Number.isInteger(size) || size < 1) {
    throw new Error("size must be >= 1");
  }

  const tasks = Array.isArray(array) ? array : Array.from(array);
  const output = new Array(tasks.length);

  let inFlight = 0,
    done = 0,
    settled = false,
    next = 0;

  return new Promise((resolve, reject) => {
    function processNext() {
        if (settled) return;

      while (inFlight < size && next < array.length) {
        const i = next++;
        inFlight++;

        (async function () {
          try {
            const task = await array[i]();
            output[i] = task;
            inFlight--;
            done++;

            if (done === array.length) {
              resolve(output);
              settled = true;
            } else {
              processNext();
            }
          } catch (error) {
            settled = true;
            reject(error);
          }
        })();
      }
    }

    processNext();
  });
}

// (async () => {
//   const sleep = (ms, v) => () => new Promise((r) => setTimeout(() => r(v), ms));
//   console.log(
//     await promisePool([sleep(80, "A"), sleep(10, "B"), sleep(40, "C")], 2)
//   ); // ['A','B','C']
// })();

// (async () => {
//   let running = 0,
//     peak = 0;
//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//   const make = (ms) => () => (
//     running++, (peak = Math.max(peak, running)), sleep(ms).then(() => running--)
//   );

//   const tasks = [make(80), make(10), make(40), make(10), make(20)];
//   await promisePool(tasks, 2);
//   console.log(peak); // 2
// })();

(async () => {
  // assume your promisePool is in scope
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const starts = [];
  const mk = (label, ms) => () => {
    starts.push('start:' + label);
    return sleep(ms).then(() => label);
  };

  const res = await promisePool([
    mk('A', 50), // slow
    mk('B', 10),
    mk('C', 10),
    mk('D', 10)
  ], 2);

  console.log(starts.join(',')); // start:A,start:B,start:C,start:D  (FIFO starts)
  console.log(res);              // ['A','B','C','D'] (index order)
})();
