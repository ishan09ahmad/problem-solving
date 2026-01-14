// Question:
// Boundary Traversal of Matrix
// Given a 2D matrix, traverse and output only the boundary elements in clockwise order.

let arr = [
  [5, 4, 6, 3],
  [1, 4, 3, 5],
  [5, 1, 9, 6],
];
let m = 3;
let n = 4;

for (let j = 0; j < n; j++) {
  console.log(arr[0][j]);
}

for (let i = 1; i < m; i++) {
  console.log(arr[i][n - 1]);
}

if (m > 1) {
  for (let j = n - 2; j >= 0; j--) {
    console.log(arr[m - 1][j]);
  }
}
if (n > 1) {
  for (let i = m - 2; i > 0; i--) {
    console.log(arr[i][0]);
  }
}
