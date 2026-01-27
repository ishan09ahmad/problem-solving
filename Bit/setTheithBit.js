
function setithBit(n,i)
{
  n=n | (1<<2);
  return n;
}

console.log(setithBit(9,2));