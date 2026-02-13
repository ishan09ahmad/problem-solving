// find the element which is greater than n/2

// brute force
// let arr=[7,7,5,7,5,1,5,7,5,5,,7,7,5,5,5,5]
// let count=0;
// let result=-1;
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++) {
//   if(arr[i]=arr[j])
//   {
//     count++;
//   }

// }
// if(count> Math.floor(arr.length/2))
// {
//   result=arr[i];
//   break
// }

// }
// console.log(result)

// tc - O(n*n);
// sc- O(1)



// better

// let arr=[7,7,5,7,5,1,5,7,5,5,,7,7,5,5,5,5]
// let map= new Map();
// let result=-1;

// for (let i = 0; i < arr.length; i++) {
//   if(map.has(arr[i]))
//   {
//     map.set(arr[i], (map.get(arr[i])+1))
//   }
//   else
//   {
//     map.set(arr[i],1)
//   }
// }

// for (const i of map) {
//   if(i[1]>Math.floor(arr.length/2))
//   {
//     result=i[0]
//   }
// }

// console.log(result)

// tc -O(n)
// sc -O(n)


// optimal

let arr = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5,  7, 7, 5, 5, 5, 5];
let num;
let count = 0;


for (let i = 0; i < arr.length; i++) {
  if (count == 0) {
    num = arr[i];
    count = 1;
  } else if (arr[i] == num) {
    count++;
  } else if (arr[i] != num) {
    count--;
  }
}


let freq = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num)   freq++;

}

  if (freq > Math.floor(arr.length / 2)) {
    console.log(num);
  }
  


// tc -O(n)
// sc -O(1)
