let timeoutIds = [];

function customTimeout(callback, delay) {
	let id = setTimeout(() => {
		callback();
		timeoutIds.push(id);
		return id;
	}, delay);
}

function clearAllTimeout() {
	for (let timeout of timeoutIds) {
		clearTimeout(timeout);
	}
	timeoutIds = [];
}

customTimeout(() => {
	console.log('One');
}, 100);

customTimeout(() => {
	console.log('tne');
}, 200);

clearAllTimeout();
