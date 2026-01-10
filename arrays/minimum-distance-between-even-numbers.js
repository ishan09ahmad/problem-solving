// Question:
// Minimum Distance Between Even Numbers
// Given an array, find the shortest distance between
// two even positive integers.
// Distance is |i - j| between their indexes.
// If there are one or no even positive integers, return -1.

let n = 5;
let arr = [2, 4, 1, 6, 7];

function ArrayProblem(n, arr) {
  let distance = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] % 2 == 0 && arr[j] % 2 == 0 && arr[i] > 0 && arr[j] > 0) {
        if (Math.abs(i - j) < distance) {
          distance = Math.abs(i - j);
        }
      }
    }
  }
  if (distance == Infinity) {
    return -1;
  } else return distance;
}

console.log(ArrayProblem(n,arr))
