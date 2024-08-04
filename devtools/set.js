function set(obj, path, val) {
	//see if we are getting an object
	if (typeof obj !== 'object') {
		return obj;
	}

	if (!Array.isArray(path)) {
		path = path.replaceAll('[', '.');
		path = path.replaceAll(']', '.');
		path = path.split('.');
	}
	path = path.filter(Boolean);

	path.slice(0, -1).reduce((acc, curr) => {
		if (Object(acc[curr]) !== acc[curr]) {
		}
		return acc[curr];
	}, obj)[path[path.length - 1]] = val;

	console.log(obj);
}

let obj = { cpp: [{ java: { python: 2012 } }] };

// const obj = { a: { b: { c: 3 } } };

console.log(set(obj, 'cpp[0].java.python', 2020));
