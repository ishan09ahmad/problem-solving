// Question:
// Symmetric-Butterfly Pattern
// Print a symmetric butterfly pattern for given n
// for n = 5
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****       
// ***    ***      
// **      **       
// *        *       

let n = 5;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";

  for (let j = 0; j < i + 1; j++) {
    pattern = pattern + "*";
  }
  for (let k = 0; k < 2 * (n - i - 1); k++) {
    pattern = pattern + " ";
  }

  for (let l = 0; l < i + 1; l++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}



for (let i = 0; i < n - 1; i++) {
  pattern = "";

  for (let j = 0; j < n - i - 1; j++) {
    pattern = pattern + "*";
  }
  for (let k = 0; k < 2 * (i + 1); k++) {
    pattern = pattern + " ";
  }

  for (let l = 0; l < n - i - 1; l++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
