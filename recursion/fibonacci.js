

let n = 10;

// function fibo(n) {
//   let fibo = new Array(n).fill(0);
//   fibo[0] = 0;
//   fibo[1] = 1;

//   if(n==1)
//   {
//     console.log(fibo[0])
//   }
//   if(n==2)
//   {
//     console.log(fibo[0],fibo[1])
//   }
//   for (let i = 2; i <n; i++) {
//   fibo[i]=fibo[i-1]+fibo[i-2];
    
//   }
// fibo.forEach((i)=>console.log(i))
// }


// fibo(10)


function fibo(n)
{
  if(n<=2)
  {
    return n-1;
  }
  let last=fibo(n-1);
  let slast=fibo(n-2);
  return last +slast;
}

console.log(fibo(10))