let binary = 1010;

let pow = 0; 
let decimal = 0;
while (binary) {
  decimal = decimal + (binary % 10) * 2 ** pow;
  pow++;
  binary = Math.floor(binary / 10);
}

console.log(decimal);


// tc -O(d)  d is the length of the Number;
// sc -O(1)  