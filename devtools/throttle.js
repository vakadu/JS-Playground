import { throttle } from 'lodash';

let normalCount = 0,
	throttleCount = 0;

const buttonId = document.getElementById('throttle');
buttonId.addEventListener('click', () => {
	normalCount++;
	console.log(normalCount, 'normal');

	// throttledCount();
});

const throtle = (cb, delay) => {
	let timer;

	return function () {
		if (timer) clearInterval(timer);
		timer = setInterval(() => {
			cb();
		}, delay);
	};
};

const throttledCount = throtle(() => {
	throttleCount++;
	console.log(throttleCount, 'throttle');
}, 800);
