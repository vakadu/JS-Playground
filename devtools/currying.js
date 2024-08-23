const list = [
	{
		id: 1,
		name: 'Steve',
		email: 'steve@example.com',
	},
	{
		id: 2,
		name: 'John',
		email: 'john@example.com',
	},
	{
		id: 3,
		name: 'Pamela',
		email: 'pam@example.com',
	},
	{
		id: 4,
		name: 'Liz',
		email: 'liz@example.com',
	},
];

const noJohn = list.filter((item) => {
	return item.name !== 'John';
});

const filterByName = (list, name) => {
	return list.filter((item) => {
		return item.name !== name;
	});
};

const filtering = (name) => (item) => {
	return item.name !== name;
};

const filteringByName = (list, name) => {
	return list.filter(filtering(name));
};

// console.log(filterByName(list, 'Liz'));
// console.log(filteringByName(list, 'Liz'));

const add = (a, b, c) => {};

const curry = () => {
	return function () {};
};

const curriedAdd = curry(add);
curriedAdd(1, 2, 3, 4, 5);
