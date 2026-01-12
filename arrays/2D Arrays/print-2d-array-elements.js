// Question:
// Print 2D Array Elements
// Given a 2D array, print all its elements row by row

let arr = [[1, 2, 3],[4, 5, 6]];

for (let i = 0; i < arr.length; i++) {
  let result = "";
  for (let j = 0; j < arr[i].length; j++) {
    result = result + arr[i][j] + " ";
  }
  console.log(result);
}
