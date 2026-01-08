// Question:
// Plus Minus
// Given an array of N integers, calculate the ratios of
// positive, negative, and zero elements to N.
// Print each ratio on a new line up to 6 decimal places.

let n = 6;
let arr = [-4, 3, -9, -5, 4, 1];

let positive=0;
let negative=0;
let zero=0;
for(let i=0;i<arr.length;i++)
{
  if(arr[i]==0)
  {
    zero++;
  }
  else if(arr[i]>0)
  {
    positive++;
  }
  else
  {
    negative--;
  }
}
console.log((positive/arr.length).toFixed(2))
console.log((-negative/arr.length).toFixed(2))
console.log((zero/arr.length).toFixed(2))