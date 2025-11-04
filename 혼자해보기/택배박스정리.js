// 스택 문제
/* 포인트 
1. 이전 박스 번호를 기억한다.
2. 다음 박스가 다르면 push한다.
3. 반복이 끝나면 결과를 반환한다.
*/
function solution(boxes) {
  const result = [];
  for (var i = 0; i < boxes.length; i++) {
    let currentNum = boxes[i];

    if (result.length === 0) {
      result.push(boxes[i]);
    }

    if (currentNum !== result[result.length - 1]) {
      result.push(boxes[i]);
    }
  }
  return result;
}

console.log(solution([2, 2, 5, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0, 0]));
