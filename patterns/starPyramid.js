// Question:
// Star Pyramid
// Print a centered star pyramid for given n
// for n = 5
//        *
//      * * *
//    * * * * *
//  * * * * * * *
//* * * * * * * * *

let n = 5;
let pattern;
let space;
for (let i = 0; i < n; i++) {
  pattern = "";
  space = "";
  for (let j = 0; j < 2 * (n - i - 1); j++) {
    pattern = pattern + " ";
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    pattern = pattern + "* ";
  }
  console.log(pattern);
}



