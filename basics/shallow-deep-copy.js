// Primitives;
// 1 undefined;
// 2 String;
// 3 Number;
// 4 Boolean;
// 5 Symbol;
// 6 BigInt;

//Structural
// 1 Object: Obejct, Array, Set, Map, Date
// 2 Function

//value vs reference

// let a = 1;
// let b = a;
// b += 2;
// console.log(a, b);

// let x = "str";
// let y = x;
// y += 2;
// console.log(x, y);

// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
// arr2.push(5);
// console.log(arr1, arr2);

//primitives are immutable
// let x = "str";
// x[0] = "S";
// console.log(x);

//reassignment is different from immutable
// let x = 123;
// x = 345; //reassignment works
// console.log(x);

//structures are mutable
// let arr1 = [1, 2, 3, 4];
// arr1.push(5);
// console.log(arr1);

//shallow vs deep

//shallow
// let a = [1, 2, 3];
// let b = [...a, 10];
// let c = a;
// console.log(a, b, a === b, a === c);

//Object.assign is not suitable for merging arrays use spread instaed
//
// let d = Object.assign([], b);

//nested arrays or objects
// d.push([6, 7, 8]);
// let e = [...d];
// e.push(9);
// e[4].push(9);
// console.log(d, e);

//nested data types share a reference in shallow copy
//spread or object.assign doesn't share a reference unless there is nested object
//Ex: let a=[1,2,3], b=[...a]
//now if i push b.push(4)
//log will be a=[1,2,3], b=[1,2,3,4]
//thats how its supposed to be, but if i have nested object then its different see below //ex:
// let a = [1, 2, 3],
//   b = [...a];
// b.push(4);
// b.push([5, 6, 7]);
// let c = [...b];
// c[4].push(10);

// console.log(b, c);
// b: [1, 2, 3, 4, [5, 6, 7, 10]];
// c: [1, 2, 3, 4, [5, 6, 7, 10]];
// here as you can see both of them got updated because of shallow copy evne thru the reference is different
//shallow copy doesnt go deep to change the data

//Array.from, slice also creates shallow copy

//same is the case with objecxts also

// let u = { a: 1, b: 3, c: 4, d: 5, f: { g: 55, h: 89 } };
// let v = Object.assign({}, u);

// Object.freeze(u);
// u.f.g = 56;

// // v.e = 8;
// console.log(u, v);

// Object.freeze is also shallow copy
