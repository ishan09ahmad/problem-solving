// Question:
// Consecutive Pair Sum
// Given an array of size n and an integer k,
// count the number of consecutive element pairs
// whose sum is equal to k.
// Return the number of consecutive pairs whose sum will be equal to k.

let arr = [1, 2, 4, 3];
let k=3;

function ArrayProblem(arr, k) {
  let count=0;
for(let i=0;i<arr.length-1;i++)
{
  if((arr[i]+arr[i+1])==k)
  {
    count++;
  }
 
}
 return count;
}

console.log(ArrayProblem(arr,k))