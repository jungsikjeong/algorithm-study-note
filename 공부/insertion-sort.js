// 선택정렬
// 현재 값을 뽑아서, 왼쪽에 나보다 큰 놈들을 오른쪽으로 밀고, 남은 자리에 꽂는다!

function insertionSort(array) {
  const n = array.length;

  // 첫번째는 정렬되어있다고 가정하고 두번째부터 시작
  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;

    // 0보다 크거나 같으면서, 현재 값보다 크다면
    while (j >= 0 && array[j] > current) {
      // 오른쪽으로 이동을 시켜줌
      array[j + 1] = array[j];
      j--; // index 왼쪽으로 한칸씩 이동하면서 비교, 처음 반복분은 j가 0이므로 여기선 j= -1이됌 그래서 while문 탈출
    }

    // while문을 벗어나게되면 올바른 위치에 현재 값을 삽입해주게 된다.
    array[j + 1] = current;
  }

  return array;
}

console.log(insertionSort([77, 41, 6, 4, 3, 2, 5, 222]));

// 260528 오후 10시 37분
// Q: 근데 왜 첫번째는 정렬되어있다고 가정하는거지?
// A: i=0 부터 시작하면 비교할 왼쪽 원소가 없어서 아무것도 못 함.
//    그래서 i=1부터 시작해서 두 번째 우너소를 첫 번째와 비교 하는게 의미가 있다.
