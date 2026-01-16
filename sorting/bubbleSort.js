let arr = [9, 5, 8, 7, 3, 2];
// let arr = [1, 2, 3, 4, 5, 6];

let isSwap = false;
for (let i = arr.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      isSwap = true;
    }
  }
  if (!isSwap) break;
}

console.log(arr);

// bubble sort is bubbling the max value to the ith index
// tc-worst case and average case is O(n²), but best case is O(n)
//  sc is O(1)
