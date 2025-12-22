// Given an integer N return the reverse of the given number
let n=12345;

let reverse=0;
while(n)
{
  reverse=reverse*10 + n%10;
  n=Math.floor(n/10);
}
console.log(reverse);