let arr = [9, 5, 8, 7, 3, 2];
// let arr = [1, 2, 3, 4, 5, 6];

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = quick(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

function quick(arr, low, high) {
  let i = low;
  let j = high;
  let pivot = low;

  while (i < j) {
    while (arr[i] <= arr[pivot] && i <= high - 1) {
      i++;
    }
    while (arr[j] > arr[pivot] && j >= low + 1) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[j];
  arr[j] = arr[pivot];
  arr[pivot] = temp;

  return j;
}

quickSort(arr, 0, arr.length - 1);

console.log(arr);



// tc-best case,worst case and average case is O(nlogn)
//  sc is O(n)