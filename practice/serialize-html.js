function serialize(nodes) {
  const { tag, props, children } = nodes;
  let html = "";
  let attrs = "";
  for (let attr in props) {
    attrs += ` ${attr}=${props[attr]}`;
  }
  html += `<${tag}${attrs}>`;

  for (let child of children) {
    if (typeof child === "string") {
      html += child;
    } else {
      html += serialize(child);
    }
  }

  html += `</${tag}>`;

  return html;
}

const dom = {
  tag: "div",
  props: { class: "container" },
  children: [
    { tag: "h1", props: {}, children: ["Hello"] },
    { tag: "p", props: {}, children: ["World"] },
  ],
};

console.log(serialize(dom));
