function serialize(tree) {
  let html = `<${tree.tag}`;

  if (tree?.attributes && Object.keys(tree?.attributes).length > 0) {
    let temp = "";
    for (const key in tree.attributes) {
      temp += ` ${key}="${tree.attributes[key]}"`;
    }
    html += `${temp}`;
  }
    const selfClosingTags = ['img', 'br', 'input', 'meta', 'link', 'hr'];

  if (selfClosingTags.includes(tree.tag)) {
    html += ' />';
    return html;
  }

  html += ">";

  if(Array.isArray(tree.children)) {
    tree.children.forEach(element => {
        html += typeof element === "string" ? element : serialize(element)
    });
  }

  html += `</${tree.tag}>`;

  return html;
}

const tree = {
  tag: "div",
  attributes: {
    id: "main-container",
    class: "container",
  },
  children: [
    {
      tag: "img",
      attributes: {
        src: "image.jpg",
        alt: "An image",
      },
      children: [],
    },
    { tag: "p", children: ["This is a paragraph"] },
  ],
};

console.log(serialize(tree));
