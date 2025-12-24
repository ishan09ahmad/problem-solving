//  Given two integers N1 and N2, find their greatest common divisor.

let n1 = 20;
let n2 = 72;
let gcd = 1;
let smallest = n1 > n2 ? n2 : n1;

for (let i = 1; i * i <= smallest; i++) {
  if (n1 % i == 0 && n2 % i == 0) {
    gcd = gcd > i ? gcd : i;
    if (n1 % (smallest / i) == 0 && n2 % (smallest / i) == 0) {
      gcd = gcd > smallest / i ? gcd : smallest / i;
      break;
    }
  }
}

console.log(gcd);
