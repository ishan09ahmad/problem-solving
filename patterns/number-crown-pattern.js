// Question:
// Number Crown Pattern
// Print a number crown pattern for given n
// for n = 4

let n = 4;
let pattern;

for (let i = 0; i < n; i++) {
  pattern = "";
  for (let j = 1; j <= i + 1; j++) {
    pattern = pattern + j;
  }
  for (let k = 0; k <2*(n - i - 1); k++) {
    pattern = pattern + " ";
  }

  for (let l = i+1; l >0 ; l--) {
pattern=pattern+l;
    
  }
  console.log(pattern);
}
