// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side!
// -- Examples
// stesps(3)
//    '#  '
//    '## '
//    '###'

function steps(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

steps(6);
