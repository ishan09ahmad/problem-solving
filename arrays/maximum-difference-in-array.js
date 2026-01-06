// Question:
// Write a program to find out the maximum difference between any two element in an array.
// Note: if an element is arr[i] and another element is arr[j] then difference will be |arr[i]-arr[j]|

let arr = [16, 24, 89, 35];

function ArrayProblem(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > max) {
        max = Math.abs(arr[i] - arr[j]);
      }
    }
  }
  return max;
}

console.log(ArrayProblem(arr));
