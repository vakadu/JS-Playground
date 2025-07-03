String.prototype.customIncludes = function (target) {
  for (let index = 0; index < this.length; index++) {
    const tempSlice = this.slice(index, target.length + index);
    if (tempSlice === target) {
      return true;
    }
  }
  return false;
};

// const str = 'Hello, world!';
// console.log(str.customIncludes('world'));
// console.log(str.customIncludes('foo'));

// str.customIncludes('foo')
// console.log(customIncludes(str, 'world')); // Output: true
// console.log(customIncludes(str, 'foo')); // Output: false

Object.prototype.customKeys = function () {
  let result = [];

  for (const key in this) {
    if (this.hasOwnProperty(key)) result.push(key);
  }

  return result;
};

const obj = { a: 1, b: 2, c: 3 };
// console.log(obj.customKeys()); // Output: ['a', 'b', 'c']

Object.prototype.customAssign = function (target, ...sources) {
  let result = target;
  for (let source of sources) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = source[key];
      }
    }
  }

  return result;
};

// const target = { a: 1 };
// const source = { b: 2, c: 3 };

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

// console.log(Object.customAssign(target, source1, source2));

let person = {
  name: "vinod",
  age: 32,
};
let person2 = {
  name: "vinod2",
  age: 33,
};

function getDetails(hometown, city) {
  return `${this.name}` + "----->" + `${this.age}`+ "----->" +`${hometown}`+ "----->" + `${city}`;
}

// console.log(getDetails.apply(person,["nellore", "tirupathi"]));
// console.log(getDetails.apply(person2,["nellore", "tirupathi"]));

// console.log(getDetails.call(person2,"nellore", "tirupathi"));

// const temp = getDetails.bind(person2,"nellore", "bind");
// console.log(temp());

Function.prototype.myBind = function(...args) {
    let func = this;

    return function(...innerArgs) {
        return func.apply(args[0], [...args.slice(1), ...innerArgs])
    }    
}

const customBind = getDetails.myBind(person2,"nellore", "bind");
// console.log(customBind());


String.prototype.customTrim = function() {
  let left=0,right=this.length-1;

  while(left < right) {
    if(this[left] === " " && this[right] === " ") {
      left++;
      right--;
    }
    else if(this[left] === " ") {
      left++;
    }
    else if(this[right] === " ") {
      right--;
    } else {
      break
    }
  }

  return this.slice(left, right+1)
}

const str = "   Hello, world!   ".customTrim();
console.log(str); // Output: "Hello, world!"

