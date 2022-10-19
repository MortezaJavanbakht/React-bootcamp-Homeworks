let aclean = (inputArray) => {
  let anagrams = new Set();
  let outputList = [];
  for (let word of inputArray) {
    let wordchars = word.toLowerCase().split("").sort().join("");
    if (!anagrams.has(wordchars)) {
      anagrams.add(wordchars);
      outputList.push(word);
    }
  }
  return outputList;
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
