let arr = [9, 5, 8, 7, 3, 2];
// let arr = [1, 2, 3, 4, 5, 6];

function mergeSort(arr, low, high) {
  if (low == high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

mergeSort(arr, 0, 5);

console.log(arr);



// tc-best case,worst case and average case is O(nlogn)
//  sc is O(n)