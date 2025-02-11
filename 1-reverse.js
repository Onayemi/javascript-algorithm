function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverse("CodingMoney"));

console.log("================================");
const str = "Welcome to this Javascript Guide!";
const reverseString = (str) => str.split(" ").reverse().join(" ");

console.log(reverseString(str));

console.log("============= Reverse Int ===================");
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(-15));
