// let str = "rotation";
// let goal = "tionrota";

// function checkRotation(str1, goal) {
//   if (str1.length !== goal.length) return "not rotation";
//   if (str1 == goal) return "rotation";
//   let result = "";
//   let i = 0;
//   let j = str1.length - 1;
//   str1 = str1 + str1;

//   while (j < str1.length) {
//     result = str1.substring(i, j + 1);
//     if (result === goal) {
//       return `equal after ${i}th rotation`;
//     }
//     i++;
//     j++;
//   }
// }

// console.log(checkRotation(str, goal));



let str = "rotation";
let goal = "tionrota";

function checkRotation(str1, goal) {
  if (str1.length !== goal.length) return "not rotation";
  if (str1 == goal) return "rotation";
  
  str1 = str1 + str1;
  if(str1.includes(goal)) return "rotation"

 
}

console.log(checkRotation(str, goal));