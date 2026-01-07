// Question:
// Comparing Array Sums
// Given two arrays arr1 and arr2 of equal size,
// compare the sum of their elements.
// If arr1 sum is greater → print "First array is larger"
// If arr2 sum is greater → print "Second array is larger"
// Otherwise → print "Both are equal"

let arrA=[1,2,3,4,5];
let arrB=[1,2,7,8,9];

function arrayProblem(arrA, arrB) {
  let sum1=0;
  let sum2=0;
  for(let i=0;i<arrA.length;i++)
  {
    sum1=sum1+arrA[i];
  }
    for(let i=0;i<arrB.length;i++)
  {
    sum2=sum2+arrB[i];
  }
  if(sum1>sum2)
  {
return "First array is larger"
  }
  else if(sum2>sum1)
  {
return "Second array is larger"
  }
  else{
    return "Both are equal"
  }
}

console.log(arrayProblem(arrA,arrB))