//  Armstrong number

let n = 1634;
let original = n;
let sumValue = 0

let count = 0;
while (n) {
  count++;
  n = Math.floor(n / 10);
}
n = original;

while (n) {

  sumValue = (n % 10) ** count + sumValue;
  n = Math.floor(n / 10);
}

if (sumValue == original) {
  console.log(original + " is a Armstrong number")
}
else {
  console.log(original + " is not a Armstrong number")
}



