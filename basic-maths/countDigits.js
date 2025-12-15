
// Question:
// Given an integer N, return the number of digits in N.

function countDigits(n)
{
  let number=n;
  let count=0;
  while(number>0)
  {
    number=Math.floor(number/10);
   
    count++;

  }
return count;
  
}
console.log(countDigits(12345));