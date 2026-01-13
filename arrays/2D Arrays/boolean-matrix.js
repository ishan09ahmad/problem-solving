// Question:
// Boolean Matrix
// Given a binary matrix, if any cell contains 1, set all elements in its row and column to 1.

let arr = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];



for(let i=0;i<arr.length;i++)
{
    let isBoolean=false;
  for(let j=0;j<arr.length;j++)
  {
    if(arr[i][j]==1)
    {
      isBoolean=true;
      break;
    }
  }
   if(isBoolean)
   {
    for(let j=0;j<arr.length;j++)
  {
    arr[i][j]=1
  }
   }
}



 for(let i=0;i<arr.length;i++)
  {
    let result=""
    for(let j=0;j<arr[i].length;j++)
    {
    result=result+arr[i][j]+" "
    }
    console.log(result)
  }
