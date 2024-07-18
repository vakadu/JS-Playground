const idHelper = (nodes, id) => {
	for (node of nodes) {
		if (node.children.length > 0) {
			const result = idHelper(node.children, id);
			if (result) {
				return result;
			}
		} else {
			if (node.id === id) {
				return node;
			}
		}
	}
	return null;
};

const getElementById = (id) => {
	const children = document.body.children;
	const result = idHelper(children, id);
	if (result) {
		return result;
	} else {
		return 'no node found';
	}
};

const tagHelper = (nodes, tag) => {
	let result = [];
	for (node of nodes) {
		if (node.tagName === tag) {
			result.push(node);
		}
		if (node.children.length > 0) {
			result = result.concat(tagHelper(node.children, tag));
		}
	}

	return result;
};

const getElementsByTagname = (tag) => {
	const children = document.body.children;
	return tagHelper(children, tag);
};

console.log(getElementsByTagname('H1'));
console.log(getElementsByTagname('UL'));

// console.log(getElementById('doms'));
// console.log(getElementById('dup'));
