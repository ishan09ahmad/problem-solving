// Print N to 1 using Recursion
function printNumber(i, n) {
  if (n >= 1) {
    console.log(n);
    printNumber(i, n - 1);
  } else return;
}

printNumber(1, 20);
