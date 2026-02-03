//pattern 2 with (0,0)


let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let n = arr.length;
let m = arr[0].length;

for (let k = 0; k < n + m - 1; k++) {
  let i, j;

  if (k < m) {
    i = 0;
    j = k;
  } else {
    i = k - (n - 1);
    j = m - 1;
  }

  while (i <n && j>=0) {
    console.log(arr[i][j]);
    i++;
    j--;
  }
}