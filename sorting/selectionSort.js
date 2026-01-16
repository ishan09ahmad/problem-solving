let arr = [9, 5, 8, 7, 3, 2];
// let arr=[1,2,3,4,5,6];
  let min;
for (let i = 0; i < arr.length - 1; i++) {
  min = i;
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}

console.log(arr);


//selecting the min of the array and place it at the ith index
// tc-best case,worst case and average case is O(n²)
//  sc is O(1)
