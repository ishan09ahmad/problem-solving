// Question:
// Alpha-Triangle Pattern
// Print an alpha triangle pattern for given n
// for n = 5

// E
// D E
// C D E
// B C D E
// A B C D E

let n=5;
let pattern;

for (let i = 0; i <n ; i++) {
  pattern="";
  
  for (let j = 0; j < i+1; j++) {
   pattern=pattern+String.fromCharCode(65+n-i+j-1)
    
  }
  console.log(pattern)
  
}