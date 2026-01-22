let arr=[0,1,0,0,2,0,3,0,4,0,5,6]
// let temp=[];
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]!==0)
// {
//   temp.push(arr[i])
// }

// }
// for (let i = 0; i < temp.length; i++) {
// arr[i]=temp[i]

// }

// for (let i = temp.length; i < arr.length; i++) {
// arr[i]=0
  
// }


// console.log(arr)

let j;
for (let i = 0; i < arr.length; i++) {
if(arr[i]==0)
{
  j=i;
  break;
}
  
}
for (let i = j+1; i < arr.length; i++) {
  if(arr[i]!==0)
  {
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j++;
  }
  
}

console.log(arr)