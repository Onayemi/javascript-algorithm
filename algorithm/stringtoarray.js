function reverse(str) {
  /*
    const strToArray = str.split('')
    strToArray.reverse();
    return strToArray.join('');
   */
  return str.split("").reverse().join("");
}
console.log(reverse("CodingMoney"));

// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");
//   return reversed;
// }
// console.log(reverseInt(15));
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(-15));
