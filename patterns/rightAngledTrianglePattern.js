// Question:
// Right-Angled Triangle Pattern
// Print a right-angled triangle of stars for given n
// for n = 5
// *
// * *
// * * *
// * * * *
// * * * * *

let n = 5;
let pattern;
for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern = pattern + "* ";
  }
  console.log(pattern);
}
