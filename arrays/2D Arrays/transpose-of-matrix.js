// Question:
// Transpose of a arrrix
// Given a 2D arrrix, convert it into its transpose by swapping rows with columns.

let arr = [[1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3, 3],[4, 4, 4, 4]];


 for(let i=0;i<arr.length;i++)
  {
    for(let j=i;j<arr[i].length;j++)
    {
      let temp=arr[i][j];
      arr[i][j]=arr[j][i];
      arr[j][i]=temp;
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
