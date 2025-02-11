// -- Examples
// anagrams('coding money', 'money coding') ---> True
// anagrams('RAIL! SAFETY!', 'fairy tales') ---> True
// anagrams('Hi there', 'Bye there') ---> True

// // Do Not Repeat Yourself (DRY)
function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagrams(stringA, stringB) {
  // sort stringA in stringB
  // .replace(/[\W]/g, '')  figure expression to get ride of space and punctuation
  return cleanStr(stringA) === cleanStr(stringB);
}

// console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("coding money", "money coding"));
// console.log(anagrams("Hi there", "Bye there"));

// // Do Not Repeat Yourself (DRY)
// function charMap(str) {
//     const charmap = {};
//     str = str.toLowerCase().replace(/[\W]/g, ""); // w will not match but W will match
//     for (let char of str) {
//       charmap[char] = ++charmap[char] || 1;
//     }
//     return charmap;
//   }

//   function anagrams(stringA, stringB) {
//     // Step 1: Build Char Map for StringA
//     const charmapA = charMap(stringA);

//     // Step 2: Build Char Map for StringB
//     const charmapB = charMap(stringB);

//     // Step 3: Compare each character in the both the Char Maps
//     if (Object.keys(charmapA).length !== Object.keys(charmapB).length)
//       return false;
//     // loop in object used "in" but in array use "of"
//     for (let key in charmapA) {
//       if (charmapA[key] !== charmapB[key]) return false;
//     }

//     return true;
//   }
