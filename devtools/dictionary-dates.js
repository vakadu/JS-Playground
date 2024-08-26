const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function dictionary(input) {
	let week = {};

	for (let [key, val] of Object.entries(input)) {
		let day = new Date(key).getDay();
		let weekday = daysOfWeek[day];
		if (week[weekday]) {
			week[weekday] += val;
		} else {
			week[weekday] = val;
		}
	}

	let completeWeek = {};
	for (let i = 0; i < daysOfWeek.length; i++) {
		let day = daysOfWeek[i];
		if (week[day] !== undefined) {
			completeWeek[day] = week[day];
		} else {
			let prevDay = daysOfWeek[i - 1] || daysOfWeek[daysOfWeek.length - 1];
			let nextDay = daysOfWeek[(i + 1) % daysOfWeek.length];

			let prevValue = completeWeek[prevDay] || 0;
			let nextValue = week[nextDay] !== undefined ? week[nextDay] : prevValue;
			completeWeek[day] = (prevValue + nextValue) / 2;
		}
	}

	return completeWeek;
}

const inputDictionary = {
	'2020-01-01': 4,
	'2020-01-02': 4,
	'2020-01-03': 6,
	'2020-01-04': 8,
	'2020-01-05': 2,
	'2020-01-06': -6,
	'2020-01-07': 2,
	'2020-01-08': -2,
};

const inputDictionary2 = {
	'2020-01-01': 6,
	'2020-01-04': 12,
	'2020-01-05': 14,
	'2020-01-06': 2,
	'2020-01-07': 4,
};

console.log(dictionary(inputDictionary2));
