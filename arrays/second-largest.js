// Question:
// Find the second largest element in a given array
let arr=[1,2,3,4,5,6];


let largest=-Infinity;
  let slargest=-Infinity;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>largest)
    {
      largest=arr[i];
    }
  }
    for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>slargest && arr[i]<largest)
    {
      slargest=arr[i];
    }
  }
  console.log(slargest)