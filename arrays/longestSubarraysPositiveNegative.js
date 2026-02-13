let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
   let sum=0;
   
   let length=-1;
   let k=3;
   let map=new Map()

   for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    if(sum==k)
    {
      length=i+1
    }
    let rem=sum-k;
    if(map.has(rem))
    {
     
      length=Math.max(length,i-map.get(rem));
      map.set(sum,i);
    }
    if(!map.has(sum))
    {
 
      map.set(sum,i);
    }
    
   }

   console.log(length)