let normalCount = 0,
  throttleCount = 0;

const buttonId = document.getElementById("throttle");
buttonId.addEventListener("click", () => {
  normalCount++;
  console.log(normalCount, "normal");

  throttledCount();
});

const throtle = (cb, delay) => {
  let lastCall = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - lastCall >= delay) {
      cb(...args);
      lastCall = now;
    }
  };
};

const throttledCount = throtle(() => {
  throttleCount++;
  console.log(throttleCount, "throttle");
}, 800);
