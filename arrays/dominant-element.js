// Question:
// You are given an integer array nums of size n where the largest integer is unique. Your task is to determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, print the index of the largest element, or print -1 otherwise.

let n=4;
let nums=[3, 1,16, 2];

function LargestElement(nums, n) {
let largest=-Infinity;
let index;
let button=true;
// let value=1;
for(let i=0;i<n;i++)
{
  if(nums[i]>largest)
  {
    largest=nums[i];
    index=i;
  }
}

for(let i=0;i<n;i++)
{
  if((2*nums[i])>largest && largest!=nums[i])
  {
button=false
  }

}

if(button)
{
  return index;
}
else
{
  return -1
}
}

console.log(LargestElement(nums, n))


