function serializeTree(tree) {
    let html = `<${tree.tag}>`;
    
    if(Array.isArray(tree.children)) {
        tree.children.forEach(element => {
            html += typeof element === "string" ? element : serializeTree(element)
        });
    }

    html += `</${tree.tag}>`;

    return html;
}

const tree = {
  tag: 'html',
  children: [
    {
      tag: 'head',
      children: [
        { tag: 'meta', children: [] },
        { tag: 'title', children: ['Page Title'] },
      ],
    },
    {
      tag: 'body',
      children: [
        { tag: 'header', children: ['Header Content'] },
        {
          tag: 'main',
          children: [
            { tag: 'section', children: ['Section 1 Content'] },
            { tag: 'section', children: ['Section 2 Content'] },
          ],
        },
        { tag: 'footer', children: ['Footer Content'] },
      ],
    },
  ],
};

console.log(serializeTree(tree));


