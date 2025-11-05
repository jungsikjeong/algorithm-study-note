function solution(gate) {
  let stack = [];

  for (var i = 0; i < gate.length; i++) {
    if (gate[i] === "<") stack.push(gate[i]);
    if (gate[i] === ">") {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}
console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
