function race(arr) {
	return new Promise((resolve, reject) => {
		for (let promise of arr) {
			promise
				.then((p) => {
					resolve(p);
				})
				.catch(reject);
		}
	});
}

const promise1 = new Promise((resolve, reject) => {
	setTimeout(reject, 100, 'one');
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'two');
});

race([promise1, promise2]).then((value) => {
	console.log(value);
});
