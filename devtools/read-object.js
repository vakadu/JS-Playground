function readObject(collection, property) {
	return property.split('.').reduce((acc, curr) => {
		if (acc && acc[curr]) {
			return acc[curr];
		} else {
			return undefined;
		}
	}, collection);
}

const collection = {
	a: {
		b: {
			c: {
				d: {
					e: 2,
				},
			},
		},
	},
};
console.log(readObject(collection, 'a.b.d.c.e'));
console.log(readObject(collection, 'a.b.c.d.e'));
console.log(readObject([{ developer: 'Tom' }, [0, null]], '[1][1]'));
