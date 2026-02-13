
//brute method
// let arr=[2,6,5,8,11];
// let target=14;
// let isfound=false
// for (let i = 0; i < arr.length-1; i++) {
// for (let j = i+1; j < arr.length; j++) {
// if(arr[i]+arr[j]==target)
// {
//   isfound=true;
//   break;
// }

// }
// if(isfound) break

// }
// console.log(isfound)



// optimal

let arr=[2,6,5,8,11];
let target=14;
let isFound=false;
let map=new Map();
for (let i = 0; i < arr.length; i++) {
  let dif=target-arr[i];
  if(map.has(dif)) isFound=true

  map.set(arr[i],i)

}

console.log(isFound)



