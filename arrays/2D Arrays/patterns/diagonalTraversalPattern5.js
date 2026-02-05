// pattern 5 with (n-1,0)

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let n = arr.length;
let m = arr[0].length;

for (let k = n + m - 2; k >= 0; k--) {
  let i, j;

  if (k > n-1) {
    i = k - (n - 1);
    j = 0;
  } else {
    i = 0;
    j = m - 1 - k;
  }

  while (i < n && j < m) {
    console.log(arr[i][j]);
    i++;
    j++;
  }
}