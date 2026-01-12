// Question:
// Square Matrix Multiplication
// Given two square matrices of size n × n,
// compute and print their matrix multiplication

let arr1=[[1,1,1],[2,2,2],[3,3,3]];
let arr2=[[1,1,1],[2,2,2],[3,3,3]];

let n=arr1.length;

let result=[];
for(let i=0;i<n;i++)
{
  result[i]=[];
  for(let j=0;j<n;j++)
  {
    let sum=0;
    for(let k=0;k<n;k++)
    {
      sum=sum+arr1[i][k]*arr2[k][j]
    }
    result[i][j]=sum;
  }
}
for(let i=0;i<n;i++)
{
  console.log(result[i].join(" "))
}