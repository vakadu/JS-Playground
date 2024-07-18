function camelCases(collection) {
	//object
	const isObject = typeof collection === 'object';

	if (!isObject) {
		return collection;
	}

	const keyValues = Object.entries(collection);

	const convertedCollection = keyValues.map(([key, value]) => {
		return [camelCase(key), typeof value === 'object' ? camelCases(value) : value];
	});

	return Object.fromEntries(convertedCollection);
}

function camelCase(str) {
	let parsedString = str.toLowerCase();

	return parsedString
		.replace(/(?<=[^a-zA-Z])([a-z]+)/g, (match, p0) => {
			return capitalize(p0);
		})
		.replace(/[^a-zA-Z0-9]/g, '');
}

function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

console.log(camelCases({ total_questions: 200, total_users: 10000 }));
console.log(
	camelCases({
		total_questions: 200,
		social_handles: { youtube_channel: 'youtube.com/devtoolstech' },
	})
);
