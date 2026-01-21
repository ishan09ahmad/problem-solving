let arr=[1,2,4,5,6,7,8,99,100];


let temp=arr[0];
for (let i = 1; i < arr.length; i++) {

arr[i-1]=arr[i]
  
}
arr[arr.length-1]=temp

console.log(arr)