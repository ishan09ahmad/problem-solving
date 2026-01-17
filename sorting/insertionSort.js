let arr = [9, 5, 8, 7, 3, 2];
// let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  let j = i;

  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
    j--;
  }
}

console.log(arr);

// insertion sort  means=> ith index element will be inserted in its correct postion for an array til ith postion

// tc-worst case and average case is O(n²), but best case is O(n)
//  sc is O(1)
