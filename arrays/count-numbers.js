// Question:
// Count Numbers Greater Than num

let arr=[12,14,78,99,56,235,1,22,48];
let num=15;

let count=0;
for(let i=0;i<arr.length;i++)
{
  if(arr[i]>num)
  {
    count++;
  }
}
console.log(count)