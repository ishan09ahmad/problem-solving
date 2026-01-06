// Question:
// Array Sum, Average and Maximum
// Given an array, find the sum, average, and maximum element

let n = 6
let arr = [1, 2, 3, 4, 5, 6]


  let sum = 0;
  let average = 0;
  let maximum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i]
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  average = Math.floor(sum / n);
  
  console.log(sum, average, maximum)
