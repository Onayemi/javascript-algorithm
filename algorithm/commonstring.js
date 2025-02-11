const mostFrequent = (arr) => {
  const mapping = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  return Object.entries(mapping).reduce(
    (acc, el) => (el[1] > acc[1] ? el : acc),
    [null, 0]
  )[0];
};
console.log(mostFrequent(["a", "b", "c", "a", "b", "b", "b"]));
