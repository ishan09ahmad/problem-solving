//pattern 1 with (0,0)

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let n = arr.length;
let m = arr[0].length;

for (let k = 0; k <n+m-1 ; k++) {
  let i, j;

  if (k < n) {
    i = k;
    j = 0;
  } else {
    i = n - 1;
    j = k - (m - 1);
  }
  while (i >= 0 && j < n) {
    console.log(arr[i][j]);
    i--;
    j++;
  }
}