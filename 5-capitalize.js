// -- Examples
//  capitalize('this is makhtar from coding money')
//  capitalize('what is titlecase?')
//  capitalize('titles of books, movies, songs, plays and other works')

function capitalize(str) {
  const words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  // // methods 2:
  // for (let word of words) {
  //   result.push(word[0].toUpperCase() + word.slice(1));
  // }
  // return result.join(" ");
}
console.log(capitalize("this is makhtar from coding money"));
