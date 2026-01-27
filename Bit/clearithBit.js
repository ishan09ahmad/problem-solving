function clearithBIt(n, i) {

  n=n & ~(1<<i);

return n;
}

console.log(clearithBIt(13,2))