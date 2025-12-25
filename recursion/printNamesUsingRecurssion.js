// Print Name N times using Recursion

let n = 5;

function printNames(a) {
  if (a > 0) {
    console.log("ishan");
    a--;
    printNames(a);
  }
  else return;
}

printNames(n);
