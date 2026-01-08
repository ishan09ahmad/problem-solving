// Question:
// Find Index of Largest Number in Array
// Given an array, find the index (1-based) of the largest element

let arr=[1,2,34,65,6,55,101];
  let largest=0;
  let index;
for(let i=0;i<arr.length;i++)
{
  if(arr[i]>largest)
  {
    largest=arr[i]
    index=i;
  }
}
console.log(index)