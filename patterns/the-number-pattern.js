// Question:
// The Number Pattern
// Print the number pattern for given n
// for n = 4
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

let n = 4;
let pattern;

for (let i = 0; i < 2 * n - 1; i++) {
  pattern = "";
  for (let j = 0; j < 2 * n - 1; j++) {
    let top = i;
    let left = j;
    let right = 2 * n - 1 - 1 - j;
    let bottom = 2 * n - 1 - 1 - i;

    pattern =
      pattern + (4 - Math.min(Math.min(top, bottom), Math.min(left, right)));
  }
  console.log(pattern);
}
