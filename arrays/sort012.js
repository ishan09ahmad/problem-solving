// sort array of 0,1,2

//brute
// let arr=[0,1,2,0,1,2,1,2,0,0,0,1];
// arr=arr.sort((a,b)=>a-b);

// console.log(arr)

// tc-O(nlogn)
// sc-O(n)




//better

// let arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

// let counter1 = 0;
// let counter2 = 0;
// let counter3 = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) counter1++;
//   if (arr[i] == 1) counter2++;
//   if (arr[i] == 2) counter3++;
// }

// for (let i = 0; i < counter1; i++) {
//   arr[i] = 0;
// }
// for (let i = counter1; i < counter1 + counter2; i++) {
//   arr[i] = 1;
// }
// for (let i = counter1 + counter2; i < counter1 + counter2 + counter3; i++) {
//   arr[i] = 2;
// }

// console.log(arr);

// tc-O(nlogn)
// sc-O(n)




//optimal

let arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let low=arr[0]

let mid=arr[0];
let high=arr.length-1

while(mid<=high)
{
  if (arr[mid]==0)
  {
    let temp=arr[low];
    arr[low]=arr[mid];
    arr[mid]=temp;
    low++;
    mid++;
  }

  else if(arr[mid]==1)
  {
    mid++;
  }
  else if(arr[mid]==2)
  {
       let temp=arr[mid];
    arr[mid]=arr[high];
    arr[high]=temp;
    high--;
  }

}

console.log(arr)

// tc-O(nlogn)
// sc-O(n)
