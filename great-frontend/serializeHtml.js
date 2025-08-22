function serializeHTML(element) {

    let html = `<${element.tag}> \n`;    

    if(Array.isArray(element.children)) {
        element.children.forEach(elem => {
            html += typeof elem === "string" ? elem : serializeHTML(elem)
        });
    }

    html += `</${element.tag}>`

  return html;
}

const tree = {
  tag: "body",
  children: [
    { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
    { tag: "div", children: ["baz"] },
  ],
};

console.log(serializeHTML(tree, ""));
// Output:
// `<body>
//   <div>
//     <span>
//       foo
//       bar
//     </span>
//   </div>
//   <div>
//     baz
//   </div>
// </body>`;
