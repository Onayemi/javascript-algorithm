// -- Examples
//  Vowels are the character 'a','e','i','o' and 'u'
//  vowels('Hi There') --> 3
//  vowels('How are you?') --> 5
//  vowels('Coding Money') --> 3
//  vowels('why?') --> 3

function vowels(str) {
  const vowelCheck = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) count++;
  }
  return count;
}

// console.log(vowels("Hi There"));
console.log(vowels("How are you?"));
// console.log(vowels("Coding Money"));
// console.log(vowels("why?"));

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi); // i is case sensitivity
//     return matches ? matches.length : 0;
//   }
