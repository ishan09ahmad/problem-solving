// Question:
// Count Pairs with Given Difference
// Given an array of N integers and an integer K,
// count the total number of pairs whose difference is exactly K.

let n = 5;
let k = 2;
let arr = [1, 5, 3, 4, 2];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] - arr[j] == k || arr[i] - arr[j] == -k) {
      count++;
    }
  }
}
console.log(count);
