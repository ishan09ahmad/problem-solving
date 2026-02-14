let str = "()(()())(())";
let level=0;
let result=[];
for (const ch of str) {
  if(ch==="(")
  {
    if(level>0) result.push(ch);
    level++;
  }
  else if(ch==")")
  {
    level--;
    if(level>0) result.push(ch)
  }
}

result=result.join("")

console.log(result)