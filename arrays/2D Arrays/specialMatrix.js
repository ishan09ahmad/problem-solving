// A square matrix is called special matrix if all the non-diagonal elements of the matrix are zero and the diagonal elements are non-zero.

let arr = [
  [1, 0, 2],
  [0, 2, 0],
  [3, 0, 1],
];
let n=arr.length;

function special(arr, n){
for(let i=0;i<n;i++)
{
for(let j=0;j<n;j++)
{
if(i==j)
{
  if(arr[i][j]==0)
  {
  return false;
  }
}
else if(j==(n-1-i))
{
    if(arr[i][j]==0)
  {
  return false;
  }
}
else
{
     if(arr[i][j]!=0)
  {
  return false;
  }
}
}
}
return true;
}

console.log(special(arr,n))