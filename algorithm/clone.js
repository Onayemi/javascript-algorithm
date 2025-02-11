let obj = { a: 1, b: 2 };
// let clone = {...obj };  // method 1
let clone = Object.assign({}, obj); // method 2
clone.foo = "foo";
console.log(obj, clone);
