// Question:
// Last Occurrence in Unsorted Array
// Given an unsorted array of size n and a key,
// find and print the last index of the key.
// The key is guaranteed to be present in the array.

let arr = [8, 5, 1, 4, 5, 3, 2];
let key=5;
let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (key == arr[i]) {
    index = i;
  }
}
console.log(index);
