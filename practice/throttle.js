function throttle(cb, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastCall >= delay) {
      cb(...args);
      lastCall = now;
    }
  };
}
