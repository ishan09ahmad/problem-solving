function toggleithBit(n,i)
{
n=n ^ (1<<i);
return n;
}

console.log(toggleithBit(13,2))