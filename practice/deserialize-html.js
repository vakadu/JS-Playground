function deserialize(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html')
    const firstChild = doc.body.firstElementChild;
    return domNode(firstChild);    
}

function domNode(node) {
    if(node.nodeType === Node.TEXT_NODE) {

    } 
    
    const tag = node.tagName.toLowerCase();

    for(let child of node.childNodes) {
        if(child.nodeType === Node.TEXT_NODE) {}

        
    }
    
}

console.log(deserialize('<div class="container"><h1>Hello</h1><p>World</p></div>'));

