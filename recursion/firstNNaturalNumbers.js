// Sum of first N Natural Numbers

function NaturalNumberSum(n) {
  if (n == 0) return 0;
  return n + NaturalNumberSum(n - 1);
}

console.log(NaturalNumberSum(10));
