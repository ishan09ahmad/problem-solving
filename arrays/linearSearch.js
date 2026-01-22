let arr=[6,7,1,2,3,4,5];

let num=40;
let count=-1
for (let i = 0; i < arr.length; i++) {
  if(arr[i]==num)
  {
count=i;
break;
  }
  
}

if(count==-1)
{
  console.log("element not found")
}
else
{
  console.log("element is at index: "+count)
}