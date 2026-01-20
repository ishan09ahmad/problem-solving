// 2nd largest without sorting
// let arr = [10, 2, 3, 4, 5, 9, 1];
// let largest = -Infinity;
// let sLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
// if(arr[i]>largest)
// {
//   largest=arr[i]
// }

// }

// for (let j = 0; j < arr.length; j++) {

//   if(arr[j]>sLargest && arr[j]<largest)
//   {
//     sLargest=arr[j];
//   }

// }

// console.log(sLargest)
// tc-O(2n) =>O(n)
// sc-O(1)



 let arr = [10, 2, 3, 4, 5, 9, 1];

let largest = arr[0];
let sLargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    sLargest=largest
    largest = arr[i];
    
  }
  else if(arr[i]<largest && arr[i]>sLargest ){
   sLargest=arr[i] 
  }
}
console.log(sLargest);


// tc-O(n)
// sc-O(1)