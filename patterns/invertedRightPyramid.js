// Question:
// Inverted Right Pyramid Pattern
// Print an inverted right-angled star pyramid for given n
// for n = 5
// * * * * *
// * * * *
// * * *
// * *
// *


let n=5;
let pattern;

for (let i = 0; i < n; i++) {
 pattern="";
 for (let j = 0; j <(n-i); j++) {
  pattern=pattern +"* "
 }
 console.log(pattern)
  
}