// brute
let str1 = "anagram";
let str2 = "nagaram";

// str1=str1.split("").sort().join("")
// str2=str2.split("").sort().join("")

// console.log(str1,str2)

// console.log(str1===str2)

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return "not anagram";
  if (str1 === str2) return "anagram";

  let hash = new Array(26).fill(0);

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  for (let i = 0; i < str1.length; i++) {
    hash[str1.charCodeAt(i) - "A".charCodeAt(0)]++;
  }

  for (let i = 0; i < str2.length; i++) {
    hash[str2.charCodeAt(i) - "A".charCodeAt(0)]--;
  }


  for (let i = 0; i < hash.length; i++) {
    if(hash[i]!==0)
    {
      return "not anagram"
    }
    
  }
  return "anagram"
}
console.log(checkAnagram(str1, str2))

