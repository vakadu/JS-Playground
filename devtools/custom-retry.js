function retry(callback, tries) {
	return new Promise((resolve, reject) => {
		let tried = 0;

		const caller = () =>
			callback()
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					if (tried < tries) {
						tried++;
						caller();
					} else {
						reject(err);
					}
				});
		tried = 1;
		caller();
	});
}

const fetchProfile = async () => {
	const resp = await fetch('https://fakestoreapi.com/products/1');
	const rawResp = await resp.json();
	return rawResp;
};

(async () => {
	try {
		const result = await retry(fetchProfile, 3);
		console.log(result);

		return result;
	} catch (error) {}
})();
