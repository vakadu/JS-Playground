function capitalize(s) {
    s=String(s);
    return s[0].toUpperCase() + s.slice(1).toLowerCase()
}

console.log(capitalize('FRED')); // "Fred"
console.log(capitalize('fRED')); // "Fred"
console.log(capitalize('hello WORLD')); // "Hello world"
