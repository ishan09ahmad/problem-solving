// Question:
// Rectangular Star Pattern
// Print a rectangle of stars for given rows and columns
// for n=5
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


let n = 5;
let pattern;
for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j < n; j++) {
    pattern = pattern + "* ";
  }
  console.log(pattern);
}
