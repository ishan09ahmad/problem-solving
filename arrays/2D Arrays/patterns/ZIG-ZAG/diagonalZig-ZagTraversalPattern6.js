// pattern 6 with (n-1,0)



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
    if (j == m - 1) {
      i--;
    } else if (i == 0) {
      j--;
    } else {
      i--;
      j++;
    }
  } else {

    if (j == 0) {
      i--;
    }
    else  if (i == n - 1) {
      j--;
    }  else {
      i++;
      j--;
    }
  }
}