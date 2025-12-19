// Question:
// Diamond Star Pattern
// Print a diamond-shaped star pattern for given n
// for n = 5
//        *
//      * * *
//    * * * * *
//  * * * * * * *
//* * * * * * * * *
//* * * * * * * * * 
//  * * * * * * *  
//    * * * * *    
//      * * *  
//        *   

let n = 5;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j < n - i - 1; j++) {
    pattern = pattern + " ";

  }
  for (let k = 0; k < (2 * i) + 1; k++) {
    pattern = pattern + "*";

  }
  console.log(pattern)

}

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j < i; j++) {
    pattern = pattern + " ";

  }
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    pattern = pattern + "*";

  }
  console.log(pattern)

}