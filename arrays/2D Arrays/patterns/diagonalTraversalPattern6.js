// pattern 6 with (n-1,0)


let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let n = arr.length;
let m = arr[0].length;

for (let k = m+n-2; k>=0; k--) {
  let i, j;

  if (k > m-1) {

        i = n-1;
    j = 2*(m - 1)-k;

  } else {
  i = k;
    j = m-1;
  }

  while (i >=0 && j>=0) {
    console.log(arr[i][j]);
    i--;
    j--;
  }
}