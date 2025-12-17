// Question:
// Right-Angled Number Pyramid - II
// Print a right-angled number pyramid for given n
// for n = 5
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n = 5;
let pattern;
for (let i = 1; i <= n; i++) {
  pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + i + " "

  }
  console.log(pattern)
}
