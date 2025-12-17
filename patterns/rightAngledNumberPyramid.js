// Question:
// Right-Angled Number Pyramid
// Print a right-angled number pyramid for given n
// for n = 5
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let n=5;
let pattern;

for (let i = 1; i <= n; i++) {
pattern=""
  for (let j = 1; j <=i; j++) {
    pattern=pattern+j+" ";
  }
  console.log(pattern)
  
}