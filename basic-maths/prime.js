// Check if a number is prime or not

let n = 19;
let count = 0;
for (let i = 1; i * i <= n; i++) {
  if (n % i == 0) {
    count++;
    if (n / i !== i) {
      count++;
    }
  }
}

if (count == 2) {
  console.log("prime");
} else {
  console.log("not a prime");
}
