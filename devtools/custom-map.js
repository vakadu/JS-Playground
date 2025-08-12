function getUserById(id, callback) {
	// simulating async request
	const randomRequestTime = Math.floor(Math.random() * 100) + 200;

	setTimeout(() => {
		callback('User' + id);
	}, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
	let i = 0,
		activeCount = 0,
		results = [];

	function processNext() {
		while (i < inputs.length && activeCount < limit) {
			const index = i++;
			activeCount++;

			iterateeFn(inputs[index], (result) => {
				results.push(result);
				activeCount--;

				if (i >= inputs.length && activeCount === 0) {
					callback(results);
				} else {
					processNext();
				}
			});
		}
	}

	processNext();
}




mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
	console.log('output:', allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
