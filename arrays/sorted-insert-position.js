// Question:
// Sorted Insert Position
//  write a function searchInsert(A, B) that takes a sorted array A of integers and a target integer B. The function should return the index if the target is found in the array. If the target is not found, the function should return the index where the target would be if it were inserted in order. Assume there are no duplicates in the array. 



let arr=[1, 3, 5, 6] 
let b=10
function searchInsert(arr, b) {
  let index=-1;
 for(let i=0;i<arr.length;i++)
 {
if(arr[i]==b)
{
  index=i;
  break;
}
else if(arr[i]>b)
{
index=i;
break;
}
else
{
  index=i+1
}
 }
return index

}

console.log(searchInsert(arr,b))