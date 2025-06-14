// function classNames(...args) {
// 	return args.reduce((acc, curr) => {
// 		if (!curr) return acc;

// 		if (Array.isArray(curr)) {
// 			return acc.concat(classNames(...curr));
// 		}

// 		if (typeof curr === 'object') {
// 			for (let key in curr) {
// 				if (curr[key]) {
// 					acc += ' ' + obj;
// 				}
// 			}
// 			return acc;
// 		}
// 		return acc + ' ' + curr;
// 	}, '');
// }


function classNames(...args) {	
	let final = [];

	const walk = (arg) => {		
		if(!arg) {
			return
		}

		if(typeof arg === 'string' || typeof arg === 'number') {
			final.push(arg)
		}

		if(Array.isArray(arg)) {
			for(let key of arg) {
				walk(key)
			}
		}

		if(typeof arg === 'object') {
			for(let key in arg) {
				if(arg[key] === true) {
					final.push(key)
				}
			}			
		}	
	}

	for(let arg of args) {	
		walk(arg)
	}

	return final.join(' ');
}

console.log(classNames('foo', 'bar')); // => 'foo bar'
console.log(classNames('foo', { bar: true })); // => 'foo bar'
console.log(classNames({ 'foo-bar': true })); // => 'foo-bar'
console.log(classNames({ 'foo-bar': false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
console.log(classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })); // => 'foo bar baz quux'
console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // => 'bar 1'

// // Arrays are recursively flattened
var arr = ['b', { c: true, d: false }];
console.log(classNames('a', arr)); // => 'a b c'
