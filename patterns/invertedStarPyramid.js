// Question:
// Inverted Star Pyramid
// Print a centered inverted star pyramid for given n
// for n = 5
//* * * * * * * * *
//  * * * * * * *
//    * * * * *
//      * * *
//        *

let n = 5;
let pattern;
for (let i = 0; i < n; i++) {
  pattern = "";
  for (let k = 0; k <2*(i) ; k++) {
    
    pattern=pattern+ " "
  }
  for (let j = 0; j < 2*(n - i)-1; j++) {
   
    pattern = pattern + "* ";
  }
  console.log(pattern);
}
