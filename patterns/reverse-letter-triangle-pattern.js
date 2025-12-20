// Question:
// Reverse Letter Triangle Pattern
// Print a reverse letter triangle pattern for given n
// for n = 5
// A B C D E
// A B C D
// A B C
// A B
// A 

let n = 5;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";

  for (let j = 0; j < n - i; j++) {
    pattern = pattern + String.fromCharCode(65 + j) + " "

  }
  console.log(pattern)


}