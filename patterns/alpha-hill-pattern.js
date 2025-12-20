// Question:
// Alpha-Hill Pattern
// Print an alpha-hill pattern for given n
// for n = 4
//   A
//  ABA
// ABCBA
//ABCDCBA

let n = 4;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j < n - i - 1; j++) {
    pattern = pattern + " ";
  }
  for (let k = 0; k <= i; k++) {
    pattern = pattern + String.fromCharCode(65 + k);
  }
  for (let l = i; l > 0; l--) {
    pattern = pattern + String.fromCharCode(65 + l - 1);
  }
  console.log(pattern);
}
