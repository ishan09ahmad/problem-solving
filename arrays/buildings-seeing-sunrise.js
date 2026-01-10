// Question:
// Buildings Seeing Sunrise
// Given an array of building heights,
// count how many buildings can see the sunrise.
// Assume sunrise is from the starting side of the array.

let n = 5;
let arr = [7, 4, 8, 2, 9];

let heighest = -Infinity;
let count = 0;
function facingSun(n, arr) {
  for (let i = 0; i < n; i++) {
    if (arr[i] > heighest) {
      count++;
      heighest = arr[i];
    }
  }
  return count;
}

console.log(
facingSun(n,arr))