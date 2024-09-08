class Dictionary {
  constructor(words) {
    this.dict = words;
  }

  isInDict(word) {
    return this.dict.some((dictWord) => {
      const regexTemplate = word.replaceAll("*", ".");
      const regex = new RegExp(`^${regexTemplate}$`);
      console.log(regex, dictWord);
      return regex.test(dictWord);
    });
    // if (this.dict.has(word)) {
    //   return true;
    // }
    // return false;
  }
}

const dict = new Dictionary(["cat", "dog", "bat"]);
console.log(dict.isInDict("cat"));
console.log(dict.isInDict("ca*"));
console.log(dict.isInDict("*a*"));
console.log(dict.isInDict("*a**"));
