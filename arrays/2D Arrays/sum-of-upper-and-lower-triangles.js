// Question:
// Sum of Upper and Lower Triangles
// Given a square matrix, find the sum of elements
// in the upper triangle and the lower triangle of the matrix

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


let lower=0;
    let upper=0;
    for(let i=0;i<arr.length;i++)
    {
      for(let j=0;j<arr.length;j++)
      {
        if(i>=j)
        {
lower=lower + arr[i][j]
        }
        if(i<=j)
        {
          upper=upper+arr[i][j]
        }
      }
    }

    console.log(upper+" "+lower)