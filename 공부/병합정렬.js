/**
 * 분할 정복이라는 알고리즘 디자인 기법에 근거해서 만들어짐.
 * 1) 문제를 분할 -> 2) 분할된 문제를 해결-> 3) 해결한 결과를 집합
 * 둘로 나누는 과정을 반복.
 * 시간복잡도 O(N log N)
 * 항상 안정적으로 빠른 정렬이 필요할 때 쓰임
 */
function mergeSort(array) {
  // 병합정렬은 array.length가 1이 될때까지
  if (array.length === 1) {
    return array;
  }

  const length = array.length;
  const middle = Math.floor(length / 2); // 중간을 구하기위해서 소수점 제거 후 길이를 반으로 나눠줌
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  // 각각의 첫번째 인덱스, 투 포인터 방식임
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    // 왼쪽 값이 오른쪽값보다 작다면
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // while문은 left/right 둘 중 하나라도 끝까지 다 쓰면 멈춘다.
  // 그래서 아직 안 쓴 나머지 값들이 한쪽 배열에 남아있을 수 있다.
  // left와 right는 이미 정렬된 배열이라, 남은 값들은 비교 없이 그대로 뒤에 붙이면 된다.
  // slice(leftIndex), slice(rightIndex)는 "아직 안 쓴 값들"만 잘라낸다.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([2, 3, 5, 8, 1, 4, 5, 7]));
