function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		let j = Math.floor(Math.random() * i + 1);
		console.log(j);

		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	console.log(arr);
}

console.log(shuffle([1, 2, 3, 4]));
