// Question:
// Symmetric-Void Pattern
// Print a symmetric void pattern for given n
// for n = 5
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// *        *
// **      **
// ***    ***
// ****  ****
// **********

let n = 5;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";

  for (let j = 0; j < n - i; j++) {
    pattern = pattern + "*";

  }
  for (let j = 0; j < 2 * i; j++) {

    pattern = pattern + " ";
  }

  for (let l = 0; l < n - i; l++) {
    pattern = pattern + "*";

  }
  console.log(pattern)
}



for (let i = 0; i < n; i++) {
  pattern = "";

  for (let j = 0; j < i + 1; j++) {
    pattern = pattern + "*";

  }
  for (let j = 0; j < 2 * (n - i - 1); j++) {

    pattern = pattern + " ";
  }

  for (let l = 0; l < i + 1; l++) {
    pattern = pattern + "*";

  }
  console.log(pattern)
}