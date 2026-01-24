//brute method
// let arr = [1, 2, 4, 5, 6];
// let n = 6;
// let num = -1;
// let isFound;

// for (let i = 1; i <= n; i++) {
//   isFound=false
//   for (let j = 0; j < arr.length; j++) {
//     if (i == arr[j]) {
//       isFound = true;
//       break;
//     }
//   }

//   if (!isFound) {
//     num = i;
//   }
// }

// console.log(num)



//better

// let arr = [1, 2, 4, 5, 6];

// let n=6;
// let missingNum=-1;

// let hash=new Array(n+1).fill(0);

// for (let i = 0; i < arr.length; i++) {
// hash[arr[i]]+=1;

// }

// console.log(hash)

// for (let i = 1; i < hash.length; i++) {
// if(hash[i]==0)
// {
// missingNum=i;
// break;
// }

// }
// console.log(missingNum)



//optimal

let arr = [1, 2, 4, 5, 6];
let n = 6;
let xor1 = 0;
let xor2 = 0;
for (let i = 0; i < arr.length; i++) {
  xor1 = xor1 ^ arr[i];
  xor2 = xor2 ^ (i + 1);
}
xor2 = xor2 ^ n;
console.log(xor1 ^ xor2);
