let arr1 = [1, 1, 2, 3, 4, 6, 6];

let arr2 = [1, 2, 3, 4, 4, 5, 6];

let union = [];

let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] <= arr2[j]) {
    if (union[union.length - 1] != arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  } else {
    if (union[union.length - 1] != arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
}

while (i < arr1.length) {
  if (union[union.length - 1] != arr1[i]) {
    union.push(arr1[i]);
  }
  i++;
}

while (j < arr2.length) {
  if (union[union.length - 1] != arr2[j]) {
    union.push(arr2[j]);
  }
  j++;
}

console.log(union);
