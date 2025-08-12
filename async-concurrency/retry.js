async function retry(cb, options) {
  async function startProcess(attempt = 0) {
    let errMsg = "";
    console.log(attempt, errMsg);

    try {
      const response = await cb();
      return response;
    } catch (error) {
      if (attempt >= options.retries) {
        throw error;
      } else {
        attempt++;
        return startProcess(attempt+1);
      }
    }
  }

  return startProcess(0);
}

(async () => {
  let n = 0;
  const flaky = async () => {
    if (n++ < 2) throw new Error("no");
    return "ok";
  };

  // base=10, factor=2; total wait if first 2 fail (no jitter): 10 + 20 = 30ms
  const t0 = Date.now();
  const val = await retry(flaky, {
    retries: 3,
    base: 10,
    factor: 2,
    jitter: false,
  });
  const elapsed = Date.now() - t0;

  console.log(val); // 'ok'
  console.log(elapsed >= 30); // true-ish
})();
