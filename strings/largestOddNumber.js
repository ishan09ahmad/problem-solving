let str = "0214638";


let i = 0;
let j = str.length - 1;


while (i < str.length && str[i] === '0') {
  i++;
}

while (j >= 0 && Number(str[j]) % 2 === 0) {
  j--;
}


console.log(i <= j ? str.slice(i, j + 1) : "no such number");