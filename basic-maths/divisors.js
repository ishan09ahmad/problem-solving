// Given an integer N, return all divisors of N.

let num=36;
let arr=[];

for (let i = 1; i*i<=num; i++) {
if(num%i==0)
{
arr.push(i)
  if(num/i!=i)
  {
   arr.push(num/i)
  }
}
  
}

arr.sort((a,b)=>a-b);
arr.forEach((i)=>console.log(i))