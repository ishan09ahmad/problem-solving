function checkPowerOf2(n) {
  if ((n & (n - 1 ))== 0) { 
    console.log("power of 2");
  } else {
    console.log("not power of 2");
  }
}

checkPowerOf2(16);
