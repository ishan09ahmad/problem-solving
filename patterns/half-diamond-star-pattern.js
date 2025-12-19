// Question:
// Half Diamond Star Pattern
// Print a half-diamond shaped star pattern for given n
// for n = 5
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

let n = 5;
let pattern;

for (let i = 0; i < (2 * n) - 1; i++) {
  pattern = "";
  if (i < 5) {
    for (let j = 0; j < i + 1; j++) {

      pattern = pattern + "*";
    }
  }
  else {

    for (let j = 0; j < (2 * n) - i - 1; j++) {

      pattern = pattern + "*"
    }

  }
  console.log(pattern)
}