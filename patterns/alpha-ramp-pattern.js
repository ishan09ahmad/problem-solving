// Question:
// Alpha-Ramp Pattern
// Print an alpha-ramp pattern for given n
// for n = 5
// A
// B B
// C C C
// D D D D
// E E E E E

let n=5;
let pattern;

for (let i = 0; i < n; i++) {
pattern="";
for (let j = 0; j < i+1; j++) {
  pattern=pattern+String.fromCharCode(65+i)+" "
  
}
console.log(pattern)
  
}