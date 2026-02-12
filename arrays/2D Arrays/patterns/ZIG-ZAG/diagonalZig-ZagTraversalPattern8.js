//pattern 7 with (n-1,m-1)


let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let n = arr.length;
let m = arr[0].length;

let i = n - 1;
let j = m - 1;
for (let k = 0; k < n * m; k++) {
  console.log(arr[i][j]);

  if ((i + j) % 2 == 0) {
    if (i == n - 1) {
      j--;
    } else if (j == 0) {
      i--;
    } else {
      i++;
      j--;
    }
  } else {

    if (i == 0) {
      j--;
    }
    else  if (j == m - 1) {
      i--;
    }  else {
      i--;
      j++;
    }
  }
}