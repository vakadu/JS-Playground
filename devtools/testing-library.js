function customExpect(actual) {
	return {
		toBe: (expected) => {
			if (actual !== expected) {
				throw new Error('not valid1');
			}
		},
		not: {
			toBe: (expected) => {
				if (actual === expected) {
					throw new Error('not valid');
				}
			},
		},
	};
}

customExpect(3).toBe(3); // no error | Do not return anything
customExpect(2).toBe(3); // should throw an error

customExpect(2).not.toBe(3); // no error | Do not return anything
customExpect(2).not.toBe(2); // should throw an error
