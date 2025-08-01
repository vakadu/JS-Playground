function isEqual(o1, o2) {
    
    if(o1 === o2) {
        return true
    }

    if(Array.isArray(o1) && Array.isArray(o2)) {
        if(o1.length !== o2.length) {
            return false
        }

        for (let index = 0; index < o1.length; index++) {
            const element1 = o1[index];
            const element2 = o2[index];

            if(!isEqual(element1, element2)) {
                return false
            }
        }

        return true
    }

    if(o1 instanceof Date && o2 instanceof Date) {
        if(!isEqual(o1.getTime(), o2.getTime())) {
            return false
        }
        return true
    }

    if(typeof o1 === 'object' && typeof o2 === "object") {

        if(Object.keys(o1).length !== Object.keys(o2).length) {
            return false
        }

        for (const key in o1) {
            if(!isEqual(o1[key], o2[key])) {
                return false
            }
        }

        return true
    }

    return false
}

// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 2 } };

// console.log(isEqual(obj1, obj2)); // Expected: true

// const obj3 = { a: 1, b: { c: 3 } };
// console.log(isEqual(obj1, obj3)); // Expected: false

// const a = 5;
// const b = 5;
// console.log(isEqual(a, b)); // Expected: true

// const a1 = 5;
// const b1 = 6;
// console.log(isEqual(a1, b1)); // Expected: false

// const obj1 = {};
// const obj2 = {};
// console.log(isEqual(obj1, obj2)); // Expected: true

// const obj3 = { a: 1 };
// console.log(isEqual(obj1, obj3)); // Expected: false

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(isEqual(arr1, arr2)); // Expected: true

// const arr3 = [1, 2, 4];
// console.log(isEqual(arr1, arr3)); // Expected: false

// const obj1 = { a: { b: { c: 1 } } };
// const obj2 = { a: { b: { c: 1 } } };
// console.log(isEqual(obj1, obj2)); // Expected: true

// const obj3 = { a: { b: { c: 2 } } };
// console.log(isEqual(obj1, obj3)); // Expected: false

// const arr1 = [{ a: 1 }, { b: 2 }];
// const arr2 = [{ a: 1 }, { b: 2 }];
// console.log(isEqual(arr1, arr2)); // Expected: true

// const arr3 = [{ a: 1 }, { b: 3 }];
// console.log(isEqual(arr1, arr3)); // Expected: false

// const obj1 = { a: 1, b: () => 2 };
// const obj2 = { a: 1, b: () => 2 };
// console.log(isEqual(obj1, obj2)); // Expected: false
// // Functions are not deeply equal because their references are different.

// const obj1 = { a: { b: [1, 2], c: 3 }, d: 4 };
// const obj2 = { a: { b: [1, 2], c: 3 }, d: 4 };
// console.log(isEqual(obj1, obj2)); // Expected: true

// const obj3 = { a: { b: [1, 2], c: 3 }, d: 5 };
// console.log(isEqual(obj1, obj3)); // Expected: false

// const obj1 = { a: null };
// const obj2 = { a: null };
// console.log(isEqual(obj1, obj2)); // Expected: true

// const obj3 = { a: undefined };
// console.log(isEqual(obj1, obj3)); // Expected: false

// const obj4 = { a: null };
// console.log(isEqual(obj1, obj4)); // Expected: true

// const obj1 = { a: NaN };
// const obj2 = { a: NaN };
// console.log(isEqual(obj1, obj2)); // Expected: true (NaN is equal to NaN in this case)

const date1 = new Date('2021-01-01');
const date2 = new Date('2021-01-01');
console.log(isEqual(date1, date2)); // Expected: true

const date3 = new Date('2022-01-01');
console.log(isEqual(date1, date3)); // Expected: false
