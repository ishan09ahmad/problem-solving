let arr = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  reverseArray(arr, left + 1, right - 1);
}

reverseArray(arr);
console.log(arr);
