// --- Examples
// maxChar("abccccccccd") === "c"
// maxChar("apple 12311111") === '1'

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let mzxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  //   convert object to an array
  for (const [key, value] of Object.entries(charMap)) {
    console.log(key, value);
    // find maximum value
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  return maxChar;
}
console.log(maxChar("abccccccccd"));
