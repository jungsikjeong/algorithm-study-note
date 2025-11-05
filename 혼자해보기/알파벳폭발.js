function solution(s) {
  let stack = [];

  for (var i = 0; i < s.length; i++) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1].toUpperCase() === s[i].toUpperCase() &&
      stack[stack.length - 1] !== s[i]
    )
      stack.pop();
    else stack.push(s[i]);
  }

  if (stack.length === 0) return "";

  return stack.join("");
}
console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));
