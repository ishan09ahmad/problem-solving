let arr=[1,0,1,1,0,2,3,1,1,1,1,1];
let count=0;
let max=0;
for (let i = 0; i < arr.length; i++) {
 if(arr[i]==1)
 {
  count++;
  max=max>count?max:count;
 }
 else
 {
  count=0;
 }
  
}
console.log(count)