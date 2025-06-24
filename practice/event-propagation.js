// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener("click", () => {
//   console.log("Parent - Bubble");
// });

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent - Capture");
//   },
//   true
// ); // capture

// child.addEventListener("click", (e) => {
//   console.log("Child - Bubble");
//   e.stopPropagation();
// });

// child.addEventListener(
//   "click",
//   () => {
//     console.log("Child - Capture");
//   },
//   true
// );




// grandparent.addEventListener("click", () => {
//   console.log("Grandparent - Capture");
// }, true);

// parent.addEventListener("click", () => {
//   console.log("Parent - Capture");
// }, true);

// child.addEventListener("click", () => {
//   console.log("Child - Capture");
// }, true);

// child.addEventListener("click", (e) => {
//   console.log("Child - Bubble");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent - Bubble");
// });

// grandparent.addEventListener("click", () => {
//   console.log("Grandparent - Bubble");
// });

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
// });


// Grandparent - Capture
// Parent - Capture
// Child - Capture
// "Child - Bubble"




const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer - Bubble");
});

middle.addEventListener("click", () => {
  console.log("Middle - Bubble");
});

inner.addEventListener(
  "click",
  (e) => {
    console.log("Inner - Capture");
  },
  true
);

inner.addEventListener("click", (e) => {
  console.log("Inner - Bubble");
  e.stopImmediatePropagation();
});

inner.addEventListener("click", () => {
  console.log("Inner - Second Bubble");
});

// Inner - Capture
// "Inner - Bubble"
// Middle - Bubble
// Outer - Bubble
