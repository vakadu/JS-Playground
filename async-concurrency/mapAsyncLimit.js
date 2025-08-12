async function mapAsyncLimit(iteratee, cb, size) {
  let items = Array.isArray(iteratee) ? iteratee : Array.from(iteratee);

  if (size < 1) {
    throw new Error("Size should be greater than 1");
  }

  const results = new Array(items.length);
  let next = 0,
    inFlight = 0,
    done = 0,
    settled = false;

  return new Promise((resolve, reject) => {
    function startNext() {
      while (inFlight < size && next < items.length) {
        const i = next++;
        inFlight++;

        (async () => {
          try {
            const val = await cb(items[i]);
            results[i] = val;
            inFlight--;
            done++;

            if (done === items.length) {
              settled = true;
              resolve(results);
              return;
            } else {
              startNext();
            }
          } catch (error) {
            if(!settled) {
                settled = true;
                reject(error)
            }
          }
        })();
      }
    }
    startNext();
  });
}

(async () => {
  const sleep = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));
  const fn = async (x) => sleep(50 - x * 10, x * 2);
  console.log(await mapAsyncLimit([1, 2, 3, 4], fn, 2)); // [2,4,6,8]
})();
