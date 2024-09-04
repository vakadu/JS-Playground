function htmlToObject(element) {
	if (element.nodeType === Node.TEXT_NODE) {
		return element.textContent.trim();
	}

	let obj = {
		tag: element.tagName.toLowerCase(),
		attributes: {},
		children: [],
	};

	for (let attr of element.attributes) {
		obj.attributes[attr.name] = attr.value;
	}

	console.log(element.attributes, element.childNodes);

	for (let child of element.childNodes) {
		const childObj = htmlToObject(child);
		if (childObj) {
			obj.children.push(childObj);
		}
	}

	return obj;
}

const htmlString = `<div id="container"><p class="text">Hello, <strong>world!</strong></p></div>`;
const parser = new DOMParser();
const doc = parser.parseFromString(htmlString, 'text/html');
const element = doc.body.firstChild;
const object = htmlToObject(element);

console.log(object);
