// Question:
// Hollow Rectangle Pattern
// Print a hollow rectangle pattern for given n
// for n = 4
// * * * *
// *     *
// *     *
// * * * *

let n = 4;

let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j < n; j++) {
    if (i == 0 || i == n-1 || j == 0 || j == n-1) {
      pattern = pattern + "*";
    }
   else  pattern = pattern + " ";
  }
  console.log(pattern);
}
