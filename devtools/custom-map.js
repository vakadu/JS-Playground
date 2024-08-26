function getUserById(id, callback) {
	// simulating async request
	const randomRequestTime = Math.floor(Math.random() * 100) + 200;

	setTimeout(() => {
		callback('User' + id);
	}, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {}

mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
	console.log('output:', allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
