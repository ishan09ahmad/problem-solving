//brute method
// let arr=[1,1,2,2,3,4,4,5,5]
// let num=-1
// let count;
// for (let i = 0; i < arr.length; i++) {
//   count=0;
//   for (let j = 0; j < arr.length; j++) {
//  if(arr[i]==arr[j])
//  {
//   count++;
//  }

//   }
//   if(count==1)
//   {
//     num=arr[i];
//   }

// }

// console.log(num)

//better approach
// let arr=[1,1,2,2,3,4,4,5,5]

// let n=Math.max(...arr);

// let hash=new Array(n+1).fill(0)
// let num=-1;

// for (let i = 0; i < arr.length; i++) {
//   hash[arr[i]]+=1;

// }

// for (let i = 0; i < hash.length; i++) {
//  if(hash[i]==1)
//  {
//   num=i
//  }

// }
// console.log(num)

//optimal approach
let arr = [1, 1, 2, 2, 3, 4, 4, 5, 5,5];

let xor=0;

for (let i = 0; i < arr.length; i++) {
 xor=xor^arr[i]
  
}
console.log(xor)