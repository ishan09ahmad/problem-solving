let n = 16;
let binary = "";

while (n) {
  binary = binary + (n % 2);
  n = Math.floor(n / 2);
}

binary = binary.split("").reverse().join("");
console.log(binary);



// tc -O(d)  d is the length of the Number;
// sc -O(d)  d is the length of the Number;