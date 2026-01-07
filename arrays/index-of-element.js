// Question:
// Index of Element
// Given an array Arr of size n and a number x,
// print all the 1-based indexes where X occurs.
// If x is not present, print -1.

let n = 5;
let x = 1;
let arr = [2, 1, 3, 1, 1];

 let index=[];
  for(let i=0;i<n;i++)
  {
   if(arr[i]==x)
   {
    index.push(i+1);
   }
  }
  if(index.length==0)
  {
    console.log(-1);
  }
  else{

   console.log(index.join(" "))
  }
