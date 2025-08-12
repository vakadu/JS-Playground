function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      let settled = false;

      // 1) define the node-style callback
      function callback(err, value /*, ...rest */) {
        if (settled) return;           // settle once
        settled = true;
        if (err) return reject(err);
        // 2) For now, resolve just the first success value
        resolve(value);
      }

      // 3) call fn with original args + callback
      try {
        fn.call(this, ...args, callback);
      } catch (e) {
        // sync throw should reject
        if (!settled) {
          settled = true;
          reject(e);
        }
      }
    });
  };
}


(async () => {
  function getUser(id, cb) {
    console.log(cb, id);
    
    setTimeout(() => cb(null, { id, name: 'Ada' }), 10);
  }

  const pGetUser = promisify(getUser);
  const u = await pGetUser(7);
  console.log(u.id, u.name); // 7 'Ada'
})();
