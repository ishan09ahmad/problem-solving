// Question:
// Sum of Array Except Self
// Given an array of n integers (n > 1),
// return an array where output[i] is the sum of
// all elements except nums[i].

let n = 4;
let arr = [4, 3, 2, 10];
let output = [];
let sum = 0;
for (let i = 0; i < n; i++) {
  sum = sum + arr[i];
}
for (let i = 0; i < n; i++) {
  output[i] = sum - arr[i];
}


console.log(output)