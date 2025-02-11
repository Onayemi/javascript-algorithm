// --- Examples
// maxChar("abccccccccd") === "c"
// maxChar("apple 12311111") === '1'

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
    // charMap[char] = charMap[char] + 1 || 1;
  }
  //   convert object to an array
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}
// console.log(maxChar("abccccccccd"));
console.log(maxChar("apple 1231111 apple"));
