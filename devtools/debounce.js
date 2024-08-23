let normalCount = 0,
	debounceCount = 0;

const buttonId = document.getElementById('debounce');
buttonId.addEventListener('click', () => {
	normalCount++;
	console.log(normalCount, 'normal');

	debouncedCount();
});

const debounce = (cb, delay) => {
	let timer;

	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			cb();
		}, delay);
	};
};

const debouncedCount = debounce(() => {
	debounceCount++;
	console.log(debounceCount, 'debounce');
}, 800);
