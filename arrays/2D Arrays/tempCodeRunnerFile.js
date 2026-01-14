let mat = [
  [1, 2, 3],
  [6, 7, 8],
  [11, 12, 13],
];

let top = 0;
let bottom = 2;
let left = 0;
let right = 2;

while (left <= right && top <= bottom) {
  for (let i = top; i <= bottom; i++) {
    console.log(mat[i][left]);
  }
  left++;

  for (let i = left; i <= right; i++) {
    console.log(mat[bottom][i]);
  }
  bottom--;

  if (left <= right) {
    for (let i = bottom; i >= top; i--) {
      console.log(mat[i][right]);
    }
    right--;
  }

  if (top <= bottom) {
    for (let i = right; i >= left; i--) {
      mat[top][i];
    }
    top++;
  }

  // for (let i = left; i <= right; i++) {
  //   console.log(mat[top][i]);

  // }
  //   top++;
  // for (let i = top; i <= bottom; i++) {
  //   console.log(mat[i][right]);

  // }
  //   right--;
  // if (left <= right) {
  //   for (let i = right; i >= left; i--) {
  //     console.log(mat[bottom][i])

  //   }
  //     bottom--;
  // }
  // if(top<=bottom)
  // {
  //   for (let i = bottom; i>=top; i--) {
  //     console.log(mat[i][left])

  //   }
  //   left++
  // }
}
