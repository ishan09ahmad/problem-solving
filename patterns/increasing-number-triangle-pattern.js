// Question:
// Increasing Number Triangle Pattern
// Print an increasing number triangle pattern for given n
// for n = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


let n = 5;
let pattern;
let count = 0;
for (let i = 0; i < n; i++) {
  pattern = "";

  for (let j = 0; j < i + 1; j++) {
    count++;
    pattern = pattern + count + " ";

  }
  console.log(pattern)

}