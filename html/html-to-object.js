function htmlToObject(html) {
    const doc = new DOMParser();
    const parser = doc.parseFromString(html, 'text/html');
    return traverse(parser.body)
}

function traverse(node) {
    if(node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue;
    }

    const result = {
      type: node.nodeName.toLowerCase(),
      props: {},
      children: []
    };

    Array.from(node.attributes).forEach((attr) => {
        result.props[attr.name] = attr.value        
    })

    Array.from(node.childNodes).forEach((item) => {
        result.children.push(traverse(item)) 
    })

    return result
}

let str = `<div class="container"><p>Hello World</p></div>`;
console.log(htmlToObject(str));

