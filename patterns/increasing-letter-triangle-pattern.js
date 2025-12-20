// Question:
// Increasing Letter Triangle Pattern
// Print an increasing letter triangle pattern for given n
// for n = 5
// A
// A B
// A B C
// A B C D
// A B C D E

let n = 5;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern = pattern + String.fromCharCode(65 + j) + " ";

  }
  console.log(pattern);

}




