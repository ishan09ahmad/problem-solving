//pattern 7 with (n-1,m-1)


let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let n = arr.length;
let m = arr[0].length;

for (let k = n+m-1; k >=0 ; k--) {
  let i, j;

if(k>m-1)
{
 i=n-1;
 j=k-(m-1);

}
else
{
  i=k;
  j=0
}

  while (i >= 0 && j < n) {
    console.log(arr[i][j]);
    i--;
    j++;
  }
}