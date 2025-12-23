// Check if a number is prime or not

let n=19;
let count=0;
for (let i = 2; i*i <=n; i++) {
 if(n%i==0)
 {
  count++;
  break;
 }

}
if(count==0)
{
  console.log("prime")
}
else
{
  console.log("not a prime")
}

