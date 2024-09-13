const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandChild = document.getElementById("grand-child");

parent.addEventListener("click", (e) => {
  const text = e.target;
  console.log(text.getAttribute("data-id"));
});
// child.addEventListener(
//   "click",
//   () => {
//     alert("child");
//   },
//   true
// );
// grandChild.addEventListener(
//   "click",
//   (e) => {
//     alert("gra");
//   },
//   true
// );
