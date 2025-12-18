// Question:
// Inverted Numbered Right Pyramid
// Print an inverted right-angled number pyramid for given n
// for n = 5
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n = 5;
let pattern;
for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 1; j <= n - i; j++) {
    pattern = pattern + j + " ";
  }
  console.log(pattern);
}
