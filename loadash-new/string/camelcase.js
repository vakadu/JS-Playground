function camelCase(s) {
  let start = 0,
    end = s.length - 1,
    inArr = ["-", "_", " "];

  while (inArr.includes(s[start])) start++;
  while (inArr.includes(s[end])) end--;

  let words = [],
    current = "";

  for (let index = start; index <= end; index++) {
    const element = s[index];
    if (inArr.includes(element)) {
      words.push(current);
      current = "";
    } else {
      current += element;
    }
  }

  if (current.length > 0) {
    words.push(current);
  }

  return words.map((word, idx) => {
    return idx === 0
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

console.log(camelCase('Foo Bar'));           // "fooBar"
console.log(camelCase("--foo-bar--")); // "fooBar"
console.log(camelCase('__FOO_BAR__'));       // "fooBar"
console.log(camelCase('hello world test'));  // "helloWorldTest"
