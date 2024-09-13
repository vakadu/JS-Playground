function cycle(...args) {
  console.log(args);

  let index = 0;
  return function () {
    let current = args[index];
    index = (index + 1) % args.length;
    return current;
  };
}

const helloFn = cycle("hello");
console.log(helloFn());
console.log(helloFn());

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn());
