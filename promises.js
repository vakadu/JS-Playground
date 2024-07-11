function promiseAll(allPromises) {
	let outputs = [],
		donePromise = 0;

	return new Promise((resolve, reject) => {
		//need i that why using foreach
		allPromises.forEach((promise, i) => {
			promise
				.then((value) => {
					outputs[i] = value;
					donePromise++;
					if (donePromise === allPromises.length) {
						resolve(outputs);
					}
				})
				.catch(reject);
		});
	});
}

const slowPromise = new Promise((res) => {
	setTimeout(() => res('100'), 100);
});

const promises = [slowPromise, Promise.resolve('2'), Promise.resolve('3')];
// Promise.reject('4')

promiseAll(promises)
	.then((val) => console.log(val))
	.catch((err) => console.log(err, 'rejeted'));

console.log('/////////////////////////');
let testpromise = new Promise((resolve, reject) => {
	resolve('resolved');
	reject('rejected');
});

testpromise
	.then((val) => {
		console.log(val);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		console.log('all settled');
	});
