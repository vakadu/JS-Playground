function serializeTree(tree) {
     if (!tree || !tree.tag) return '';

   let html = `<${tree.tag}>`;

    if(Array.isArray(tree.children)) {
        tree.children.forEach(element => {
            html += typeof element === "string" ? element : serializeTree(element)
        });
    }

    html += `</${tree.tag}>`;

    

    return html
}

const tree = {
  tag: 'body',
  children: [
    { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
    { tag: 'div', children: ['baz'] },
  ],
};

console.log(serializeTree(tree));

