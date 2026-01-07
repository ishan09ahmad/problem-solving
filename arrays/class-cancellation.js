// Question:
// Angry Professor
// Given n students and a threshold k, determine whether the class is canceled.
// Students with arrival time <= 0 are on time.
// If fewer than k students arrive on time, print YES; otherwise, print NO.


let arr=[1,2,0,0,-1];
let n=5;
let k=3


let count=0;
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]<=0)
      {
        count++;
      }
    }
    if(count>=k)
    {

       console.log("NO");
     
    }

    else
    {
     console.log("YES") 
    }