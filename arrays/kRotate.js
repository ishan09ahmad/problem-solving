let arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];
// let n = arr.length;
// let k = 5;
// k = k % n;

// let temp = [];
// for (let i = 0; i < k; i++) {
//   temp.push(arr[i]);
// }

// for (let i = k; i < arr.length; i++) {
//   arr[i - k] = arr[i];
// }

// for (let i = n - k; i < n; i++) {
//   arr[i] = temp[i - (n - k)];
// }

// console.log(arr);

let k = 3;
k=k%arr.length
function reverseArray(arr, low, high) {
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
}

reverseArray(arr, 0, k-1);
reverseArray(arr, k , arr.length - 1);
reverseArray(arr, 0, arr.length - 1);

console.log(arr);
