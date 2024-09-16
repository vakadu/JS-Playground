function encode(input) {
  let count = 1,
    result = "";

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += count + input[i - 1];
      count = 1;
    }
  }

  return result;
}

console.log(encode("abbcccdddeea"));
