function checkIthBit(n, i) {
  if ((n & (1 << i ))  != 0) {
    console.log("ith bit is set");
  } else {
    console.log("ith bit is not set");
  }
}

checkIthBit(13, 2);
checkIthBit(9, 2);


