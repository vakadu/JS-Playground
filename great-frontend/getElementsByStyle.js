function getElementsByStyle(node, key, value) {
    let result = []
    
    if(node.nodeType === 1) {
        const style = node.getAttribute('style');
        if(style) {
            const styles = style.split(';').map((i) => i.trim()).filter(Boolean);

            for (const s of styles) {
                const [k, val] = s.split(":").map((t) => t.trim());
                if(key === k && val === value) {
                    result.push(node);
                }
            }
        }
        
    }
    
    Array.from(node.childNodes).forEach((elem) => {
        result = result.concat(getElementsByStyle(elem, key, value))       
    })

    return result
}

const doc = new DOMParser().parseFromString(
  `<div>
    <span style="font-size: 12px; color: red">Span</span>
    <p style="font-size: 12px">Paragraph</p>
    <blockquote style="font-size: 14px">Blockquote</blockquote>
  </div>`,
  'text/html',
);

console.log(
 getElementsByStyle(doc.body, 'font-size', '12px'));
// [span, p] <-- This is an array of elements.
