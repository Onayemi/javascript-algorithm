// -- Directions
// Given an array and chunk size, divided the array into many subarrays
// where each subarray is of length size
//  --- Examples:
// chunk([1,2,3,4], 2) ---> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) ---> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) ---> [[1,2,3], [4,5,6], [7,8]]
// chunk([1,2,3,4,5], 4) ---> [[1,2,3,4], [5]]
// chunk([1,2,3,4,5], 10) ---> [[1,2,3,4,5]]

function chunk(array, size) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

// console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
