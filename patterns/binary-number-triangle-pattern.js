// Question:
// Binary Number Triangle Pattern
// Print a binary number triangle pattern for given n
// for n = 5
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


let n = 5;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j < i + 1; j++) {
    if ((i + j) % 2 == 0) {
      pattern = pattern + "1";
    }
    else pattern = pattern + "0";
  }
  console.log(pattern)
}