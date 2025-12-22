//  palindrome number

let n=12321;
let original=n;
let palindrome=0;

while(n)
{
palindrome=palindrome*10+n%10;
 n=Math.floor(n/10);
}
console.log(palindrome)
if(original==palindrome)
{
  console.log("palindrome");
}
else
{
   console.log("not a palindrome");
}