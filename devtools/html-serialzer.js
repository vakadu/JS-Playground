function serializeHTML(element) {
  if (element.nodeType === Node.ELEMENT_NODE) {
    let htmlString = `<${element.tagName.toLowerCase()}`;

    // Add attributes
    for (let attr of element.attributes) {
      htmlString += ` ${attr.name}="${attr.value}"`;
    }

    htmlString += ">";

    // Add children
    for (let child of element.childNodes) {
      htmlString += serializeHTML(child);
    }

    htmlString += `</${element.tagName.toLowerCase()}>`;

    return htmlString;
  } else if (element.nodeType === Node.TEXT_NODE) {
    return element.textContent;
  }
  return "";
}

// Usage example
const htmlString =
  '<div id="container"><p class="text">Hello, <strong>world!</strong></p></div>';
const parser = new DOMParser();
const doc = parser.parseFromString(htmlString, "text/html");
const element = doc.body.firstChild;
const serializedHTML = serializeHTML(element);

console.log(serializedHTML);
