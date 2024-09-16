function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let map = new Map();

  for (let char of s1) {
    map.set(char, map.get(char) + 1 || 1);
  }

  for (let char of s2) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);

      if (map.get(char) <= 0) {
        map.delete(char);
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
