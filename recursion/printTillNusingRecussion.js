// Print 1 to N using Recursion

function printNumber(i,n) {
if(i<=n)
{
  console.log(i);
 printNumber(i+1,n); 
}
else return;
}

printNumber(1,20);
