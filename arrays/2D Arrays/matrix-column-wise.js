// Question:
// Print Matrix Column Wise l

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n=arr.length;
let result;

for (let j = 0; j < n; j++) {
  result=""
  for (let i = 0; i < n; i++) {
    result = result + arr[i][j] + " ";
  }
  console.log(result)
}


