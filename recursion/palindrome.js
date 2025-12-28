// let str='ishanahamd';

// if(str==str.split("").reverse().join(""))
// {
//   console.log("plaindrome")
// }
// else
// {
//   console.log("not a palindrome ")
// }

let str = "madam";

let str2 = new String(str);
let arr = str.split("");


function stringPlaindrome(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  stringPlaindrome(arr, left + 1, right - 1);
}
stringPlaindrome(arr);
str2=arr.join("");

if(str==str2)
{
  console.log("string is palindrome");
}
else
{
 console.log("string is not palindrome");
}
