let arr=[1,1,2,2,3,3,4,5,6];


let j=0;
for(let i=1;i<arr.length;i++)
{
if(arr[j]!=arr[i])
{
  let temp=arr[i];
  arr[i]=arr[j+1];
  arr[j+1]=temp;
  j++;
}

}

console.log(j+1 + " unique elemnts are in the array")

