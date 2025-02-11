const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  //// method 1: Reducer
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);

  //// method 2
  /* 
    let count = 0;
    for(let char of str.toLowerCase()){
      if(vowels.includes(char)){
        count ++;
      }
    }
    return count;
    */
};
console.log(findVowels("addgregwo"));
