// Write a function that accept ca positive number N.
// The function should console log a pyramid shape
// with N levels using the # character. Make sure the
// pyramid has spaces on both the left *and* right hand side!
// -- Examples
// pyramid(3)
//    '  #  '
//    ' ### '
//    '#####'

function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let line = "";
    // 2n-1 will certify the number of col
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col >= mid - row && col <= mid + row) {
        // Append
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

pyramid(3);
