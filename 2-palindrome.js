// --- Examples:
// palindrome("kayak") === true
// palindrome("madam") === true
// palindrome("codingmoney") === false

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
  //   return str === reversed ? "Very Good" : "Bad";
  //   if (str === reversed) {
  //     return true;
  //   }
  //   return false;
}
console.log(palindrome("kayak"));
